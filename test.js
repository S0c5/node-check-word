const assert = require('assert');

const checkWords = require('./index');
const englishWords = checkWords('en');

const words = [
  ['hello', true],
  ['aa', true],
  ['zymogenesis', true],
  ['sam', true],
  ['zzzzzzzzzzzzzzz', false],
  ['Sam', true],
  ['SAM', true],
  ['zzzs', true],
];

function testWords(words) {
  function test([word, expected]) {
    assert(englishWords.check(word) === expected);
  }
  words.forEach(test);
}

testWords(words);
