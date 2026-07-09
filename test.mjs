import assert from 'node:assert';
import { parseLine } from './parse.js';

assert.deepStrictEqual(parseLine('Plain idea'), { text: 'Plain idea', label: null, url: null });
assert.deepStrictEqual(
  parseLine('Idea with link [download](files/x.zip)'),
  { text: 'Idea with link', label: 'download', url: 'files/x.zip' },
);
assert.deepStrictEqual(
  parseLine('[only link](files/x.zip)'),
  { text: '', label: 'only link', url: 'files/x.zip' },
);
assert.deepStrictEqual(parseLine('   '), { text: '', label: null, url: null });

console.log('parse.js: all assertions passed');
