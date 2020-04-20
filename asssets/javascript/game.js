var composerOption = [ "bach", "mozart" , "beethoven" , "mahler" , "wagner" , "chopin" , "haydn" , "ravel" , "faure" , "debussy" , "liszt" , "schumann" , "stravinsky"];
var randoComposer = getRandoComposer();
let wordStatus = null;


//pick a composer 
function randomComposer() {
   answer = composerOption[Math.floor(Math.random() * composerOption.length)];
 }

 //check player guess
function checkPlayerGuess() {
   var guess = document.getElementById(player-guess)["0"].value;
      if(guess ==randoComposer) {
         displayoutput("correct");
      }
      else(guess !==randoComposer ); {

         displayoutput("wrong!")
      }
}
//show empty name of Composer with "_"
function guessedWord() {
   wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
 
   document.getElementById('wordHighlight').innerHTML = wordStatus;
 }
 
 guessedWord();

 function reset() {

 }