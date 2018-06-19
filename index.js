var fs = require('fs');
var escapeStringRegexp = require('escape-string-regexp');

var words = function(language){
    var possibleLanguages = ['de', 'en', 'es', 'fr'];

    language = language && language.toLowerCase() || 'en';

    if(possibleLanguages.indexOf(language) == -1) throw new Error(language + " is not valid language");
    return {
        check : function(word){
            // escape weird characters for safe regex building
            word = escapeStringRegexp(word)

            var content = fs.readFileSync(__dirname + '/words/'+language+'.txt');
            var regex = new RegExp('\n' + word +'\n');
            if ( content.toString('utf-8').match(regex)) {
                return true;
            }
            return false;
        }
    };
};


module.exports = words;