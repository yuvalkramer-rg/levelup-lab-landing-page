import { splitParagraphs, parseParagraph } from './parse.js';

async function main() {
  const list = document.getElementById('ideas');
  list.innerHTML = '';
  try {
    const res = await fetch('ideas.txt');
    if (!res.ok) throw new Error('fetch failed');
    const paragraphs = splitParagraphs(await res.text());
    if (paragraphs.length === 0) throw new Error('empty');
    for (const paragraph of paragraphs) {
      const idea = parseParagraph(paragraph);
      const li = document.createElement('li');
      li.append(idea.text);
      if (idea.url) {
        li.append(' ');
        const a = document.createElement('a');
        a.href = idea.url;
        a.textContent = idea.label;
        a.setAttribute('download', '');
        li.append(a);
      }
      list.append(li);
    }
  } catch {
    const li = document.createElement('li');
    li.textContent = 'Ideas coming soon — check back shortly.';
    list.append(li);
  }
}

main();
