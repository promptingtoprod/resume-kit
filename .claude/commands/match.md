---
description: Which kinds of jobs your record supports, with the honest gaps
---

Suggest the kinds of jobs the candidate's record supports. Read CLAUDE.md
and rules/MY_STANDING_RULES.md first. Optional direction from the
candidate: $ARGUMENTS

Read only sources/. Do not browse the web, do not search for postings, and
do not open anything under jobs/. If sources/master_resume.md or
sources/bullet_bank.md is missing, say so and recommend /setup. Stop.

Step 1 - Say what this is. One short paragraph, before the list: the
  suggestions come from the candidate's own record plus your general
  knowledge of what such jobs tend to ask for. You have not checked any
  current posting, so a real posting decides what is required. This is not
  a prediction of who gets hired.

Step 2 - Suggest 3 to 5 job types. A job type is a kind of role (for
  example "inventory analyst"), never a named employer. If the candidate
  gave a direction, include it and judge it by the same standard as the
  rest, even when the fit is weak. For each job type write:
  - Fit: one of "supported now", "supported with a gap", "a stretch".
  - Supporting facts: 2 to 4 facts quoted from sources/, each with its
    [Employer or source, year] tag. Facts that carry a Proof line go
    first, and say what the proof is.
  - Honest gaps: what such roles commonly ask for that sources/ does not
    show. Name each gap plainly. Do not soften a missing requirement into
    "some exposure".
  - What would close the gap, only if the candidate could really do it (a
    course, a project, a task at the current job). No promise that it
    will be enough.

Step 3 - Hold the line on meaning. Doing a task as part of another job is
  not the same as holding that job. Reports built as a supervisor are
  reports built as a supervisor, not analyst experience. A finished course
  is a finished course. If a suggestion only works by rounding a fact up,
  mark it "a stretch" and say which fact would have to be true.

Step 4 - Titles to search. For every job type rated "supported now" or
  "supported with a gap", list 3 to 5 exact job titles the candidate can type
  into a job board, the titles employers actually use for that kind of role
  (for example "Technical Project Manager", "Implementation Manager",
  "Customer Delivery Manager"). Add 2 or 3 search phrases that narrow the
  results to the candidate's sectors (for example "logistics software",
  "health IT"). Do not search the web, do not name employers, and do not
  list titles for a type rated "a stretch" unless the candidate asks.

Step 5 - Leave out: salaries, pay ranges, market demand, how many openings
  exist, and any statement about the candidate's chances.

Step 6 - Write the result to jobs/_match_report.md (ignored by git, and
  not a content source: tailoring never draws from it). Change nothing in
  sources/. If the candidate states a new fact while answering, add it to
  sources/bullet_bank.md under "Confirmed in chat" with the date.

Then say:

```
Here is your next recommended trigger:
/tailor <company-role> - paste a posting for one of these job types
Type it to continue, or tell me what to fix first.
```
