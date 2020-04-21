var composerOption = [ "bach", "mozart" , "beethoven" , "mahler" , "wagner" , "chopin" , "haydn" , "ravel" , "faure" , "debussy" , "liszt" , "schumann" , "stravinsky"];
var images = ['bach.jpg' , '.mozart,jpg' , 'beethoven.jpg' 'mahler.jpg' , 'wagner.jpg' , 'chopin.jpg' , 'haydn.jpg ' , 'ravel.jpg', 'faure.jpg' , 'debussy,jpg' , 'liszt.jpg', 'schumann.jpg' , 'stravinsky.jpg']

let answer = '';
let guessed = [];
let wordStatus = null;
let chosenImage
let chosenComposer





//show random composer image
function getRandomImage()  {
   chosenImage = images[Math.floor(Math.random() * images.length)];
   

}
//show random composer name with underscores
function getRandomComposer()  {
   chosenComposer = composerOption[Math.floor(Math.random() * composerOption.length)];
}

//take user guess
function checkUserGuess()  {
   document.onkeyup

}
//play song if correct
function playComposerPiece()  {

}
//Show win/lose message
function displayOutput() {

}

//reset game
function reset() {

}

//show wins/losses
function showScore() {

}


