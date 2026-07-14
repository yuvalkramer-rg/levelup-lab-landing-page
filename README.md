# Updating the lab ideas page

No git client needed — everything below can be done from github.com in your browser.
Changes go live automatically (usually within a minute of saving).

## Editing the list of ideas

1. Open [`ideas.txt`](ideas.txt) in this repo.
2. Click the pencil ("Edit this file") icon, top right of the file view.
3. Each idea is a paragraph, separated from the next by a **blank line**.
   An idea can be one line or several — line breaks inside a paragraph
   are just joined together, so it's safe to write a longer idea as a
   wrapped paragraph.
4. To attach one or more downloads to an idea, add a line of its own for each
   file, right after the idea's description:
   `[label text](files/your-file-name)`

   Example (one file):
   ```
   Try schema drift detection [sample project](files/drift-demo.zip)

   Anonymize a production dataset with one command. This can be a longer
   paragraph if you need more than one line to explain the idea.
   ```
   Example (several files, each shows up under a "Files" arrow the visitor
   can expand):
   ```
   Audit the screens for design-token drift between two HTML files.
   [GUIDELINES.docx](files/audit-the-screens/GUIDELINES.docx)
   [dashboard.html](files/audit-the-screens/dashboard.html)
   [settings.html](files/audit-the-screens/settings.html)
   ```
   "sample project" / "GUIDELINES.docx" etc. are what show as the clickable
   link text; the path in parentheses must exactly match a file you've
   uploaded to the `files/` folder (see below); a subfolder per idea keeps
   same-named files like `GUIDELINES.docx` from clashing.
5. Scroll down, add a short commit message, and click "Commit changes...".

## Adding a download file

1. Open the [`files`](files) folder in this repo.
2. Click "Add file" → "Upload files", then drag in your file.
3. Commit the change.
4. Reference it from `ideas.txt` as `files/<the-exact-filename>` (see above).

Tip: avoid spaces in filenames (use hyphens instead), so links don't break.
