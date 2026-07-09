// Pure parsing logic, shared by app.js (browser) and test.mjs (node).
const LINK = /^(.*?)\s*\[([^\]]+)\]\(([^)]+)\)\s*$/;

// Ideas are separated by one or more blank lines; each idea's own line
// breaks (e.g. from a hard-wrapped paragraph) are collapsed to spaces.
export function splitParagraphs(text) {
  return text
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function parseParagraph(paragraph) {
  const joined = paragraph
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .join(' ');
  const match = joined.match(LINK);
  if (match) {
    const [, text, label, url] = match;
    return { text: text.trim(), label, url };
  }
  return { text: joined, label: null, url: null };
}
