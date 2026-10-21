#!/usr/bin/env node
/**
 * build_resume_html.js - writes a preview page for the resume. Needs nothing
 * installed beyond Node. Open it in a browser to check the layout, and use
 * the browser's Print > Save as PDF if you want a PDF without Word.
 *
 * The page loads nothing from the internet: no fonts, no scripts, no images.
 *
 * Usage: node scripts/build_resume_html.js <job-slug>
 */

const fs = require("fs");
const path = require("path");
const { loadConfig, resolveJob, loadContent, outputBase, hardFails } = require("./checks");

const config = loadConfig();
const job = resolveJob(process.argv[2]);
const cv = loadContent(job.contentPath);

const fails = hardFails(cv, config);
if (fails.length) {
  console.error("BUILD REFUSED. Fix the content, not the guard:\n");
  fails.forEach(f => console.error("  - " + f));
  process.exit(1);
}

const esc = v => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const segments = v => {
  const parts = typeof v === "string" ? [{ text: v }] : v;
  return parts.map(p => p.url ? `<a href="${esc(p.url)}">${esc(p.text)}</a>`
    : p.bold ? `<strong>${esc(p.text)}</strong>` : esc(p.text)).join("");
};

const contact = [
  cv.email && `<a class="email" href="mailto:${esc(cv.email)}">${esc(cv.email)}</a>`,
  cv.phone && esc(cv.phone),
  cv.location && esc(cv.location),
  ...(cv.links || []).map(l => `<a href="${esc(l.url)}">${esc(l.text)}</a>`),
].filter(Boolean).join(" | ");

const experience = cv.experience.map(role => `
  <section class="role"${role.pageBreakBefore ? ' style="break-before: page"' : ""}>
    <div class="employer"><strong>${esc(role.employer)}</strong><strong>${esc(role.dates)}</strong></div>
    <div class="title">${esc(role.title)}</div>
    ${role.description ? `<p class="description">${esc(role.description)}</p>` : ""}
    ${role.bullets && role.bullets.length ? `<p class="label">Key Contributions:</p><ul>${role.bullets.map(b => `<li>${segments(b)}</li>`).join("")}</ul>` : ""}
  </section>`).join("");

const competencies = (cv.competencies || []).length
  ? `<h2>CORE COMPETENCIES</h2><ul class="competencies">${cv.competencies.map(c => `<li><strong>${esc(c.name)}:</strong> ${esc(c.keywords)}</li>`).join("")}</ul>` : "";
const education = (cv.education || []).map(e => `<div class="credential"><strong>${esc(e.title)}</strong><br>${esc(e.institution)}</div>`).join("");
const credentials = (cv.credentialLines || []).map(l => `<div class="credit">${segments(l)}</div>`).join("");

const accent = "#" + config.accentColor;
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(cv.name)}</title><style>
@page { size: ${config.paper === "A4" ? "A4" : "Letter"}; margin: .6in .7in; }
* { box-sizing: border-box; }
body { margin: 0 auto; max-width: 7.1in; padding: .4in 0; color: #000; font: ${config.fontSizePt}pt/1.15 "${config.font}", Calibri, Arial, sans-serif; }
@media print { body { max-width: none; padding: 0; } }
h1 { margin: 0 0 2pt; text-align: center; font-size: ${config.fontSizePt + 4}pt; line-height: 1.1; }
.contact { margin: 0 0 8pt; text-align: center; }
a { color: #0563c1; text-decoration: underline; }
.email { color: #1155cc; }
h2 { margin: 10pt 0 4pt; padding-bottom: 1pt; border-bottom: .5pt solid ${accent}; color: ${accent}; font-size: ${config.fontSizePt}pt; line-height: 1.1; break-after: avoid; }
p { margin: 0; }
.summary { margin-bottom: 8pt; }
ul { margin: 2pt 0 4pt 25pt; padding: 0; }
li { margin: 0 0 3pt; padding-left: 2pt; break-inside: avoid; }
.role { margin-top: 8pt; }
.employer { display: flex; justify-content: space-between; gap: 12pt; break-after: avoid; }
.title { margin-top: 2pt; color: ${accent}; break-after: avoid; }
.description { margin: 4pt 18pt; }
.label { margin: 5pt 18pt 3pt; break-after: avoid; }
.credential { margin: 2pt 0; break-inside: avoid; }
.credit { margin: 2pt 0; }
</style></head><body>
<h1>${esc(cv.name)}</h1>
<div class="contact">${contact}</div>
<h2>${esc(cv.summaryHeading || "Professional Summary").toUpperCase()}</h2>
<p class="summary">${esc(cv.summary)}</p>
${competencies}
<h2>PROFESSIONAL EXPERIENCE</h2>
${experience}
<h2>EDUCATION AND CREDENTIALS</h2>
${education}${credentials}
</body></html>`;

const out = path.join(job.dir, outputBase(cv, job.slug) + ".html");
fs.writeFileSync(out, html);
console.log(`Preview: ${out}`);
console.log("Open it in a browser. Print > Save as PDF gives you a PDF.");
