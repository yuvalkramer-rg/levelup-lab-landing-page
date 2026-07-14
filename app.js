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
      list.append(renderIdea(idea));
    }
  } catch {
    const li = document.createElement('li');
    li.textContent = 'Ideas coming soon — check back shortly.';
    list.append(li);
  }
}

function renderIdea(idea) {
  const li = document.createElement('li');

  const row = document.createElement('div');
  row.className = 'idea-row';
  const text = document.createElement('span');
  text.className = 'idea-text';
  text.textContent = idea.text;
  row.append(text);

  if (idea.files.length > 0) {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'idea-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span class="idea-toggle-arrow">&#9656;</span> Files';
    row.append(toggle);

    const fileList = document.createElement('ul');
    fileList.className = 'idea-files';
    fileList.hidden = true;
    for (const file of idea.files) {
      const fileLi = document.createElement('li');
      const a = document.createElement('a');
      a.href = file.url;
      a.textContent = file.label;
      a.setAttribute('download', '');
      fileLi.append(a);
      fileList.append(fileLi);
    }

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      fileList.hidden = expanded;
    });

    li.append(row, fileList);
  } else {
    li.append(row);
  }

  return li;
}

main();
