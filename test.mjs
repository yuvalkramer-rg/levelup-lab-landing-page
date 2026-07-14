import assert from 'node:assert';
import { splitParagraphs, parseParagraph } from './parse.js';

// splitParagraphs
assert.deepStrictEqual(splitParagraphs('One\n\nTwo\n\n\nThree'), ['One', 'Two', 'Three']);
assert.deepStrictEqual(splitParagraphs('  \nOnly one\n  '), ['Only one']);
assert.deepStrictEqual(splitParagraphs(''), []);

// parseParagraph
assert.deepStrictEqual(parseParagraph('Plain idea'), { text: 'Plain idea', files: [] });
assert.deepStrictEqual(
  parseParagraph('Idea with link [download](files/x.zip)'),
  { text: 'Idea with link', files: [{ label: 'download', url: 'files/x.zip' }] },
);
assert.deepStrictEqual(
  parseParagraph('[only link](files/x.zip)'),
  { text: '', files: [{ label: 'only link', url: 'files/x.zip' }] },
);
assert.deepStrictEqual(parseParagraph('   '), { text: '', files: [] });

// a hard-wrapped multi-line paragraph collapses to one idea, link included
assert.deepStrictEqual(
  parseParagraph('This idea spans\nseveral hard-wrapped lines\n[download](files/y.zip)'),
  { text: 'This idea spans several hard-wrapped lines', files: [{ label: 'download', url: 'files/y.zip' }] },
);

// multiple files, one per line, following the idea text
assert.deepStrictEqual(
  parseParagraph('Audit the screens\n[GUIDELINES.md](files/audit/GUIDELINES.md)\n[dashboard.html](files/audit/dashboard.html)'),
  {
    text: 'Audit the screens',
    files: [
      { label: 'GUIDELINES.md', url: 'files/audit/GUIDELINES.md' },
      { label: 'dashboard.html', url: 'files/audit/dashboard.html' },
    ],
  },
);

console.log('parse.js: all assertions passed');
