# Lab landing page — design

## Purpose
Static page for conference attendees showing a list of ideas to try in an interactive lab, with optional linked file downloads per idea. Content is uploaded by someone other than the requester, via editing files directly in this repo.

## Hosting
GitHub Pages, deployed from the `main` branch root of this repo (`levelup-lab-landing-page`, under `yuvalkramer-rg`). No build step, no CI, no VM. Every push to `main` auto-publishes. A `.nojekyll` file disables GitHub's Jekyll processing.

## Repo layout
```
index.html        page structure
style.css         minimal styling
app.js            fetches ideas.txt, parses it, renders the list
ideas.txt         content: one idea per line
files/            downloadable files referenced from ideas.txt
UPLOADING.md      instructions for content uploader (non-technical)
.nojekyll
```

## Content format (`ideas.txt`)
- One idea per line; blank lines ignored.
- Optional trailing Markdown-style link for a download: `Idea text [label](files/thing.zip)`.
- Example:
  ```
  Clone a 500GB database in under a minute
  Try schema drift detection [sample project](files/drift-demo.zip)
  Anonymize a production dataset with one command
  ```

## Rendering
`app.js` fetches `ideas.txt` on load, splits into lines, renders each as a list item, and converts any trailing `[label](url)` into a real `<a>` tag via one regex. If the fetch fails or the file is empty, the page shows "Ideas coming soon" instead of a blank list.

## Testing
The line-parsing function (line of text → `{text, link}` / HTML) is pure (no DOM dependency). `test.mjs` covers: plain line, line with link, blank line, link-only line, run via `node test.mjs` (Node's built-in `assert`, no framework).

## Out of scope
No CMS, no build tooling, no analytics, no authentication, no custom domain (can be added later via repo settings if wanted).
