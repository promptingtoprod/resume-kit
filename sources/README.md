# sources/

The ONLY place resume content is allowed to come from. If a fact is not in this
folder, it does not go on a resume. Two files, both plain text so Claude can read
them and you can edit them in any editor.

The setup interview (`/setup`) builds both from your existing resume.
You can also write them by hand. Nothing in this folder is ever committed to
git - see `.gitignore`.

## master_resume.md - the full career record

Everything, untailored, longer than any resume you would send.

```
# Full Name
email | phone | city, region | links

## Experience

### Employer name
Job title | Mon YYYY - Mon YYYY
One or two lines of context: what the organisation does, what you were hired to do.
- Everything you did there that you could talk about in an interview.
- Include the unglamorous ones. Tailoring picks; it cannot pick what is not here.

### Next employer
...

## Education
- Credential - Institution, City

## Certifications and licences
- Name - issuing body - year (and expiry, if it has one)

## Awards, publications, volunteering
- ...
```

Rules for this file:
- Employer names, titles and dates are written ONCE, here, exactly as they
  should appear. A tailored resume must match them character for character.
- A number goes in only if you could defend it in an interview.

## bullet_bank.md - achievements, grouped by theme

The same experience, regrouped by what it proves rather than where it
happened, so tailoring for a posting is fast.

```
## Theme: process improvement
- [Employer, year] What you did and what changed. Number if real.
  Detail: the hard part, the constraint, who was involved. (Depth for
  interviews and for authentic wording. Not copied onto the resume as-is.)
  Proof: what backs this up and where it is kept, for example a
  certificate, a project link, a written review. (Optional.)

## Theme: leading people
- ...

## Confirmed in chat
- [YYYY-MM-DD] A fact you confirmed to Claude during tailoring, recorded
  here so it counts as a source from now on.
```

About the `Proof:` line: it is optional. When two facts answer the same
requirement, the one with proof is used first. A fact with no proof is still
a source and can still go on a resume. Proof does not change what a fact is:
a course certificate proves the course, not job experience. The proof line
itself is not printed on a resume unless you ask for it (a portfolio link,
for example).

If your career has two distinct sides (for example hands-on and management),
keep two banks: `bullet_bank_handson.md` and `bullet_bank_leadership.md`.
Claude will say which one it is drawing from and wait for your OK.

## What never goes in this folder

Government ID numbers, date of birth, full street address, bank details,
or a referee's phone and email. A resume does not need them, and a form that
does need them gets them from you directly.
