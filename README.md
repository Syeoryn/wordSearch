#### #WordSearchWednesday

Medium put out a challenge to find all the writing-related words in a word search.  This script was my solution to find all the hidden words.  Unfortunately, it found a few too many...

Included in this repo is the script used to traverse the word search and find the words, the dictionary containing all words in the English language, and a text file of the 501 words found by the script.

If you’re curious to learn more, you can find the [Medium Challenge here](https://medium.com/@Medium/wordsearchwednesday-a519722b5afd), and [my response post here](https://medium.com/@syeoryn/how-i-arguably-defeated-mediums-wordsearchwednesday-d09659aecd06).

If you want to see for yourself, just clone the repo:
```
git clone https://github.com/Syeoryn/wordSearch.git
```

And run:
```
node wordSearch.js
```

This will generate (and overwrite) the wordsFound.txt file.  
```
open wordsFound.txt
```

And of course, you’re more than welcome to play with the script and see what you can do-- that’s wordSearch.js for the word finder and dictionary.js for the set of English words used.
