var fs = require('fs');
var escapeStringRegexp = require('escape-string-regexp');

var words = function(language){
    var possibleLanguages = ['de', 'en', 'es', 'fr'];

    language = language && language.toLowerCase() || 'en';

    if (possibleLanguages.indexOf(language) === -1) throw new Error(language + " is not valid language");
    var content = fs.readFileSync(__dirname + '/words/'+language+'.txt');
    var languageWords = content.toString('utf-8');
    return {
        check : function(word) {
            // escape special regex characters to match them literally; "I got $ ?" => "I got \$ \?"
            word = escapeStringRegexp(word);
            var regex = new RegExp('\n' + word +'\n');
            return !!languageWords.match(regex);
        }
    };
};

module.exports = words;
