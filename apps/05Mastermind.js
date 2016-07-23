'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}

function generateSolution() {
    for (var i = 0; i < 4; i++) {
        var randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex];
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
    //abcd, gefh
    //[a, b, c, d], [g, e, f, h]

    // your code here
    var solutionArray = solution.split('');
    var guessArray = guess.split('');
    var correctLetterLocations = 0;
    var correctLetters = 0;

    for(var i =0; i<solutionArray.length; i++) {
      if(solutionArray[i]===guessArray[i]){
        correctLetterLocations++;
        solutionArray[i]=null;
      }
    }

    for(var i=0; i<solutionArray.length; i++) {
      var targetIndex = 0;
      targetIndex = guessArray.indexOf(solutionArray[i]);

      //when there is a match
      //['a', 'b', 'c'].indexOf('a');
      //0
      //when there isn't a match
      //['a', 'b', 'c'].indexOf('d');
      //-1

      if(targetIndex>-1) {
        correctLetters++;
        solutionArray[i]=null;
      }
    }

    return correctLetterLocations+"-"+correctLetters;

}

function mastermind(guess) {
    // your code here
    if(guess===solution) {
      return 'You guessed it!';
    }
    else{
      if(board.length<10){
        var hint=generateHint(solution, guess);
        addColor(hint);
        board.push(guess+" "+hint);
        console.log("guess again");
      } else {
        printBoard();
        return "The solutions is " + solution;
      }
    }
}


function addColor(hint){
  var hintArray = hint.split('-');
  var redLetter = colors.red(hintArray[0]);
  var whiteLetter=colors.white(hintArray[1]);

  return redLetter+'-'+whiteLetter;

}


function getPrompt() {
    prompt.get(['guess'], function (error, result) {
        console.log( mastermind(result['guess']) );
        printBoard();
        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

    describe('#mastermind()', function () {
        it('should register a guess and generate hints', function () {
            solution = 'abcd';
            mastermind('aabb');
            assert.equal(board.length, 1);
        });
        it('should be able to detect a win', function () {
            assert.equal(mastermind(solution), 'You guessed it!');
        });
    });

    describe('#generateHint()', function () {
        it('should generate hints', function () {
            assert.equal(generateHint('abcd', 'abdc'), '2-2');
        });
        it('should generate hints if solution has duplicates', function () {
            assert.equal(generateHint('abcd', 'aabb'), '1-1');
        });

    });

} else {

    generateSolution();
    getPrompt();
}
