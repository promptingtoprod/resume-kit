#!/usr/bin/env node
/**
 * validate.js - checks a job's content.json against the house rules and
 * reports. Works with nothing installed beyond Node.
 *
 * If LibreOffice happens to be installed, it also converts the Word file to
 * PDF and reports the page count. If not, it says so and you check the page
 * count by opening the Word file.
 *
 * Usage: node scripts/validate.js <job-slug>
 */

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { loadConfig, resolveJob, loadContent, outputBase, hardFails, warnings } = require("./checks");

const config = loadConfig();
const job = resolveJob(process.argv[2]);
const cv = loadContent(job.contentPath);
const jdPath = path.join(job.dir, "jd.md");
const jdText = fs.existsSync(jdPath) ? fs.readFileSync(jdPath, "utf8") : "";

console.log(`Validating: ${job.contentPath}\n`);

const fails = hardFails(cv, config);
console.log("Hard checks (these stop a build):");
if (fails.length) fails.forEach(f => console.log("  FAIL  " + f));
else console.log("  OK    no unconfirmed facts, no template text, no banned characters");

const warns = warnings(cv, config, jdText);
console.log("\nStyle checks (advice, never blocks a build):");
if (warns.length) warns.forEach(w => console.log("  WARN  " + w));
else console.log("  OK    nothing flagged");
if (!jdText.trim()) console.log("  NOTE  jd.md is empty, so the copied-from-the-posting check was skipped");

// ---------------------------------------------------------------- page count
console.log(`\nPage count (target: ${config.pageTarget}):`);
const docxPath = path.join(job.dir, outputBase(cv, job.slug) + ".docx");
if (!fs.existsSync(docxPath)) {
  console.log("  NOTE  no Word file yet - run build_resume.js first");
} else {
  const pages = countPages(docxPath);
  if (pages === null) {
    console.log("  NOTE  LibreOffice not found, so I cannot count pages for you.");
    console.log("        Open the Word file and read the page count from the status bar.");
  } else {
    console.log(`  ${pages <= config.pageTarget ? "OK  " : "OVER"}  ${pages} page(s)`);
    if (pages > config.pageTarget) {
      console.log("        Compression sequence, in order:");
      console.log("        1. tighten language  2. rebuild with --compress  3. remove the weakest bullets");
    }
  }
}

process.exit(fails.length ? 1 : 0);

function findSoffice() {
  const candidates = [
    "soffice",
    "C:\\Program Files\\LibreOffice\\program\\soffice.exe",
    "C:\\Program Files (x86)\\LibreOffice\\program\\soffice.exe",
    "/Applications/LibreOffice.app/Contents/MacOS/soffice",
  ];
  for (const c of candidates) {
    try { execFileSync(c, ["--version"], { stdio: "ignore" }); return c; } catch (e) { /* try next */ }
  }
  return null;
}

function countPages(docx) {
  const soffice = findSoffice();
  if (!soffice) return null;
  try {
    execFileSync(soffice, ["--headless", "--convert-to", "pdf", "--outdir", path.dirname(docx), docx], { stdio: "ignore" });
    const pdf = fs.readFileSync(docx.replace(/\.docx$/, ".pdf"), "latin1");
    const m = pdf.match(/\/Type\s*\/Pages[^>]*?\/Count\s+(\d+)/) || pdf.match(/\/Count\s+(\d+)/);
    return m ? Number(m[1]) : null;
  } catch (e) {
    return null;
  }
}
