const fs = require('fs');
const escapeStringRegexp = require('escape-string-regexp');

/**
 * @param language {string} two character abbreviation for language containing words for that language;
 * supports: de, en, es, fr
 * @returns {{check: (function(*=): boolean)}} a function that determines if the given word is a valid word in the
 * language
 */
module.exports = function words(language) {
    const possibleLanguages = ['de', 'en', 'es', 'fr'];

    language = language && language.toLowerCase() || 'en';

    if (possibleLanguages.indexOf(language) === -1) throw new Error(language + " is not valid language");
    const content = fs.readFileSync(__dirname + '/words/'+language+'.txt');
    const languageWords = content.toString('utf-8');
    return {
        check : function(word) {
            // escape special regex characters to match them literally; "I got $ ?" => "I got \$ \?"
            word = escapeStringRegexp(word);
            return !!languageWords.match(new RegExp(word, 'i'));
        }
    };
};
