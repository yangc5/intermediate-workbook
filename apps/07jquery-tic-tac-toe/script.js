'use strict';

var playerTurn = 'X';

var winCombinations = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"]
];

function checkForWin(){
  for(var i=0; i<winCombinations.length; i++) {
    if($('[data-cell='+winCombinations[i][0]+']').text()===playerTurn && $('[data-cell='+winCombinations[i][1]+']').text()===playerTurn && $('[data-cell='+winCombinations[i][2]+']').text()===playerTurn ){
      return true;
    }
  }
}

function checkForWinWithForEach() {
  winCombinations.forEach(function(currentCombination){
    if($('[data-cell='+currentCombination[0]+']').text()===playerTurn && $('[data-cell='+currentCombination[1]+']').text()===playerTurn && $('[data-cell='+currentCombination[2]+']').text()===playerTurn ){
      return true;
    }
  })
}




function togglePlayerTurn() {
  playerTurn = (playerTurn==='X' ? 'O':'X');
}

$(document).ready(function() {
    // Put app logic in here;
    $('[data-cell]').click(function(){
      if($(this).text()===""){
        $(this).text(playerTurn);

        if(checkForWin()){
          $('#announce-winner').text('Player '+playerTurn+' won!');
        }
        togglePlayerTurn();
      }
    });


});
