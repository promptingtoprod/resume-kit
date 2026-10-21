# Resume Tailoring System (for Codex and other coding agents)

This kit was written for Claude Code, which reads `CLAUDE.md`. If you are Codex or another
agent that reads `AGENTS.md`, follow the same system:

1. Read `CLAUDE.md` in full before doing anything. Every rule in it applies to you exactly as
   written: the truth rules, `NEED CONFIRMATION: <fact>`, the quantification rules, the
   candidate's standing rules in `rules/MY_STANDING_RULES.md`, privacy, and "it makes the
   resume and stops there".
2. The steps live in `.claude/commands/` as plain instruction files: `setup.md`, `match.md`,
   `tailor.md`, `build.md`, `review.md`, `panel.md`. When the candidate types a step name
   (for example "setup", "/setup", or "tailor companyg-senior-pm"), open that file and follow
   it step by step, with anything after the name as its argument.
3. At the end of each step, recommend the next step the same way the command files say.
4. The build guard is a script, not a rule you apply yourself: run
   `node scripts/build_resume.js <job>` (and `build_resume_html.js` for the preview). If it
   prints `BUILD REFUSED`, fix the content, never the guard.

The reviewers in `review` and `panel` are simulated by you. Say so in the report, as the
command files require.
