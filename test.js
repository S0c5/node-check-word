const assert = require('assert');

const checkWords = require('./index');
const englishWords = checkWords('en');

const words = [
  ['hello', true],
  ['aa', true],
  ['kasdjflfasdfas', false],
  ['sam', true],
  ['Sam', true],
  ['SAM', true],
  ['zzzs', true],
  ['', true],
];

function testWords(words) {
  function test([word, expected]) {
    assert(englishWords.check(word) === expected);
  }
  words.forEach(test);
}

testWords(words);
