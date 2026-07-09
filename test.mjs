import assert from 'node:assert';
import { splitParagraphs, parseParagraph } from './parse.js';

// splitParagraphs
assert.deepStrictEqual(splitParagraphs('One\n\nTwo\n\n\nThree'), ['One', 'Two', 'Three']);
assert.deepStrictEqual(splitParagraphs('  \nOnly one\n  '), ['Only one']);
assert.deepStrictEqual(splitParagraphs(''), []);

// parseParagraph
assert.deepStrictEqual(parseParagraph('Plain idea'), { text: 'Plain idea', label: null, url: null });
assert.deepStrictEqual(
  parseParagraph('Idea with link [download](files/x.zip)'),
  { text: 'Idea with link', label: 'download', url: 'files/x.zip' },
);
assert.deepStrictEqual(
  parseParagraph('[only link](files/x.zip)'),
  { text: '', label: 'only link', url: 'files/x.zip' },
);
assert.deepStrictEqual(parseParagraph('   '), { text: '', label: null, url: null });

// a hard-wrapped multi-line paragraph collapses to one idea, link included
assert.deepStrictEqual(
  parseParagraph('This idea spans\nseveral hard-wrapped lines\n[download](files/y.zip)'),
  { text: 'This idea spans several hard-wrapped lines', label: 'download', url: 'files/y.zip' },
);

console.log('parse.js: all assertions passed');
