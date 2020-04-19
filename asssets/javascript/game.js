var composerOption [ "bach", "mozart" , "ravel" , "faure" , "chopin" , "debussy" , "wagner" , "liszt", "bruckner" , "brahms" , "schumann" , "haydn" , "tchaikovsky"];
var wins
var lossess


var composers = composerOption[Math.floor(Math.random() * composerOption.length)];

var answerArray = [];
for (var i = 0; i < composerOption.length; i++) {
   answerArray[i] = "_";
}

var remainingLetters = word.length;


var guess = prompt("Guess a letter , or click Cancel to stop playing");
if (guess === null) {
   break;
} else if (guess.length !==1) {
   alert("Enter a single letter");
}  else {
   for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
         answerArray[j] = guess;
         remainingLetters--;
      }
   }
}

function checkUserGuess() {
   var guess = document.getElementById("user-guess")["0"].value;
   alert (guess);

    
}

function displayOutput() {

}

