---
description: Interview that turns your old resume into the sources files
---

Set this folder up as the candidate's resume system. Read CLAUDE.md first.
Its truth rules apply from this moment on, including during setup.

Interview before writing. Ask in small batches of 2-3 questions, wait for
the answers, and do not assume a default for anything left unanswered. If
the candidate says "you pick", choose, and say what and why.

Step 1 - Privacy first. Before the candidate shares anything, say plainly,
  in a few lines: what is pasted or read here is sent to the AI service to
  be processed, so this is not an offline tool; where to check the
  account's data and model-training settings; and what to leave out
  entirely (government ID numbers, date of birth, full street address,
  bank details, referees' contact details). Confirm .gitignore is in place
  and say not to push this folder to GitHub. Wait.

Step 2 - The old resume. Ask the candidate to drop the current resume into
  this folder (Word, PDF or text) or paste it. Read it and write
  sources/master_resume.md in the format in sources/README.md. Copy
  employers, titles and dates exactly. Do not improve, reword or fill gaps
  at this stage. Move the original file into sources/, where .gitignore
  covers it. Show the new file and wait for corrections.

Step 3 - What the resume leaves out. Go through the roles one at a time and
  ask what the candidate did there that is not on the page: the
  unglamorous work, the hard part, the thing they fixed. Also ask about
  anything learned or built outside a job (a course, a personal project,
  volunteering). Ask for a number only once per item and accept "no
  number". Write sources/bullet_bank.md grouped by theme. Anything the
  candidate refuses to state is recorded as "do not state", so it is never
  guessed later.

Step 4 - Proof. For the facts now in the bank, ask once per role or theme
  whether something backs each one up: a certificate, a project link, a
  published piece, a written review, an award. Write it as a "Proof:" line
  under the fact, in the format in sources/README.md. Rules for this step:
  - Proof is optional. A fact with no proof stays in the bank and can
    still be used. Do not push for proof and do not drop the fact.
  - A description of the proof and where it is kept is enough. Do not ask
    for an employer's internal document to be pasted here.
  - Never invent a proof, a link or a certificate number.
  - Proof does not change what the fact is. A course certificate proves
    the course was finished. It does not turn the course into job
    experience.

Step 5 - Standing rules. Ask what must always appear, what must never
  appear, and whether anything sensitive needs exact wording (a career
  break, a short role, a change of field). Ask which paper size employers
  expect where the candidate applies, Letter or A4, then set paper size,
  page target and font in config.json and say why. Write
  rules/MY_STANDING_RULES.md.

Step 6 - Tools. Check that Node is installed (node --version). If it is,
  run npm install once. If it is not, say how to install it and stop. Then
  prove the system works on the fictional example before any of the
  candidate's data is built:
    node scripts/build_resume.js example/jobs/companyg-senior-pm --compress
    node scripts/build_resume_html.js example/jobs/companyg-senior-pm
  Say which two files to open.

Step 7 - Hand over. List the commands in order (/match, /tailor, /build,
  /review, /panel) with one line on what each produces. Say that nothing is
  ever sent to an employer by this system. Then recommend the next step:
  /match if the candidate is not sure which kinds of jobs the record
  supports, otherwise /tailor with a first posting.

Two rules for the whole setup: never invent a fact about the candidate, and
never write a new claim on their behalf. If you are unsure whether
something is true, ask.
