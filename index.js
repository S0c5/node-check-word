var fs = require('fs');

var words = function(language){
    var possibleLanguages = ['de', 'en', 'es', 'fr'];

    language = language && language.toLowerCase() || 'en';

    if(possibleLanguages.indexOf(language) == -1) throw new Error(language + " is not valid language");
    return {
        check : function(word){
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