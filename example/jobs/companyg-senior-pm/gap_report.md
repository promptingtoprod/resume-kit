# Gap report - Company G, Senior Project Manager, Platform Delivery

> FICTIONAL. Bob, every employer, every project, every date and every number in this file are invented so the kit can be tried without anyone's real information.

Written 2026-10-13 against jobs/companyg-senior-pm/content.json (compressed
build). Every gap below is a real gap in the record or a thing the sources do
not support. None of them can be closed by wording.

## Must-haves that are absent or thin

### 1. Owning project budgets of $3M or more a year
- On the resume: "Track and forecast budgets totalling $1.8M a year across
  the three projects", plus negotiating statements of work and rates,
  renewing two vendor contracts twice, approving vendor invoices, and
  presenting monthly to the CEO and CFO.
- How much it matters: high. It is the one must-have the record does not
  meet on either size or ownership. Company G may screen on it.
- Might the candidate have real experience that covers it: partly. The
  candidate says the three projects were nearer $2.1M in 2026 if vendor
  contracts are counted, and will confirm an exact figure when the year
  closes. Even then it is tracked and forecast, not owned, and still under
  $3M. The honest place to argue the step up is the candidate's own cover
  letter. This system does not write it.

### 2. SAFe across multiple squads
- On the resume: "SAFe for Teams two-day course, 2024 (no certification
  held)" on the credentials line; "two-week sprints inside quarterly gates"
  in the Company N description and competencies.
- How much it matters: medium. The posting accepts "certified or practised".
  The candidate has a course and a quarterly cadence, not SAFe delivery
  across squads. An interviewer will ask what "practised" means here.
- Might the candidate have real experience that covers it: unlikely beyond
  what is stated. Company N runs one delivery team with two vendors, not
  four squads. Confirmed in the setup interview.

### 3. Transport, fleet or bus and coach software
- On the resume: logistics (freight-forwarding, warehouse, customs filing,
  carrier API integrations). The posting lists logistics as acceptable.
- How much it matters: low. Met on the posting's own terms, but a
  competitor with ticketing or fleet experience would edge ahead.
- Might the candidate have real experience that covers it: no.

### 4. PRINCE2 Practitioner
- On the resume: PMP instead. The posting says "PMP or PRINCE2". Met.
- Listed only because a keyword filter might look for PRINCE2 alone.

## Nice-to-haves that are absent

| Nice-to-have | Status | Why it is absent |
|---|---|---|
| Line management of project managers | Absent | Candidate has no line reports. Standing rule forbids any such claim. Mentoring two junior PMs is the honest nearest fact and is on the resume. |
| Delivery metrics from Jira into a BI tool | Absent | Candidate confirmed on 2026-10-13: never used Power BI, Tableau or any BI tool. The Jira status pack and the open-source Jira tool on GitHub are the honest nearest facts. |
| Public-sector procurement | Absent | Candidate confirmed on 2026-10-13: none. |

## Posting keywords deliberately not used

- "own" or "ownership" with budgets: standing rule, and untrue.
- "scaled agile", "squads": not how Company N works; using the words would
  read as posting-mirroring.
- "coach": the resume says "mentor", which is the candidate's chosen word
  and the one in the bullet bank.
- "performance reviews" for vendors: the resume says "quarterly scorecard
  review", which is what the candidate actually runs.

## Page Compression Log

The first full draft (28 bullets, 9 two-line competencies, 3-sentence
descriptions) was estimated at about 3.1 pages. Target is 2. Passes run in
order per rules/Resume_Rules_Validation.txt.

PASS 1 - Language conciseness
- Every bullet tightened to 172-190 characters (from up to 237). Examples:
  "when it was red and four months behind" became "red and four months
  behind"; "four respondents, scored with" became "four bids scored with";
  "three of four warehouses live by June 2025, the fourth in Sep 2025"
  became "all four warehouses live by Sep 2025".
- Summary cut from 393 to 304 characters. "keeping customer executives at
  the table when dates move" became "without losing the customer".
- Role descriptions cut to two sentences each, about two rendered lines.
- Credential lines lost the "Certifications:" and "Volunteering:" labels.
- Estimate after Pass 1 alone: still over 2 pages.

PASS 2 - Formatting compression
- Compression mode is ACTIVE. Built with --compress.

PASS 3 - Content redundancy (removed content, with restoration notes)
Restore in this order if the real page count leaves room. Each line can be
pasted straight back into content.json; all are sourced in the bullet bank.

1. Company A, Project Manager - cutover command centre (strong story, removed
   for space only):
   "Ran the cutover command centre over the go-live weekend; when one
   hospital's ADT feed failed to reconnect, the supplier fixed it in about
   two hours and the system went live on time on the Monday."
2. Company N - UAT (low relevance next to the rollout bullet):
   "Ran customer UAT for the scanning app: 30 users across four warehouses."
3. Company N - vendor scorecard criteria were merged into the contracts
   bullet. Full version:
   "Run a quarterly performance review with each vendor on a scorecard
   covering delivery against plan, defect escape rate and responsiveness."
4. Company A, Project Manager - hypercare bullet shortened. Full version:
   "Ran three months of hypercare, then the hosted-version upgrades (two
   major releases a year), an e-referrals interface and the move of the
   group's reporting database to the hosted environment."
5. Company A, Project Manager - RAID log and change-control board (governance
   covered by the steering bullet and competencies):
   "Introduced the RAID log and the fortnightly change-control board that
   decided scope, funded changes and the move of cutover to a weekend."
6. Company A, Tech Lead - Selenium regression suite (engineering proof,
   covered by other roles):
   "Wrote the first automated UI regression suite for the scheduling screens
   (Selenium, about 120 cases by handover), replacing four days of manual
   regression that left no room in a two-week cycle."
7. Company A, Senior Software Developer - Jenkins pipeline (older role):
   "Moved the build pipeline from a physical Jenkins server with no backup,
   which failed in Oct 2015 and cost two days, to Jenkins on AWS EC2 with
   artefacts in S3, later adding CodeDeploy for test."
8. Company F - PCI DSS evidence and test harness (older role, not
   must-haves):
   "Gathered the development evidence for the annual PCI DSS audit:
   key-management documentation for stored card tokens, the year's
   code-review records, and the two-day assessor interview."
   "Wrote the integration test harness that generated synthetic acquirer
   settlement files with known mismatches; the team still used it at
   handover."
9. Company N - vendor Thursday demo (candidate pre-approved removal):
   "Replaced the offshore vendors' stand-up with a Thursday demo of working
   software, no slides, to stop tasks sitting at 90 percent done for weeks."
10. Company A, Tech Lead - code review line (candidate pre-approved removal):
    "Ran code review and sprint planning with the product manager, with
    input into hiring."
11. Company A, Project Manager - team size:
    "Led a programme team of two business analysts and six developers
    alongside the two integration vendors."

Structural changes in Pass 3
- Company A Senior Software Developer and Company F now carry their one
  remaining achievement in the role description and have no bullet list.
  This removes two "Key Contributions:" labels. Reverse by moving the second
  sentence of each description back into a bullet.
- Competencies cut from 9 two-line entries to 7 one-line entries. Dropped
  terms: "site readiness checklists" (now "site readiness"), "signed change
  requests", "invoice approval", "PMO status packs", "Confluence", "design
  and estimate review", "Angular", and the sentence-form coaching
  competency. "SAFe for Teams course" and "PSM I" moved off the competencies
  because they are credentials, not demonstrated delivery; both stay on the
  credentials line.

RESTORATION ROUND - 2026-10-13
The candidate opened the first compressed build in Word: two pages, no
orphaned heading, about 190 points of room at the foot of page two. Items
1 to 6 above were restored, in order, using an estimated 154 points:
1. Company A PM - cutover command centre, trimmed to 189 characters
   ("go-live went ahead on time on Monday").
2. Company N - vendor scorecard criteria restored as its own bullet; the
   contracts bullet went back to its full wording.
3. Company N - UAT bullet, verbatim.
4. Company A PM - hypercare bullet back to the full version (e-referrals
   interface, reporting database move).
5. Company A PM - RAID log and change-control board, verbatim.
6. Company A Tech Lead - Selenium regression suite, trimmed to 166
   characters ("replacing four days of manual regression each cycle").
Still removed: items 7 to 11 (Jenkins pipeline, PCI DSS evidence, test
harness, vendor Thursday demo, code review line, team size). The one-bullet
roles and one-line competencies stay as they are.

If the second build is 3 pages
Remove in this order: item 6 (Selenium), item 5 (RAID log), item 3 (UAT).

Page count: first compressed build confirmed at 2 pages in Word by the
candidate. Second build (after restoration) confirmed at 2 pages with about
three lines spare (estimator read 2.17). The estimator in
scripts/estimate_pages.js reads high against real counts.

REVIEW ROUND - 2026-10-13
Applied after the /review report, all approved by the candidate in chat.
No fact added; every change rewords sourced content.
- Company N description: grammar fix only ("and moved the delivery team
  from waterfall stage gates to two-week sprints inside quarterly gates").
- Company N bullet 2: now opens "On the customs module," so it stands alone.
- Company N scorecard bullet: now states the candidate wrote the scorecard.
- Company N scanning bullet: "wrecked week one" became "a bad first week on
  unsurveyed yard Wi-Fi" (matches the bank's wording).
- Company N UAT bullet: opens "Put the scanning app through customer UAT".
- Company N status pack bullet: now names the Jira-export Python tool
  published on GitHub (bullet bank, "built outside work").
- Company A migration bullet: opens "Found in dry run two that"; the
  standing-rule phrase for the slip is unchanged.
- Company A Tech Lead AWS bullet: opens "Led the move of".
- Competencies: "Vendors & Contracts" renamed "Vendor & Contract Management"
  (quarterly scorecards added); Engineering swaps Jenkins for Selenium
  (Jenkins has no backing bullet since Pass 3); new sentence-form
  "Working Style" competency added (20 words). Block is now 8 entries.
- Credential line: "SAFe for Teams course (two days), 2024".
- Skipped by the candidate for space: Tech Lead description rewrite.
Third build estimate: 2.25 pages (was 2.17). Word count from the candidate:
three pages, about six lines on page three.

Fourth build, 2026-10-13: candidate chose to drop the UAT bullet and keep
the Working Style line. Removed from Company N (restore by pasting back as
the eighth bullet, after the scanning rollout bullet):
"Put the scanning app through customer UAT with 30 users across four
warehouses."
Word count from the candidate: still three pages, about three lines on
page three.

Fifth build, 2026-10-13: removed the Tech Lead Selenium bullet (restore as
the second bullet of the Tech Lead role, after the release cadence bullet):
"Wrote the first automated UI regression suite for the scheduling screens
(Selenium, about 120 cases by handover), replacing four days of manual
regression each cycle."
Note: the Engineering competency still lists Selenium. With this bullet
gone, Selenium has no backing bullet in the experience section. Candidate
to decide whether to swap it (the master resume skills line supports REST,
Spring, SQL, AWS and HL7 v2, all already listed) or leave it.
Word count from the candidate: still three pages, one line on page three.

Sixth build, 2026-10-13:
- Engineering competency: Selenium dropped (candidate chose option 2). Line
  now "Java, Spring, REST and HL7 v2 integration, PostgreSQL, AWS".
- Removed the Company A PM RAID log bullet (restore as the third bullet of
  that role, after the steering committee bullet):
  "Introduced the RAID log and the fortnightly change-control board that
  decided scope, funded changes and the move of cutover to a weekend."
  Governance is still covered by the Budgets & Governance competency
  ("change control") and the steering bullet.
Word count from the candidate: two pages, about two lines spare. This is
the reviewed build. Estimator read 2.13.

Accepted style warning: the validator flags the six Company A PM bullets
as near-uniform in length (183-189 characters). The candidate chose to keep
the hypercare bullet in full, with the e-referrals interface and the
reporting database move named. Do not shorten it.

Review round closed 2026-10-13. Compression mode remains active.
