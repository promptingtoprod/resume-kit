# Resume tailoring kit for Claude Code

A free folder that turns Claude Code into a careful resume assistant. You keep
one honest record of your career. For each job posting, it picks from that
record, tells you where you fall short, builds the Word file, and has a panel
of simulated reviewers check it. It never invents a fact about you.

From the Prompt to Prod video: https://youtu.be/oaLLSVtbzPs

## Change it as you like

This is a system I built for my own resume, shared as it is. It's a starting
point, not a finished product. Change the rules, the commands, the wording or
the layout. Add what your field needs and remove what it doesn't. It's yours
to change.

It's free under the MIT licence (see `LICENSE`): use it, change it and share
it, as is, with no warranty.

## Suggest a change

Found something that could be better, or changed it in a way that works well
for your field? Feel free to suggest it:

- Leave a comment on the video: https://youtu.be/oaLLSVtbzPs
- Or open an issue here on GitHub (the **Issues** tab at the top of this page).
  Say what you'd change and why. A short example helps.

Please don't paste your own resume or personal details into a comment or an
issue. Both are public.

## Get it

1. On this page, click the green **Code** button, then **Download ZIP**.
2. Unzip it somewhere private on your computer. Not in a shared or synced work
   folder.

Already use git? `git clone` works too.

## Use it

1. Open a terminal in the folder and start Claude Code: `claude`
2. Try Bob's example first (a fictional person, the one from the video). See
   "Try it before you use your own details" in `START-HERE.md`.
3. Type `/setup` and answer the interview. It builds your record from your
   current resume.
4. For each job: `/tailor <job-label>`, then `/review` and `/panel`.

You need Claude Code, Node.js, and your current resume in any format. The full
guide, including privacy notes, is in **`START-HERE.md`**.

## Before you send anything

Read every resume it builds. What goes out under your name is yours to check.
The reviewers are simulated by Claude, not real recruiters, and their scores are
estimates.

Don't put your own copy of this folder back on GitHub once it holds your
details. The `.gitignore` keeps personal files out as a safety net, but the safe
choice is to keep it on your computer.
