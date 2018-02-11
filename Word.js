var wordOptions = ["hippopotamus", "alpaca", "llama", "armadillo", "aardvark", "platypus", "blobfish", "rhinoceros", "elephant", "tortoise"];
var WordManipulator = function(){
	this.selectTheWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	this.arraySplit = function(){
		this.wordArray = this.selectTheWord.split("");
	};
	this.wordArray = [];
};
module.exports = WordManipulator;