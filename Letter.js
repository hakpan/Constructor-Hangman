//require the use of Word.js file in this code
var newWord = require("./Word.js");

//create a constructor for the game
var HangmanConstructor = function(){
	//create a function when a new game starts
		//It will grab a new word from the Word.js file
		//Create the underscores in place of the new word
		//starts guesses at 10
	this.newGame = function(){
		this.grabWord();
		this.createUnderscores();
		this.guesses = 10;
	}
	//variable for the new word
	//variable to hold the word
	//variable to hold underscores
	//variable of the keys users can push
	this.theWord = "";
	this.wordArray = [];
	this.underscores = [];
	this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	//Function 
	this.alphabetUpdate = function(){
		//create for loop that goes through the alphabet array and puts it in the wordArray
		for (var i = 0; i < this.wordArray.length; i++) {
			for (var j = 0; j < this.alphabet.length; j++) {
				if (this.wordArray[i] === this.alphabet[j]){
					this.alphabet.splice(j, 1);
				}
			}
		}
	};
	this.guesses = 10;
	this.checkLetters = function(chkltr){
		console.log("\n \n");
		for (var i = 0; i < this.wordArray.length; i++) {
			if (this.wordArray[i] === chkltr) {
				this.underscores[i] = chkltr;
				console.log("Correct! \n");
			}
		}
		this.checkAlphabet(chkltr);
	};
	this.checkAlphabet = function(chkltr){
		for (var i = 0; i < this.alphabet.length; i++) {
			if (this.alphabet[i] === chkltr) {
				this.alphabet.splice(i, 1);
				console.log("Not a match.");
				this.guesses--;
			}
		}
	};
	this.createUnderscores = function(){
		for (var i = 0; i < this.wordArray.length; i++) {
			this.underscores.push("_");
		}
	};
	this.grabWord = function(){
		var newGame = new newWord;
		newGame.arraySplit();
		this.theWord = newGame.selectTheWord;
		this.wordArray = newGame.wordArray;
	};
};

module.exports = HangmanConstructor;


