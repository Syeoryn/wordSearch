var dictionary = require('./dictionary.js');
var fs = require('fs');
var letters = ["A E U P H E M I S M P A O A M","E N U U S E T O L P P X N D D","T N A Z A I O A K H Y T S A P","W Y K C R E S M O M I J L E N","W G I O H S R R O T B L G X S","X O N N Q R I R H T E E Y P Y","E Y G N Z S O E Z G I L G O N","R C N O M N S N O A P F A S O","O T N T J I C R I P A L I I P","H T H A S M Y Y M S L D H T S","P N U T N J Z O Y I M E B I I","A E J I C O N N T N P N A O S","T T I O Q O S E B A E O S N F","E N A N L M R S C R R T O A K","M O Q O G A S Z A R S A L N Z","P C G R T M E R T A O T I E T","L U F I I L V E H T N I L C H","E F O I I S O T A I I O O D E","C N A M A O A E R V F N Q O S","A I I I K P Z M S E I E U T I","C S K L E J D M I G C H Y E S","O V H S D O K I S T A C V Y E","P J U X T A P O S I T I O N H","H C L I M A X O E C I L F M T","O T E H T I P E T S O C P C O","N I S A R C A S M A N U T Z P","Y A Z C O N T E X T M K R X Y","V R A M B I G U I T Y O P S H","A N V O D N E U N N I P N M E","S Y N E C D O C H E U S A O U"];

findAllWords(letters);

function findAllWords(letters){
  var letterMatrix = convertToMatrix(letters);
  var words = traverseForWords(letterMatrix);
  var wordList = Object.keys(words);
  wordList.sort(function(word1, word2){
    return word2.length - word1.length;
  });
  fs.writeFile('./wordsFound.txt', wordList.join('\n'));
  console.log("There were " + Object.keys(words).length + " words found in Medium's #WordSearchWednesday Challenge.");
  console.log("Open wordsFound.txt to see them all.");
}

function convertToMatrix(letters){
  for(var i = 0; i < letters.length; i++){
    letters[i] = letters[i].split(' ');
  }
  return letters
}

function traverseForWords(letterMatrix){
  var words = {};

  var directions = {
    up: [-1, 0],
    upRight: [-1, 1],
    right: [0, 1],
    rightDown: [1, 1],
    down: [1, 0],
    downLeft: [1, -1],
    left: [0, -1],
    leftUp: [-1, -1],
  };

  for(var column = 0; column < letters.length; column++){
    for(var row = 0; row < letters[column].length; row++){
      var currentWord = '';
      currentWord += letters[column][row];
      for(var direction in directions){
        var up = directions[direction][0];
        var right = directions[direction][1];
        move(currentWord, column, row, up, right, words);
      }
    }
  }
  return words;
}

function ifWordAddToSet(word, set){
  if(word.length >= 3 && word.toLowerCase() in dictionary){
    set[word] = true;
  }
}

function move(currentWord, i, j, up, right, words){
  ifWordAddToSet(currentWord, words);
  if(letters[i + up] && letters[i + up][j + right]){
    move(currentWord + letters[i + up][j + right], i + up, j + right, up, right, words);
  }
}

