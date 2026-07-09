// Pure parsing logic, shared by app.js (browser) and test.mjs (node).
const LINK = /^(.*?)\s*\[([^\]]+)\]\(([^)]+)\)\s*$/;

export function parseLine(line) {
  const match = line.match(LINK);
  if (match) {
    const [, text, label, url] = match;
    return { text: text.trim(), label, url };
  }
  return { text: line.trim(), label: null, url: null };
}
