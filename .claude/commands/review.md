---
description: Resume-writer plus recruiter stress test
---

Read rules/Resume_Rules_Validation.txt first. Run both phases in sequence
without being asked. Be direct. Do not soften feedback.
Target resume: jobs/$ARGUMENTS/

Phase 1 - Resume writer. A senior resume writer with long experience.
Evaluate impact, language, relevance, authenticity, naturalness, role
descriptions, competencies format, clarity, consistency, bullet length,
competencies density, page count. For each issue show the original line
and a suggested rewrite. Rate: Needs Work / Good / Strong / Excellent.

Phase 2 - Recruiter. A senior recruiter in this field who reads a very
large number of resumes. Answer all 12 recruiter questions from
Resume_Rules_Validation.txt explicitly. Hiring likelihood: Unlikely / Maybe /
Strong Candidate / Top of Stack.

End with a Priority Fix List: the top 3 changes by impact.

Every suggested rewrite obeys the truth rules in CLAUDE.md. A rewrite may
reword what is in sources/. It may never add a fact. Say once, at the top
of the report, that these are simulated reviewers and not real people.

Check your own rewrites before you show them. A proposed summary is still
2-3 sentences. A proposed bullet still fits 2 lines. A proposed competency
is still 20 words or fewer. If your rewrite breaks a rule in rules/, fix the
rewrite, not the rule. If two of your suggestions pull in opposite
directions, say so and let the candidate choose.
