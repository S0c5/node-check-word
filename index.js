const fs = require('fs');
const escapeStringRegexp = require('escape-string-regexp');

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
            return !!languageWords.match(word);
        }
    };
};
