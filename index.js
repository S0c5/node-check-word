var fs = require('fs');
var escapeStringRegexp = require('escape-string-regexp');

var words = function(language){
    var possibleLanguages = ['de', 'en', 'es', 'fr'];

    language = language && language.toLowerCase() || 'en';

    if(possibleLanguages.indexOf(language) == -1) throw new Error(language + " is not valid language");
    var content = fs.readFileSync(__dirname + '/words/'+language+'.txt');
    var contentStr = content.toString('utf-8')
    return {
        check : function(word){
            // escape weird characters for safe regex building
            word = escapeStringRegexp(word)
            var regex = new RegExp('\n' + word +'\n');
            if ( contentStr.match(regex)) {
                return true;
            }
            return false;
        }
    };
};


module.exports = words;
