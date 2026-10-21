---
description: Generate the Word file and the preview page from tailored content
---

Read rules/Resume_Rules_Build.txt before writing or changing any code. The
layout is already encoded in scripts/build_resume.js - do not change spacing
or colour constants unless the rules file or config.json changed.

Job folder: $ARGUMENTS

1. node scripts/build_resume.js $ARGUMENTS
   Add --compress if compression mode was activated during validation.
   If the build refuses (a banned character, leftover placeholder text, or
   a NEED CONFIRMATION marker), fix the content, never the guard.
2. node scripts/build_resume_html.js $ARGUMENTS
   This writes a preview page the candidate can open in a browser and
   print to PDF. It needs nothing installed beyond Node.
3. node scripts/validate.js $ARGUMENTS
4. Ask the candidate to open the Word file and tell you the page count,
   and whether any section heading sits alone at the bottom of a page.
   If LibreOffice is installed, validate.js reports the page count itself.
5. If over the page target in config.json, run the compression sequence in
   order: language tightening, then --compress, then bullet reduction.
   Never shrink the font.

Report the page count and the output paths.
