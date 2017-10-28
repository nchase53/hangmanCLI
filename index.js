var prompt = require("prompt");
prompt.start();

var Word = require("./word.js");

var game = {
	wordBank: ["boolean", "string", "array", "scope", "prompt", "variable", "constructor"],
	guessesRemaining: 15,
	currentWord: null,
	startGame : function(wrd){
		var randomWord = this.wordBank[Math.floor(Math.random()* this.wordBank.length)];
		console.log(randomWord); 
		this.currentWrd = new Word(randomWord);
		this.currentWrd = getLets();
		this.keepPrompting();
	},

	keepPrompting: function() {
		var self = this;
		prompt.get(["guessLetter"], function(err, result) {
			console.log("The letter or space you guessed is : "+result.guessLetter);
			var userGuesses = self.currentWord.checkIfLetterFound(result.guessLetter);

			console.log("Guesses" + userGuesses);

			if(userGuesses === 0) {
				console.log("Try again!");
				self.guessesRemaining -= 1;
			}else{
				console.log("You guessed Right!");
				if (self.currentWord.didWeFindTheWord()) {
					console.log("You Won!!!");
					return 1;

			}else{
				if (self.guessesRemaining === 0) {
					console.log("Game Over");
					console.log("The word you were guessing was:"+self.randomWord);
			}else{
				console.log(self.currentWord.wordRender());
				}
			}
		}	  

	}			
	}); 
}
			
game.startGame();