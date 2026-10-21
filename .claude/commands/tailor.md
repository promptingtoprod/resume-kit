---
description: Run the full resume tailoring workflow for a job
---

Run the resume tailoring workflow. Read CLAUDE.md and
rules/MY_STANDING_RULES.md first. Job folder: $ARGUMENTS

If jobs/$ARGUMENTS does not exist, run: node scripts/new-job.js $ARGUMENTS

Step 1 - Job intake. Read jobs/$ARGUMENTS/jd.md. If there is no posting
  text below the marker line, ask for it. If the Link line is blank, ask
  for the link too, so the posting can be found again later. If only a link
  was given, try to fetch it; many job sites block this, so fall back to
  asking for pasted text rather than guessing.

Step 2 - Job analysis. Extract title and seniority, field, must-haves,
  nice-to-haves, responsibilities, likely search keywords, and honest gaps
  against sources/. Apply the stretch-role protocol from CLAUDE.md if it
  fits. Write to jobs/$ARGUMENTS/analysis.md. Present and wait.

Step 3 - Tone dial. Ask A (hands-on depth first) / B (leadership and
  outcomes first) / C (blend, outcomes lead with hands-on depth as proof).
  Recommend one with a one-line reason. Default is C. Wait.

Step 4 - Source selection. State what you will draw from in sources/ and
  why, in 3 bullets. Wait.

Step 5 - Quantification check. Ask the quantification question from
  CLAUDE.md. Wait.

Step 6 - Propose changes. What, why, original vs proposed. Do not apply
  until explicitly approved. Anything not in sources/ is written as
  NEED CONFIRMATION: <fact> and listed for the candidate to answer.

Step 7 - Build content. Read rules/Resume_Rules_Bullets_and_Roles.txt and
  rules/Resume_Rules_Summary.txt first. Write summary, experience and
  education into jobs/$ARGUMENTS/content.json. Not competencies yet.

Step 8 - Competencies. Read rules/Resume_Rules_Competencies.txt. Run all four
  stages automatically without further input.

Step 9 - Validation. Read rules/Resume_Rules_Validation.txt. Run all checks,
  then run: node scripts/validate.js $ARGUMENTS
  Present one consolidated report. Wait.

Step 10 - Gap report. Flag every must-have that is absent or thin. Write
  jobs/$ARGUMENTS/gap_report.md with how much each gap matters and whether
  the candidate might have real experience that covers it. Wait.

Step 11 - Deliverables. Final tailored content plus a Keyword Score Card:
  estimated match, must-have keywords found vs missing, nice-to-have found
  vs missing. For each missing keyword state whether it was left out as a
  genuine gap or for reading flow. Say plainly that the score is an
  estimate, not a real applicant-tracking score.

Then run /build automatically without waiting for the trigger word.
