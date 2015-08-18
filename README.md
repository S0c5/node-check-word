# check-word

check if the word exist in the language configured, the language could be english or spanish

### install

```bash
$ npm install check-word
```

### how to use?

```javascript
var checkWord = require('check-word'),
    words     = checkWord('en'); // setup the language for check, default is en
    
words.check('dog'); // true
words.check('perro'); // false
words.check('hi'); // true

...

```

### credits

thanks to repository  [atebits/words](https://github.com/atebits/Words).



