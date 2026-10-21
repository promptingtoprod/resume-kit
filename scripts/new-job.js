#!/usr/bin/env node
/**
 * new-job.js <slug>  ->  creates jobs/<slug>/ from the template.
 * Use a short slug: company-role, lower case, hyphens. e.g. companyg-senior-pm
 */

const fs = require("fs");
const path = require("path");

const slug = process.argv[2];
if (!slug || !/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
  console.error("Usage: node scripts/new-job.js <company-role-slug>   (lower case, hyphens only)");
  process.exit(1);
}

const root = path.join(__dirname, "..");
const dest = path.join(root, "jobs", slug);
if (fs.existsSync(dest)) {
  console.error(`Already exists: jobs/${slug}`);
  process.exit(1);
}

fs.mkdirSync(dest, { recursive: true });
fs.copyFileSync(path.join(root, "jobs", "_TEMPLATE", "content.json"), path.join(dest, "content.json"));
// jd.md starts with a place for the link, so the posting can be found again
fs.writeFileSync(path.join(dest, "jd.md"), [
  "Link: ",
  "Company: ",
  "Role: ",
  "",
  "--- paste the full posting text below this line ---",
  "",
].join("\n"));
["analysis.md", "gap_report.md"].forEach(f =>
  fs.writeFileSync(path.join(dest, f), "")
);

console.log(`Created jobs/${slug}`);
console.log(`Next: paste the job posting into jobs/${slug}/jd.md, then run /tailor ${slug}`);
