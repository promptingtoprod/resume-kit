/**
 * checks.js - the guards shared by build_resume.js and validate.js.
 *
 * HARD FAILS stop the build. They exist so a resume with an unconfirmed fact,
 * leftover template text, or a banned character can never be produced.
 * Fix the content. Do not edit a guard to get a build through.
 *
 * WARNINGS never stop a build. They are the house style, checked by machine.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const DEFAULTS = {
  paper: "Letter",
  font: "Calibri",
  fontSizePt: 11,
  accentColor: "1F3864",
  pageTarget: 2,
  maxBulletChars: 230,
  hardFail: ["—"],
  warnPhrases: ["Oversaw", "Spearheaded", "Orchestrated", "Leveraged", "Championed"],
  weakOpeners: ["Responsible for", "Helped", "Assisted", "Supported"],
  warnYearCountInSummary: true,
};

function loadConfig() {
  const p = path.join(ROOT, "config.json");
  if (!fs.existsSync(p)) return { ...DEFAULTS };
  const user = JSON.parse(fs.readFileSync(p, "utf8"));
  return { ...DEFAULTS, ...user };
}

/** Accepts a job slug ("acme-ops-manager"), a folder, or a content.json path. */
function resolveJob(arg) {
  if (!arg) throw new Error("Give a job: a slug under jobs/, a folder, or a content.json path.");
  let p = arg;
  if (!fs.existsSync(p)) p = path.join(ROOT, "jobs", arg);
  if (!fs.existsSync(p)) p = path.join(ROOT, arg);
  if (!fs.existsSync(p)) throw new Error(`Cannot find job "${arg}". Run: node scripts/new-job.js ${arg}`);
  const stat = fs.statSync(p);
  const dir = stat.isDirectory() ? p : path.dirname(p);
  const contentPath = stat.isDirectory() ? path.join(p, "content.json") : p;
  if (!fs.existsSync(contentPath)) throw new Error(`No content.json in ${dir}`);
  return { dir, contentPath, slug: path.basename(dir) };
}

function loadContent(contentPath) {
  const cv = JSON.parse(fs.readFileSync(contentPath, "utf8"));
  delete cv._comment;
  return cv;
}

/** File-safe base name: "Bob" + slug -> Bob_slug */
function outputBase(cv, slug) {
  const person = String(cv.name || "resume").split(",")[0].trim().replace(/[^A-Za-z0-9]+/g, "_");
  return `${person}_${slug}`.replace(/_+/g, "_");
}

/** Walk every string in the content, calling fn(text, trail). */
function walk(obj, fn, trail = "cv") {
  if (typeof obj === "string") fn(obj, trail);
  else if (Array.isArray(obj)) obj.forEach((v, i) => walk(v, fn, `${trail}[${i}]`));
  else if (obj && typeof obj === "object") Object.entries(obj).forEach(([k, v]) => walk(v, fn, `${trail}.${k}`));
}

const bulletText = b => (typeof b === "string" ? b : b.map(s => s.text).join(""));
const sentences = s => String(s).split(/(?<=[.!?])\s+/).filter(x => x.trim()).length;
const words = s => String(s).trim().split(/\s+/).filter(Boolean).length;

function hardFails(cv, config) {
  const fails = [];
  walk(cv, (text, trail) => {
    if (/NEED CONFIRMATION/i.test(text)) fails.push(`${trail}: unconfirmed fact - "${text.slice(0, 90)}"`);
    if (/\b(REPLACE|TODO)\b/.test(text)) fails.push(`${trail}: leftover template text - "${text.slice(0, 90)}"`);
    config.hardFail.forEach(bad => {
      if (text.includes(bad)) fails.push(`${trail}: banned "${bad}" - "${text.slice(0, 90)}"`);
    });
  });
  if (!cv.name) fails.push("cv.name is missing");
  if (!Array.isArray(cv.experience) || !cv.experience.length) fails.push("cv.experience is empty");
  return fails;
}

function warnings(cv, config, jdText) {
  const out = [];
  const flat = [];
  walk(cv, text => flat.push(text));
  const all = flat.join("\n");

  config.warnPhrases.forEach(p => {
    if (new RegExp(`\\b${p}\\b`, "i").test(all)) out.push(`Inflated verb in content: "${p}" - use a plain one.`);
  });

  if (cv.summary) {
    if (sentences(cv.summary) > 3) out.push(`Summary has ${sentences(cv.summary)} sentences (rule: 2-3).`);
    if (config.warnYearCountInSummary && /\b\d{1,2}\+?\s+years\b/i.test(cv.summary)) {
      out.push("Summary counts years (rule: dates carry tenure).");
    }
    if (/\bteam of \d+|\b\d+\s+(staff|direct reports|reports|people)\b/i.test(cv.summary)) {
      out.push("Summary states headcount (rule: scope by language only).");
    }
  }

  const comps = cv.competencies || [];
  if (comps.length > 10) out.push(`${comps.length} competencies (rule: 8-10 maximum).`);
  comps.forEach(c => {
    if (words(c.keywords) > 20) out.push(`Competency "${c.name}" is ${words(c.keywords)} words (rule: 20 maximum).`);
  });

  (cv.experience || []).forEach(role => {
    const where = `${role.employer} / ${role.title}`;
    if (role.description && sentences(role.description) > 3) {
      out.push(`${where}: role description has ${sentences(role.description)} sentences (rule: 3 maximum).`);
    }
    (role.bullets || []).forEach((b, i) => {
      const text = bulletText(b);
      if (text.length > config.maxBulletChars) {
        out.push(`${where}: bullet ${i + 1} is ${text.length} characters - likely over 2 lines. Tighten or split.`);
      }
      config.weakOpeners.forEach(w => {
        if (text.toLowerCase().startsWith(w.toLowerCase())) out.push(`${where}: bullet ${i + 1} opens with "${w}".`);
      });
    });
    const lens = (role.bullets || []).map(b => bulletText(b).length);
    if (lens.length >= 4 && Math.max(...lens) - Math.min(...lens) < 25) {
      out.push(`${where}: every bullet is nearly the same length - reads as generated. Vary them.`);
    }
  });

  if (jdText) copiedRuns(all, jdText).forEach(run => out.push(`Copied from the posting word for word: "${run}"`));
  return out;
}

/** Any run of 8+ words that appears identically in the resume and the posting. */
function copiedRuns(cvText, jdText, n = 8) {
  const tok = s => s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  const jd = tok(jdText);
  const grams = new Set();
  for (let i = 0; i + n <= jd.length; i++) grams.add(jd.slice(i, i + n).join(" "));
  const cv = tok(cvText);
  const hits = new Set();
  for (let i = 0; i + n <= cv.length; i++) {
    if (!grams.has(cv.slice(i, i + n).join(" "))) continue;
    // extend the match so one copied sentence is reported once, not as overlapping pieces
    let end = i + n;
    while (end < cv.length && grams.has(cv.slice(end - n + 1, end + 1).join(" "))) end++;
    hits.add(cv.slice(i, end).join(" "));
    i = end - 1;
  }
  return [...hits].slice(0, 5);
}

module.exports = { ROOT, loadConfig, resolveJob, loadContent, outputBase, hardFails, warnings, bulletText };
