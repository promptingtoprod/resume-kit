# Bullet bank - Bob

> FICTIONAL. Bob, every employer, every project, every date and every number in this file are invented so the kit can be tried without anyone's real information.

Every fact here was taken from the original resume or stated by the candidate
in the setup interview on 2026-10-13. Employers are referred to by letter only:
Company N (freight-forwarding and warehouse software, Nov 2021 - Present),
Company A (clinic scheduling and patient-records software, Sep 2014 - Oct 2021),
Company F (card payment processor, Jun 2011 - Aug 2014).

Numbers marked "defensible" are the ones the candidate said they can defend in
an interview. "No number" means do not add one.

## Theme: recovering troubled projects

- [Company N, 2023-2024] Took over the customs filing module when it was red
  (four months behind its original date) in Dec 2023 and took phase one live on
  18 Mar 2024. The customer's first live filing cleared the same day.
  Detail: the customer was a freight forwarder with three sites that had
  stopped attending the weekly call. Three root causes: (1) scope had grown by
  two document types (transit declarations and a safety-and-security filing)
  added through the account manager with no change request; (2) the offshore
  vendor's two developers on the customs-authority test-system integration had
  never done customs filing and were learning on the project; (3) nobody owned
  the test data, so each test cycle used different sample shipments and bugs
  could not be reproduced. Fixes: moved the two added document types into a
  signed phase-two change request so phase one was the original three document
  types; asked the vendor to swap one developer for someone with a prior customs
  integration, done within three weeks; had a business analyst build a fixed
  set of 40 sample shipments used by every test cycle from then on; replaced the
  weekly status call with a weekly go/no-go with the customer's operations
  manager.
  Defensible numbers: 40 sample shipments, three customer sites, three document
  types in phase one, four months behind at takeover, vendor swap in three
  weeks, go-live 18 Mar 2024.
  Additional facts from the phase 1 closure note (candidate confirmed
  2026-10-13): phase one document types were import declaration, export declaration and entry summary
  declaration; the phase-two change request was signed 9 Jan 2024; the fixed
  test data set was used from test cycle 3 onward; all three customer sites
  went live on 18 Mar 2024; hypercare ran four weeks and closed 15 Apr 2024.
  Do not state: any cost figure for this project; any defect count (the
  closure note records defect figures, but the candidate's rule stands); the
  change request reference number; the time-of-day of the first filing.
  Proof: the December 2024 performance review is a Company N document; no copy
  held (employer documents stay out of sources).
  Proof: Phase 1 closure note, April 2024, a Company N document kept in
  Company N's project library under the customs filing project. No copy held.
  Confirms scope, change request, go-live date, test data set, vendor
  developer replacement and hypercare close.

- [Company A, 2019] Patient-records migration for a three-hospital group went
  live Nov 2019, six weeks after the original date, on the re-baselined date
  agreed in writing with the customer.
  Detail: the second dry run (June 2019) found that roughly 9 percent of about
  410,000 legacy patient records had duplicate or conflicting identifiers across
  the three hospitals; the original plan assumed a clean one-to-one load. Took
  three options to the steering committee: go live on the original date with
  duplicates quarantined, delay six weeks for a matching-and-merge exercise with
  the hospital's health records team, or delay three months for a full cleanse.
  The CIO chose the six-week option; the new date was agreed at the July 2019
  steering committee.
  Defensible numbers: about 410,000 records, roughly 9 percent duplicates,
  three dry runs, six-week delay, 14-month programme, budget $1.2M (from the
  original resume).
  Do not state: the cost of the merge exercise; names of the hospitals or the
  hospital group.
  Proof: written reference from the Company A engineering manager, dated
  Nov 2021, PDF kept at home. Mentions the records migration.

## Theme: vendor and supplier management

- [Company N, 2023] Ran the RFP for the carrier API integration vendor: four
  vendors responded; scored them with the head of engineering and the
  customer's IT lead; chose the vendor that already had live integrations with
  the two carriers the customers use most.
  Detail: RFP issued Feb 2023, contract signed May 2023, first carrier live
  Sep 2023.
  Defensible numbers: four vendors, Feb/May/Sep 2023 timeline.
  Do not state: contract size (candidate knows it, will not state it). Savings:
  no number.
  Proof: none.

- [Company N, ongoing] Manages two offshore development vendors day to day.
  Replaced the vendor stand-up with a demo of working software every Thursday,
  no slide decks, to stop "90 percent done" tasks silently slipping for weeks.
  Detail: the hard parts are time zones and silent slippage.
  No number.

- [Company N, 2024 and 2025] Renewed both offshore vendor contracts in 2024
  and again in 2025 (annual contracts). Negotiates the statement of work and
  the rates; the Head of Delivery signs the contracts. Approves vendor
  invoices before the PMO pays them. (Confirmed in chat 2026-10-13.)
  Wording rule: "negotiated" the statement of work and rates; never "signed"
  or "owns" the contracts.
  Defensible numbers: two vendors, renewed 2024 and 2025, annual.
  Proof: none recorded.

- [Company N, ongoing] Runs a quarterly performance review with each offshore
  vendor using a scorecard the candidate wrote. Scorecard criteria: delivery
  against plan, defect escape rate, responsiveness. (Confirmed in chat
  2026-10-13.)
  Defensible: quarterly, two vendors, three criteria.
  Do not state: any scorecard figures or defect escape rates.
  Proof: the scorecard is a Company N document; no copy held.

- [Company A, 2019] Negotiated the HL7 interface supplier's specialist from one
  day a week to two days a week for the eight weeks before cutover, in return
  for Company A's developers doing their own interface testing with a harness
  they built.
  Detail: the specialist was shared across four of the supplier's customers.
  Defensible numbers: one to two days a week, eight weeks, four customers.

- [Company A, 2019] Managed the data migration contractor whose first dry run
  took 31 hours against a 12-hour cutover window; they rewrote the load as
  parallel batches by hospital and the third dry run took under 9 hours.
  Defensible numbers: 31 hours, 12-hour window, under 9 hours, three dry runs.

## Theme: delivery process and governance

- [Company N, 2022-2023] Moved the delivery team from waterfall stage gates to
  a hybrid: two-week sprints inside quarterly gates. (From original resume.)
  No number.

- [Company N] Set up the weekly status pack the PMO now uses for every project
  (Jira and Confluence). It replaced three different formats; the leadership
  team now reads one page per project.
  Defensible numbers: replaced three formats, one page per project.
  Proof: none kept (the December 2024 review is a Company N document).

- [Company N, 2025] After the scanning app's bad first week at the first
  warehouse (yard Wi-Fi coverage had never been surveyed), paused the rollout
  for two weeks while the customer fixed coverage and added a site readiness
  checklist every later warehouse had to pass before a go-live was scheduled.
  Three of four warehouses live by June 2025, the fourth in Sep 2025.
  Detail: ran customer UAT for the app with 30 users across four warehouses
  (from original resume).
  Defensible numbers: two-week pause, four warehouses, 30 UAT users,
  June/Sep 2025.
  Proof: the site readiness checklist the candidate wrote, a Company N
  document kept at Company N. No copy held.

- [Company N, ongoing] Runs three concurrent customer projects (customs filing
  module, carrier API integration programme, warehouse scanning app rollout)
  with teams of up to 12 across in-house developers and two offshore vendors.
  Project budgets totalling $1.8M a year. (From original resume.)
  Detail: reports to the Head of Delivery. The PMO manages the budgets; the
  candidate forecasts and reports variance monthly; the PMO lead and Head of
  Delivery approve spend. Wording rule: "track and forecast", never "own the
  budget".

- [Company A, 2018-2019] Introduced the RAID log and the fortnightly
  change-control board the migration programme used.
  Detail: decisions the candidate can describe: approved the matching-and-merge
  exercise as a funded change; rejected one hospital's request to add a new
  discharge-letter template to scope; approved moving cutover from a weekday to
  a weekend.
  No number beyond "fortnightly".

- [Company A, 2017] As tech lead, moved release approval from a monthly release
  board to a checklist the team signed off. Releases went from monthly to
  fortnightly in April 2017 and stayed there.
  Defensible: monthly to fortnightly, April 2017.
  Proof: none beyond the Company A reference letter (Nov 2021, PDF at home),
  which the candidate says does not cover the cadence change directly.

## Theme: stakeholders and steering

- [Company A, 2018-2019] Ran the monthly steering committee with the hospital
  group's CIO and operations director; took the data-quality finding and three
  costed options to it and got a re-baselined date agreed in writing.
  (See recovering troubled projects.)

- [Company N, 2024] Re-engaged a customer that had stopped attending the weekly
  call by replacing it with a weekly go/no-go with their operations manager.
  No number.

- [Company N, ongoing] Presents the three projects at the monthly delivery
  review to the Company N leadership team: the CEO, the CFO, the Head of
  Delivery and the head of engineering. (Confirmed in chat 2026-10-13.)
  Defensible: monthly, three projects.
  Proof: none recorded.

## Theme: cutover, migration and hypercare

- [Company A, Nov 2019] Ran the cutover command centre over the go-live
  weekend. On the Sunday morning one of the three hospitals' ADT feeds failed
  to reconnect; the interface supplier fixed a certificate problem in about two
  hours and the system went live on time on the Monday.
  Defensible: about two hours, three hospitals.
  Proof: written reference from the Company A engineering manager, Nov 2021,
  PDF kept at home. Mentions the cutover weekend.

- [Company A, 2019-2021] After go-live, ran hypercare for three months, then
  managed the hosted-version upgrades for the same hospital group (two major
  releases a year) and two smaller projects: an e-referrals interface for one
  hospital, and moving the group's reporting database to the hosted
  environment.
  Defensible: three months hypercare, two major releases a year.

- [Company A, 2017-2018] Technical lead for moving three hospital customers
  from on-premise to the hosted version on AWS. The first took eleven weeks
  against a six-week plan because each hospital had its own on-premise
  interface engine configuration and firewall rules; wrote the migration
  runbook after it, and the next two took five and four weeks.
  Defensible: three customers, eleven then five then four weeks, six-week plan.
  No number for defects.
  Proof: the migration runbook is a Company A document; no copy held.

## Theme: release engineering and automation

- [Company A, 2017] Wrote the first automated UI regression suite for the
  scheduling screens (Selenium, about 120 cases by handover). Regression had
  taken four days by hand, which left no room in a two-week cycle.
  Defensible: about 120 cases, four days manual.
  Proof: written reference from the Company A engineering manager, Nov 2021,
  PDF kept at home. Mentions the regression suite.

- [Company A, 2015-2016] Moved the build pipeline from a single physical
  Jenkins server with no backup (it failed in Oct 2015 and the team lost two
  days) to Jenkins on AWS EC2 with artefacts in S3, later adding CodeDeploy for
  the test environment. This is what the AWS certification was for.
  Defensible: Oct 2015 failure, two days lost.

- [Company A, 2018] Team containerised the test environment with Docker.
  No number.

- [Company F, 2011-2014] Wrote an integration test harness that generated
  synthetic acquirer settlement files with known mismatches so settlement logic
  could be tested without a real acquirer file. The hard part was getting the
  file format exactly right, including partial refunds and foreign-currency
  transactions. The team still used it when the candidate left.
  No number.

## Theme: integration engineering

- [Company A, 2014-2016] Built the HL7 v2 ADT interface adapter (A01, A03, A08
  and other ADT messages mapped to the patient model through a per-hospital
  configuration file). Before it, each hospital integration was hand-coded and
  took a developer about six weeks; after it, a typical integration took about
  two weeks. Used for 11 hospital integrations by the time the candidate became
  tech lead.
  Defensible: 11 integrations, about six weeks to about two weeks.
  Proof: the adapter belongs to Company A; no copy held.

- [Company A] Tools used in this period not on the original skills line:
  Selenium, Jenkins, Docker, Liquibase (database migrations), Mirth Connect
  (the interface engine the hospitals used).
  Do not state: Kubernetes (never used).

## Theme: data and performance

- [Company F, 2013] Rewrote the nightly reconciliation batch that matched the
  day's card transactions against the acquirer's settlement file. It was a
  single-threaded Java job loading every transaction into memory; as the
  merchant base grew it was finishing after the 6am cut-off some mornings,
  delaying merchant payouts. Rewrote it to load both sides into PostgreSQL
  staging tables, match with set-based SQL, and process only the unmatched
  remainder in Java. Run time went from about four hours to about 45 minutes
  on the same data.
  Defensible: about four hours to about 45 minutes (no exact figures), 6am
  cut-off.

## Theme: compliance and incidents

- [Company F, 2011-2014] Was the developer on the annual PCI DSS audit:
  documented the key-management process for stored card tokens, produced the
  year's code-review records, and sat in the two-day assessor interview for the
  development section. The ops team owned the audit.
  Wording rule: never "led" the audit. "Developer on" or "gathered the
  development evidence for" is accurate.
  Defensible: two-day assessor interview.

- [Company F, Feb 2014] On-call incident: a retry on a timed-out acquirer
  upload caused a duplicate settlement to about 30 merchants. Found the cause
  overnight, wrote the fix (an idempotency key on the upload) and the reversal
  script; merchants were corrected before the next payout.
  Detail: on-call one week in four.
  Defensible: about 30 merchants, Feb 2014.

## Theme: leading and mentoring people

- [Company A, 2017-2018] Led a team of four developers on the clinic
  scheduling product (Java, Angular, PostgreSQL): code review, sprint planning
  with the product manager, input into hiring. Internal promotion after the
  previous tech lead left in Dec 2016; the engineering manager asked the
  candidate to take it on.
  Defensible: four developers.

- [Company A, 2018-2019] Programme team of two business analysts and six
  developers. (From original resume.)

- [Company N, ongoing] Mentors two junior project managers. They are not
  direct reports; the candidate has no line reports at Company N.
  Wording rule: "mentor", never "manage" or "line-manage".

- [Outside work, 2019-present] Volunteer mentor at a local coding club for
  teenagers, Tuesday evenings, teaching Python. In 2023 wrote the twelve-week
  beginner curriculum the club still uses.
  Defensible: twelve-week curriculum, 2023. No number for students.

## Theme: built outside work

- [Personal, 2022] Wrote a small open-source command-line tool in Python that
  turns Jira exports into a weekly status summary; still uses it at work.
  Linked from the GitHub profile on the contact line.
  No number for users ("a handful").
  Proof: public repository at the GitHub link on the contact line.

- [Training, 2024] Completed a two-day SAFe for Teams course through work. Did
  not sit the exam; holds no SAFe certification.
  Wording rule: "completed a SAFe for Teams course", never "SAFe certified".

## Certifications (from original resume)

- Project Management Professional (PMP) - PMI - 2020, renewed 2023 and 2026
  Detail: original certification 14 Aug 2020; renewed 11 Jul 2023; renewed
  again 2 Jun 2026, now valid through 13 Aug 2029. Current.
  Proof: text copy of the 2023 certificate at
  sources/documents/PMP_certificate.txt (valid through 13 Aug 2026). The 2026
  renewal certificate is a PDF kept at home, not yet copied to the folder.
  Verification link on the PMI site. Certificate number is not recorded here.
- Professional Scrum Master I (PSM I) - Scrum.org - 2019
  Proof: text copy of the certificate at sources/documents/PSM_I_certificate.txt
  (awarded 3 Mar 2019, does not expire). Verification link on the Scrum.org
  site.
- ITIL 4 Foundation - 2021
  Proof: PDF certificate kept at home. No verification link.
- AWS Certified Solutions Architect - Associate - 2017 (expired 2020)
  Proof: PDF certificate kept at home. Expired 2020, not renewed.
- SAFe for Teams two-day course, 2024: no certification held, no proof
  recorded.

## Do not state - master list

- Any cost figure for the Company N customs filing project.
- Defect counts for any project.
- Contract size for the Company N carrier API vendor.
- Savings figures for the carrier API RFP.
- Cost of the Company A matching-and-merge exercise.
- Names of the hospitals or the hospital group at Company A.
- Any employer name other than the invented ones, Company N, Company A and
  Company F.
- "Own the budget" at Company N (tracks and forecasts; PMO and Head of
  Delivery approve).
- Line management at Company N (none).
- "Led" the PCI DSS audit at Company F (was the developer on it).
- Kubernetes (never used).
- SAFe certification (course completed, no exam).
- Student numbers at the coding club; user numbers for the open-source tool.
- The change request reference number and the time-of-day of the first
  filing from the Company N closure note (internal detail).
- Open defect counts from the customs filing closure note.
- Any BI tool (Power BI, Tableau or other). Never used. The status pack is
  built from Jira exports with the candidate's own Python tool.
- Public-sector procurement experience. None.
- Vendor scorecard figures or defect escape rates.
- Any annual budget figure other than $1.8M a year until the candidate
  confirms an exact figure and states what it includes.

## Confirmed in chat

- [2026-10-13] All facts above were confirmed during the setup interview.
- [2026-10-13] PMP renewed 2 Jun 2026, valid through 13 Aug 2029.
- [2026-10-13] Customs filing phase one: document types were import
  declaration, export declaration and entry summary declaration; phase-two
  change request signed 9 Jan 2024; fixed test data set used from test cycle 3;
  hypercare four weeks, closed 15 Apr 2024. Confirmed from the closure note,
  which is not kept in this folder.
- [2026-10-13] Company N vendor contracts: renewed both offshore vendor
  contracts in 2024 and 2025, annual; candidate negotiates statement of work
  and rates; Head of Delivery signs; candidate approves vendor invoices before
  the PMO pays them.
- [2026-10-13] Company N vendor performance: quarterly performance review
  with each vendor using a scorecard the candidate wrote (delivery against
  plan, defect escape rate, responsiveness).
- [2026-10-13] Company N leadership: presents the three projects at the
  monthly delivery review to the CEO, CFO, Head of Delivery and head of
  engineering.
- [2026-10-13] Never used a BI tool. No public-sector procurement experience.
- [2026-10-13] Candidate mentioned the three projects were "nearer $2.1M this
  year if you count the vendor contracts". Not yet a defensible figure: no
  exact number, no agreed basis for what it includes. $1.8M a year remains
  the only budget figure in use until confirmed.
