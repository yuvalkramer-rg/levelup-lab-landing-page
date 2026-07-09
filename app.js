import { parseLine } from './parse.js';

async function main() {
  const list = document.getElementById('ideas');
  list.innerHTML = '';
  try {
    const res = await fetch('ideas.txt');
    if (!res.ok) throw new Error('fetch failed');
    const lines = (await res.text()).split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) throw new Error('empty');
    for (const line of lines) {
      const idea = parseLine(line);
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
