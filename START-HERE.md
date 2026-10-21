# Resume tailoring kit for Claude Code

A folder that turns Claude Code into a careful resume assistant. You keep one
honest record of your career. For each job posting, it selects and rewords
from that record, tells you where you fall short, builds the Word file, and
puts the result in front of a panel of simulated reviewers. It makes the
resume and stops there. Applying is yours.

It is a folder of plain-text rules plus four small scripts. There is no app
to install and no account to create.

## It's a starting point, and now it's yours

This is a system I built for my own resume and I'm sharing it as it is. It is
a starting point, not a finished product, and it comes with no guarantees.

Make it yours. Change the rules, the commands, the wording, the layout. Add
what your field needs and remove what it doesn't. Improving it for your own
job search is up to you.

Whatever it builds, you read before you send. Every line on a resume that goes
out under your name is yours to check and stand behind.

The kit is free under the MIT licence (see `LICENSE`): use it, change it and
share it, as is, with no warranty.

## The one rule the whole thing is built on

**It never invents anything about you.** If a posting asks for something your
record does not contain, it does not quietly add it. It writes
`NEED CONFIRMATION: <the fact>` and asks you. The build script refuses to
produce a resume while that marker is still in the content, so an unconfirmed
claim cannot reach an employer by accident.

## What you need

- Claude Code, working in a terminal. (Set-up video: see the channel.)
  Using Codex instead? Start `codex` in this folder the same way. It reads `AGENTS.md`,
  which points it at the same rules and steps. Type the step names in plain words
  ("setup", "tailor <job>"). Written for Claude Code; check its work the same way.
- Node.js, which the build scripts run on. Check with `node --version`.
- Your current resume, in any format.
- Microsoft Word, or any program that opens .docx files, to check the result.
  No Word? The kit also writes a preview page you can open in a browser and
  print to PDF.

## Set up (once, about 30-45 minutes, most of it you answering questions)

1. Put this folder somewhere private on your computer. Not in a shared or
   synced work folder.
2. Open a terminal in the folder and start Claude Code: `claude`
3. Type `/setup`.
4. Answer the interview. It reads your resume, asks what the resume leaves out,
   asks what proof you have for each fact (optional), and writes your
   `sources/` files and your standing rules. Correct anything it
   gets wrong. This is the part that decides how good every later resume is.

## Not sure which jobs fit?

```
/match                 which kinds of jobs your record supports, with the honest gaps
/match data analyst    the same, and it also judges the direction you name
```

It reads only your own record and gives you the job titles to search for on a
job board. It does not search for postings itself, and it gives no salaries and
no odds.

## For every job

```
/tailor acme-operations-manager     paste the posting when asked
/build  acme-operations-manager     runs by itself after /tailor
/review acme-operations-manager     resume writer + recruiter stress test
/panel  acme-operations-manager     expert panel -> fix list -> you approve -> rebuild
```

The name after the command is a short label you choose: company, then role,
lower case, hyphens. Everything for that posting lives in
`jobs/<that-label>/`.

What you get in the job folder:

| File | What it is |
|---|---|
| `jd.md` | the posting you pasted |
| `analysis.md` | what the role really asks for, and your honest gaps |
| `content.json` | the tailored resume content, every line traceable to `sources/` |
| `gap_report.md` | what you are missing and what was deliberately left off |
| `<Your_Name>_<label>.docx` | the resume |
| `<Your_Name>_<label>.html` | the preview page |
| `panel_fixes.md` | what the panel changed, what you declined |

## Try it before you use your own details

`example/` holds a completely fictional person, Bob: a developer who became a senior
project manager, with fictional employers (Company N, A, F) and a fictional posting
(Company G, Senior Project Manager). It is the example from the video. It has his old
resume and the posting, the record setup built from them (`example/sources/`), his
standing rules, and a finished tailoring for the posting. After `npm install`:

```
node scripts/build_resume.js example/jobs/companyg-senior-pm --compress
node scripts/build_resume_html.js example/jobs/companyg-senior-pm
node scripts/validate.js example/jobs/companyg-senior-pm
```

Read `example/jobs/companyg-senior-pm/gap_report.md` to see what an honest gap
report looks like: the posting wanted budgets of $3M or more, Bob's record shows
$1.8M tracked and forecast, so the gap stays and the resume says $1.8M.

## Make it yours

- `rules/MY_STANDING_RULES.md` - your always-on preferences. When you correct
  Claude twice on the same thing, put it here and you never correct it again.
- `config.json` - paper size (Letter or A4), font, page target, and the
  phrases the build refuses or warns about.
- `rules/Resume_Rules_Panel.txt` - the reviewer panel. Add an expert for your
  field.

## Privacy, stated plainly

- **This is not an offline tool.** What you give Claude is sent to the AI
  service to be processed. Check your account's data and model-training
  settings before you start, and decide what you are comfortable sharing.
- Leave out what a resume never needs: government ID numbers, date of birth, full
  street address, bank details, and your referees' contact details.
- Do not put this folder on GitHub. The `.gitignore` excludes everything
  personal as a safety net, but the safe choice is to not publish it at all.
- Do not paste an employer's confidential information into your bullet bank.
  Describe your work without their internal numbers, customer names or
  documents.
- Keep the folder out of employer-managed devices and cloud drives.

## What this cannot do

- **It cannot make you qualified.** It shows a gap; it does not close one.
- **It does not know how any employer's software scores resumes.** Nobody outside
  that employer does. The keyword score card is a rough estimate for your own
  use.
- **The reviewers are simulated.** The recruiter, the hiring manager and the
  panel are useful for finding weak lines. They are not real people and their
  verdicts are not predictions.
- **It cannot count pages without LibreOffice.** Open the Word file and look.
- **It does not find jobs, fill in web forms, or submit anything.** Forms ask
  you to confirm that what you submit is true. That confirmation is yours.
- **Some employers have a policy on using AI in applications.** Read the
  posting and the careers page before you send anything.
- It can still be wrong. Read every resume before it goes out. Your name is on it.

This kit is a writing and organisation tool. It is not career, legal or
immigration advice, and it does not promise interviews or offers.
