var composerOption = [ "mozart", "bach" , "beethoven" , "mahler" , "wagner" , "debusy" , "stravinsky" , "faure" , "ravel" , "schumann" , "haydn", "liszt"];
var images = ['mozart.jpg' , 'bach.jpg' , 'beethoven.jpg' , 'mahler.jpg' , 'wagner.jpg' , 'debussy.jpg' , 'stravinsky.jpg' , 'faure.jpg' , 'ravel.jpg' , 'schumann.jpg' , 'haydn.jpg' , 'liszt.jpg'];
let chosenImage;
let chosenComposer;
var startingImage = document.getElementById("content")
var button = document.getElementById("new-game");



//start game
button.addEventListener("click" , function(){
   startGame()
});


//pick random composer image and name 
function getRandomComposer()  {
   var randNum = Math.floor(Math.random() * composerOption.length);
   chosenComposer = composerOption[randNum];
   chosenImage = images[randNum];
   console.log(chosenComposer);
   console.log(chosenImage);
}


//show random composer image
function startGame() {
   getRandomComposer()
   startingImage.src="asssets/images/" + chosenImage
   console.log("startGame")
}


//take in player guess

function userGuess() {
   document.getElementById("Submit-guess").submit()

   if (guess == chosenComposer) {
   displayOutput("win");{
     
   }
}

else {
   displayOutput("lose"); {
      
   }
  }
 }


 //check player guess
function checkUserGuess() {
   let guess = document.getElementById("user-guess")["0"].value;
   if (guess === chosenComposer) {
      alert("you win!")
   }

   else {
      alert("thats not right!")
   }
   }

