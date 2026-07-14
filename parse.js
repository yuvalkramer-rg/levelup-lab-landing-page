// Pure parsing logic, shared by app.js (browser) and test.mjs (node).
const LINK_LINE = /^\[([^\]]+)\]\(([^)]+)\)$/;
const INLINE_LINK = /^(.*?)\s*\[([^\]]+)\]\(([^)]+)\)\s*$/;

// Ideas are separated by one or more blank lines; each idea's own line
// breaks (e.g. from a hard-wrapped paragraph) are collapsed to spaces.
export function splitParagraphs(text) {
  return text
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

// A paragraph is idea text plus zero or more attached files. A line that is
// *only* a `[label](url)` link is its own file entry (used for ideas with
// several files); a trailing `[label](url)` on the last text line is also
// accepted as a single file, for backwards compatibility.
export function parseParagraph(paragraph) {
  const lines = paragraph
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const files = [];
  const textLines = [];
  for (const line of lines) {
    const linkLine = line.match(LINK_LINE);
    if (linkLine) {
      files.push({ label: linkLine[1], url: linkLine[2] });
    } else {
      textLines.push(line);
    }
  }

  let text = textLines.join(' ');
  const inline = text.match(INLINE_LINK);
  if (inline) {
    text = inline[1].trim();
    files.push({ label: inline[2], url: inline[3] });
  }

  return { text, files };
}
