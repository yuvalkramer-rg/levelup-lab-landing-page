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
4. To attach a download to an idea, add this to the end of its paragraph:
   `[label text](files/your-file-name)`

   Example:
   ```
   Try schema drift detection [sample project](files/drift-demo.zip)

   Anonymize a production dataset with one command. This can be a longer
   paragraph if you need more than one line to explain the idea.
   ```
   "sample project" is what shows as the clickable link text; `files/drift-demo.zip`
   must exactly match a file you've uploaded to the `files/` folder (see below).
5. Scroll down, add a short commit message, and click "Commit changes...".

## Adding a download file

1. Open the [`files`](files) folder in this repo.
2. Click "Add file" → "Upload files", then drag in your file.
3. Commit the change.
4. Reference it from `ideas.txt` as `files/<the-exact-filename>` (see above).

Tip: avoid spaces in filenames (use hyphens instead), so links don't break.

## Removing the example content

`ideas.txt` currently contains example lines and `files/drift-demo.txt` is a
placeholder. Replace/delete them once you add the real list.
