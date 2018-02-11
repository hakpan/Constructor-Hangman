var inquirer = require("inquirer");
var wordLogic = require("./Letter.js");
var playerWins = 0;
var playerLosses = 0;

inquirer.prompt([ 
	{
		type: "input",
		message: "What is your name?",
		name: "username"
	},
	{
		type: "confirm",
		message: "Ready to play Hangman?",
		name: "confirm",
		default: true
	},
]).then(function(inquirerResponse){
	if (inquirerResponse.confirm) {
		
      console.log("\n*****************************\n")
      console.log("\nHello " + inquirerResponse.username +"!");
      console.log("Lets play some Hangman!\n");
      console.log("\n****** Chose a letter. ******\n \n")
      startTheGame();
    }
    else {
      console.log("\n See you later " + inquirerResponse.username + "!\n");
    }
  });

var startTheGame = function(){
	var playGame = new wordLogic;
	var displayLetters;
	playGame.newGame();
	var recurringPrompt = function(){
		var displayLetters = playGame.underscores.toString().replace(/,/g, " ");
		if (playGame.guesses <= 0){
			playerLosses++;
			console.log("************************");
			console.log ("You lost.\nThe word was: "+playGame.theWord+".\nYou have "+playerWins+" wins and "+playerLosses+" losses.");
			console.log("************************");
			continueGame();
		} else {
			playGame.alphabetUpdate();
			console.log("You have "+playGame.guesses+" guesses remaining!\n");
			console.log("Guess the Word! "+displayLetters+"\n");
			inquirer.prompt([
				{
					type: "input",
					message: "Chose a letter.",
					name: "enteredLetter"
				},
			]).then(function(inquirerResponse){
					var userInput = inquirerResponse.enteredLetter.toLowerCase();
					playGame.checkLetters(userInput);
					if (playGame.underscores.toString().replace(/,/g, "") === playGame.theWord){
						playerWins++;
						console.log("You Guessed the Word! \nYou have "+playerWins+" wins and "+playerLosses+" losses! \n\n");
						continueGame();
					} else {
						recurringPrompt();
				}
			});
		}
	};
	recurringPrompt();
};

var continueGame = function(){

	inquirer.prompt([ 
  {
    type: "confirm",
    message: "Still Wanna Play?",
    name: "confirm",
    default: true
  },
]).then(function(inquirerResponse){
  if (inquirerResponse.confirm) {
      startTheGame();
    }
    else {
      console.log("See you later!");
    }
  });



};

