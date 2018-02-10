# Constructor-Hangman
Creating Hangman game in the terminal that will receive user input using npm inquirer & or prompt.

Game Instructions:

User runs, node index.js and that prompts the game to begin. Guess a letter will display. The user will put in a letter and if the letter is guessed correctly the terminal will display the word Correct and place the letter the user guessed on the blank space. If incorrect the terminal will display Incorrect and show number of guesses left. Total of 10 guesses for user. When all guesses done terminal will display Game Over. If the user guesses all the letter correctly and still has guesses left terminal will diplay You Won.

Files to operate game:

-Letter.js: Conatins a constructor, Letter. This constructor is able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed

-Word.js: ontains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.

-index.js: Contains the logic for the course of the game, which depends on Word.js and:

	-Randomly selects a word and uses the Word constructor to store it
	-Prompts the user for each guess and keeps track of the user's remaining guesses
