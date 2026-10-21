#!/usr/bin/env node
/**
 * build_resume.js - generates the resume Word file from a job's content.json.
 * The layout spec is in rules/Resume_Rules_Build.txt and encoded below.
 * Page size, font, accent colour and page target come from config.json.
 *
 * Usage:
 *   node scripts/build_resume.js <job-slug>
 *   node scripts/build_resume.js <job-slug> --compress
 */

const fs = require("fs");
const path = require("path");
const { loadConfig, resolveJob, loadContent, outputBase, hardFails, warnings } = require("./checks");

let docx;
try {
  docx = require("docx");
} catch (e) {
  console.error('The "docx" package is not installed yet. Run this once in the kit folder:  npm install');
  process.exit(1);
}
const {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink,
  AlignmentType, TabStopType, BorderStyle, LevelFormat,
} = docx;

// ---------------------------------------------------------------- setup
const config = loadConfig();
const compress = process.argv.includes("--compress");
const job = resolveJob(process.argv.slice(2).find(a => !a.startsWith("--")));
const cv = loadContent(job.contentPath);

const fails = hardFails(cv, config);
if (fails.length) {
  console.error("BUILD REFUSED. Fix the content, not the guard:\n");
  fails.forEach(f => console.error("  - " + f));
  process.exit(1);
}
const jdPath = path.join(job.dir, "jd.md");
const jdText = fs.existsSync(jdPath) ? fs.readFileSync(jdPath, "utf8") : "";
warnings(cv, config, jdText).forEach(w => console.warn("  WARNING: " + w));

// ---------------------------------------------------------------- constants
const PAPER = { Letter: { width: 12240, height: 15840 }, A4: { width: 11906, height: 16838 } };
const page = PAPER[config.paper] || PAPER.Letter;
const MARGIN_X = 1008, MARGIN_Y = 864;
const DATE_TAB = page.width - 2 * MARGIN_X;   // right tab stop for employer/date line

const ACCENT = config.accentColor;
const BLACK = "000000";
const EMAIL_BLUE = "1155CC";
const LINK_BLUE = "0563C1";
const FONT = config.font;
const SIZE = config.fontSizePt * 2;           // half-points
const NAME_SIZE = SIZE + 8;                   // 4pt larger

const S = {
  roleDescBefore: compress ? 20 : 40,
  bulletBefore: compress ? 20 : 40,
  bulletAfter: compress ? 60 : 80,
  keyContribBefore: compress ? 80 : 120,
  keyContribAfter: compress ? 80 : 120,
  jobTitleAfter: compress ? 80 : 120,
};

// ---------------------------------------------------------------- helpers
const t = (text, opts = {}) => new TextRun({
  text, font: FONT, size: opts.size || SIZE,
  color: opts.color || BLACK, bold: !!opts.bold,
});

const link = (text, url, color = LINK_BLUE) => new ExternalHyperlink({
  link: url,
  children: [new TextRun({ text, font: FONT, size: SIZE, color, underline: { type: "single" } })],
});

/** A string, or an array of { text } / { text, bold } / { text, url } segments. */
const runs = segments => {
  const parts = typeof segments === "string" ? [{ text: segments }] : segments;
  return parts.map(p => (p.url ? link(p.text, p.url) : t(p.text, { bold: p.bold })));
};

function nameLine(name) {
  return new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { before: 0, after: 40 }, keepNext: true,
    children: [t(name, { bold: true, size: NAME_SIZE })],
  });
}

function contactLine(c) {
  const children = [];
  const sep = () => { if (children.length) children.push(t(" | ")); };
  if (c.email) { sep(); children.push(link(c.email, `mailto:${c.email}`, EMAIL_BLUE)); }
  if (c.phone) { sep(); children.push(t(c.phone)); }
  if (c.location) { sep(); children.push(t(c.location)); }
  (c.links || []).forEach(l => { sep(); children.push(link(l.text, l.url)); });
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 160 }, children });
}

function sectionHeader(text) {
  return new Paragraph({
    spacing: { before: 200, after: 80 }, keepNext: true, keepLines: true,
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, space: 1, color: ACCENT } },
    children: [t(text.toUpperCase(), { bold: true, color: ACCENT })],
  });
}

function employerLine(employer, dates, pageBreakBefore = false) {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: DATE_TAB }],
    spacing: { before: 200, after: 40 }, keepNext: true, pageBreakBefore,
    children: [t(employer, { bold: true }), t("\t"), t(dates, { bold: true })],
  });
}

function bullet(segments, reference = "achievement-bullets") {
  return new Paragraph({
    numbering: { reference, level: 0 },
    spacing: { before: S.bulletBefore, after: S.bulletAfter },
    children: runs(segments),
  });
}

// ---------------------------------------------------------------- document
const children = [];
children.push(nameLine(cv.name));
children.push(contactLine(cv));

children.push(sectionHeader(cv.summaryHeading || "Professional Summary"));
children.push(new Paragraph({ spacing: { before: 0, after: 160 }, children: [t(cv.summary)] }));

if ((cv.competencies || []).length) {
  children.push(sectionHeader("Core Competencies"));
  cv.competencies.forEach(c => children.push(
    bullet([{ text: `${c.name}: `, bold: true }, { text: c.keywords }], "competency-bullets")
  ));
}

children.push(sectionHeader("Professional Experience"));
cv.experience.forEach(role => {
  children.push(employerLine(role.employer, role.dates, !!role.pageBreakBefore));
  children.push(new Paragraph({
    spacing: { before: 0, after: S.jobTitleAfter }, keepNext: true,
    children: [t(role.title, { color: ACCENT })],
  }));
  if (role.description) {
    children.push(new Paragraph({
      indent: { left: 360 }, spacing: { before: S.roleDescBefore, after: 80 },
      children: [t(role.description)],
    }));
  }
  if (role.bullets && role.bullets.length) {
    children.push(new Paragraph({
      indent: { left: 360 }, keepNext: true,
      spacing: { before: S.keyContribBefore, after: S.keyContribAfter },
      children: [t("Key Contributions:")],
    }));
    role.bullets.forEach(b => children.push(bullet(b)));
  }
});

children.push(sectionHeader("Education and Credentials"));
(cv.education || []).forEach(e => {
  children.push(new Paragraph({ spacing: { before: 40, after: 0 }, keepNext: true, children: [t(e.title, { bold: true })] }));
  children.push(new Paragraph({ spacing: { before: 0, after: 40 }, children: [t(e.institution)] }));
});
(cv.credentialLines || []).forEach(l => children.push(
  new Paragraph({ spacing: { before: 40, after: 40 }, children: runs(l) })
));

const bulletLevel = text => [{
  level: 0, format: LevelFormat.BULLET, text, alignment: AlignmentType.LEFT,
  style: { paragraph: { indent: { left: 720, hanging: 360 } } },
}];

const doc = new Document({
  numbering: {
    config: [
      { reference: "achievement-bullets", levels: bulletLevel("•") },
      { reference: "competency-bullets", levels: bulletLevel("●") },
    ],
  },
  styles: { default: { document: { run: { font: FONT, size: SIZE, color: BLACK } } } },
  sections: [{
    properties: {
      page: {
        size: { width: page.width, height: page.height },
        margin: { top: MARGIN_Y, bottom: MARGIN_Y, left: MARGIN_X, right: MARGIN_X },
      },
    },
    children,
  }],
});

const outPath = path.join(job.dir, outputBase(cv, job.slug) + ".docx");
Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(outPath, buf);
  console.log(`Built: ${outPath}${compress ? "  [compression mode]" : ""}`);
  console.log(`Page target: ${config.pageTarget}. Open the file and check the page count.`);
});
