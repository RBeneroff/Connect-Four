
var Config = {
  startingPlayer: 'r',
  playerTwo : 'b'
  // column1Array: [0,0,0,0,0,0],
  // column2Array: [0,0,0,0,0,0],

}; //config closing

var App = {
}; // App closing

// global variables
var rowsColumn1 = [];
var rowsColumn2 = [];
var rowsColumn3 = [];
var rowsColumn4 = [];
var rowsColumn5 = [];
var rowsColumn6 = [];
var rowsColumn7 = [];
function incrementRowIndex(i) {
  rowsColumn1[i]++;
  rowsColumn2[i]++;
  rowsColumn3[i]++;
  rowsColumn4[i]++;
  rowsColumn5[i]++;
  rowsColumn6[i]++;
  rowsColumn7[i]++;
};
var rowMax = 5;
column1Array = [0,0,0,0,0,0];
column2Array = [0,0,0,0,0,0];
column3Array = [0,0,0,0,0,0];
column4Array = [0,0,0,0,0,0];
column5Array = [0,0,0,0,0,0];
column6Array = [0,0,0,0,0,0];
column7Array = [0,0,0,0,0,0];
var currentPlayer = Config.startingPlayer;
var playerOne = 'r';
var playerTwo = 'b';

var UI = {
  //default playerOne is 'r'
changePlayer: function() {
  if (currentPlayer === 'r') {
    currentPlayer = playerTwo;
  } else if (currentPlayer === 'b') {
    currentPlayer = playerOne;
  };
},

updateColumnArray1: function(i) {
  if (rowsColumn1.length <= rowMax) {
    rowsColumn1.push(0);
    var rowIndex = $('<div></div>').appendTo( '.column1' );
    rowIndex.addClass('rowIndex');
    rowIndex.attr('data-index', rowsColumn1.length - 1);
    column1Array[rowsColumn1.length - 1] = currentPlayer;
      incrementRowIndex(i);
    };
},

updateColumnArray2: function(i) {
  if (rowsColumn2.length <= rowMax) {
    rowsColumn2.push(0);
    var rowIndex = $('<div></div>').appendTo( '.column2' );
    rowIndex.addClass('rowIndex');
    rowIndex.attr('data-index', rowsColumn2.length - 1);
    column2Array[rowsColumn2.length - 1] = currentPlayer;
      incrementRowIndex(i);
  };
},

updateColumnArray3: function(i) {
  if (rowsColumn3.length <= rowMax) {
    rowsColumn3.push(0);
    var rowIndex = $('<div></div>').appendTo( '.column3' );
    rowIndex.addClass('rowIndex');
    rowIndex.attr('data-index', rowsColumn3.length - 1);
    column3Array[rowsColumn3.length - 1] = currentPlayer;
      incrementRowIndex(i);
  };
},

updateColumnArray4: function(i) {
  if (rowsColumn4.length <= rowMax) {
    rowsColumn4.push(0);
    var rowIndex = $('<div></div>').appendTo( '.column4' );
    rowIndex.addClass('rowIndex');
    rowIndex.attr('data-index', rowsColumn4.length - 1);
    column4Array[rowsColumn4.length - 1] = currentPlayer;
      incrementRowIndex(i);
  };
},

updateColumnArray5: function(i) {
  if (rowsColumn5.length <= rowMax) {
    rowsColumn5.push(0);
    var rowIndex = $('<div></div>').appendTo( '.column5' );
    rowIndex.addClass('rowIndex');
    rowIndex.attr('data-index', rowsColumn5.length - 1);
    column5Array[rowsColumn5.length - 1] = currentPlayer;
      incrementRowIndex(i);
    };
},

updateColumnArray6: function(i) {
  if (rowsColumn6.length <= rowMax) {
    rowsColumn6.push(0);
    var rowIndex = $('<div></div>').appendTo( '.column6' );
    rowIndex.addClass('rowIndex');
    rowIndex.attr('data-index', rowsColumn6.length - 1);
    column6Array[rowsColumn6.length - 1] = currentPlayer;
      incrementRowIndex(i);
  };
},

updateColumnArray7: function(i) {
  if (rowsColumn7.length <= rowMax) {
    rowsColumn7.push(0);
    var rowIndex = $('<div></div>').appendTo( '.column7' );
    rowIndex.addClass('rowIndex');
    rowIndex.attr('data-index', rowsColumn7.length - 1);
    column7Array[rowsColumn7.length - 1] = currentPlayer;
       incrementRowIndex(i);
  };
},

// addTokenToBoard: function(i) {
// },

// win checks
checkVerticalWin: function() {
  for (i = 0; i < yAxis-3; i++) {
    for (j=0; j < xAxis; j++) {
      if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j] && gameBoard[i][j] == board[i+2][j] && gameBoard[i][j] == gameBoard[i+3][j]) {
        return true;
      } else {
        return false;
        }
    }
  }
},

checkHorizontalWin: function() {
  for (i = 0; i < yAxis; i++) {
    for (j=0; j < xAxis-3; j++) {
      if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i][j+1] && gameBoard[i][j] == board[i][j+2] && gameBoard[i][j] == gameBoard[i][j+3]) {
        return true;
      } else {
        return false;
        }
    }
  }
},

checkDiagonalWin1: function () {
  for (i = 0; i < xAxis-3; i++) {
    for (j=0; j < yAxis-3; j++) {
      if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j+1] && gameBoard[i][j] == board[i+2][j+2] && gameBoard[i][j] == gameBoard[i+3][j+3]) {
        return true;
      } else {
        return false;
        }
    }
  }
},

checkDiagonalWin2: function() {
  for (i = 0; i < xAxis-3; i++) {
    for (j=0; j < yAxis-3; j++) {
      if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j-1] && gameBoard[i][j] == board[i+2][j-2] && gameBoard[i][j] == gameBoard[i+3][j-3]) {
        return true;
      } else {
        return false;
        }
    }
  }
},

updateWinner: function() {
  if (checkVerticalWin == true || checkHorizontalWin == true || checkDiagonalWin1 == true || checkDiagonalWin2 == true) {
    return App.winnerDisplay();
  } else {
    return false; //do nothing
  }

},

// Event Handlers
onClickStart: function(event) {
  event.preventDefault();
  console.log('start game');
  UI.changePlayer();
  // if (!App.isPlaying) {
  //   App.startGame();
  // }
}, //onClickStart closure

onClickReset: function() {
  console.log('reset');
  // $('startButton')[0].reset();
  // $('updateColumnDisplay')[0].reset();
  // $('updateWinner') = false;
},
//
onClickInstructions: function() {
  console.log('toggle');
  // $('#inst_button').toggle();
},

onClickColumn1: function() {
  console.log('clicked column1');
  // UI.addTokenToBoard();
  UI.updateColumnArray1();
  UI.changePlayer();
  // if (UI.onClickColumn1.clicked) {
  //  hasBeenClicked1=true; };
  //  return hasBeenClicked1;
},

onClickColumn2: function() {
  console.log('clicked column2');
  // UI.addTokenToBoard();
  UI.updateColumnArray2();
  UI.changePlayer();
},

onClickColumn3: function() {
  console.log('clicked column3');
  // UI.addTokenToBoard();
  UI.updateColumnArray3();
  UI.changePlayer();
},

onClickColumn4: function() {
  console.log('clicked column4');
  // UI.addTokenToBoard();
  UI.updateColumnArray4();
  UI.changePlayer();
},

onClickColumn5: function() {
  console.log('clicked column5');
  // UI.addTokenToBoard();
  UI.updateColumnArray5();
  UI.changePlayer();
},

onClickColumn6: function() {
  console.log('clicked column6');
  // UI.addTokenToBoard();
  UI.updateColumnArray6();
  UI.changePlayer();
},

onClickColumn7: function() {
  console.log('clicked column7');
  // UI.addTokenToBoard();
  UI.updateColumnArray7();
  UI.changePlayer();
},

}; // UI closing

// responsive image mapping
// $(document).ready(function(e) {
//     $('img[usemap]').rwdImageMaps();
// });

//last thing - Initial Event handlers
window.onload = function() {
  $('#inst_button').on('click', UI.onClickInstructions);
  $('#start-button').on('click', UI.onClickStart);
  $('#reset-button').on('click', UI.onClickReset);
  $('.column1').on('click', UI.onClickColumn1);
  $('.column2').on('click', UI.onClickColumn2);
  $('.column3').on('click', UI.onClickColumn3);
  $('.column4').on('click', UI.onClickColumn4);
  $('.column5').on('click', UI.onClickColumn5);
  $('.column6').on('click', UI.onClickColumn6);
  $('.column7').on('click', UI.onClickColumn7);
};
