var guessed = [];
var dictionary = ["one", "two", "three", "four", "five"];
var currentWord = "";
var wordGuessed = "";
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var gameOver = true;


// jQuery's on ready
$(function(){ 
	gameStart();
	console.log(currentWord);
// javascript onkey up function -->
// document.onkeyup = function(event) {
// console.log("PLain javascript onkeyup function");
// }

// document - calling the html/the document
// .onkeyup - the document will apply the onkeyup action (the "." means that 
// it belongs to what's before it)
// 



//Guessed letters area

	// own code goes inside jQuery's ready
$(document).on("keyup", function(event) { 
		if (!gameOver) {

			if(validate(event.key)) {
				if(currentWord.includes(event.key)) {
						replaceUnderscore(event.key);
						$("#currentWord").html("Word: " + wordGuessed);
						if (currentWord === wordGuessed) {
							wins += 1;
							gameOver = true;
							$("#iWon").html("Wins: " + wins);
						}

					} else if(!guessed.includes(event.key)) {
						guessed.push(event.key);
						$("#lettersGuessed").html("Letters Guessed: " + guessed);
						if (guessesLeft > 0) {
							guessesLeft -= 1;
							$("#guessesLeft").html("Guesses Left: " + guessesLeft);
							if (guessesLeft === 0) {
								losses += 1;
								gameOver = true;
								$("#losses").html("Losses: " + losses);
								$("#currentWord").html("Word: " + guessed + " " + 
									"(The word was: " + currentWord + "!)");
							}

						}	
					}  
						
						
				}
			 //event.key means that the DOM will show what key you pressed

		}	else {
			gameStart();
			gameOver = false;
		}

	}); 

});



//================== Functions ===================//

// Function to run the whole alphabet???
function validate(strValue){
	var objRegExp  = /^[a-z]+$/;
		return objRegExp.test(strValue);
}

// Function for JS to pick a random word
function randomWord(dict) {
	var pickedWord = dict[Math.floor(Math.random() * dict.length)];
	return pickedWord;
}


// Function to start the game
function gameStart() {
	guessed = [];
	wordGuessed = "";
	currentWord = randomWord(dictionary);
	fillWordWithDashes(currentWord.length);
	$("#currentWord").html("Word: " + wordGuessed);
	guessesLeft = 6;
	$("#guessesLeft").html("Guesses Left: " + guessesLeft);
}

// Function to create underscores with the amount of letters in the word
function fillWordWithDashes(arrayLength) {
	for(var i = 0; i < arrayLength; i++) {
		wordGuessed = wordGuessed.concat("_");
		console.log()
	}
}

// Function to replace underscores
function replaceUnderscore(letterToReplace) {
	for(var i = 0; i < currentWord.length; i++) {
		if(currentWord.charAt(i) === letterToReplace) {
			wordGuessed = replaceAt(wordGuessed, i , letterToReplace);
		}
	}
}


// Function to replace the underscores with letters at their specific position
function replaceAt(string, index, replace) {
  	return string.substring(0, index) + replace + string.substring(index + 1);
}









