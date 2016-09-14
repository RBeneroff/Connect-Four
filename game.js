
var config = {
//   gameBoard: [[0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0]
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0]],
};

var App = {
}; // App closing

// global variables
var row = [];
// var column1Clicked = $('.column1');
function incrementRowIndex(i) {
  row[i]++;
};
var rowMax = 5;

var UI = {
changePlayer: function() {
  if (currentPlayer === 'r') {
    currentPlayer = 'b';
  } else {
    currentPlayer = 'r';
  }
},

updateColumnArray: function(i) {
  // for (var m = 0; m <= 5; m++)
  while (row.length <= rowMax) {
    row.push(0);
    var rowIndex = $('<div></div>').appendTo( '.column1' );
    rowIndex.addClass('rowIndex');
    rowIndex.attr('data-index', row.length - 1);
      incrementRowIndex(i);
    };

  // while (row.length <= rowMax) {
  //   row.push(0);
  //   var rowIndex = $('<div></div>').appendTo( '.column2' );
  //   rowIndex.addClass('rowIndex');
  //   rowIndex.attr('data-index', row.length - 1);
  //     incrementRowIndex(i);
  // };
  //
  // while (row.length <= rowMax) {
  //   row.push(0);
  //   var rowIndex = $('<div></div>').appendTo( '.column3' );
  //   rowIndex.addClass('rowIndex');
  //   rowIndex.attr('data-index', row.length - 1);
  //     incrementRowIndex(i);
  // };
  //
  // while (row.length <= rowMax) {
  //   row.push(0);
  //   var rowIndex = $('<div></div>').appendTo( '.column4' );
  //   rowIndex.addClass('rowIndex');
  //   rowIndex.attr('data-index', row.length - 1);
  //     incrementRowIndex(i);
  // };
  //
  // while (row.length <= rowMax) {
  //   row.push(0);
  //   var rowIndex = $('<div></div>').appendTo( '.column5' );
  //   rowIndex.addClass('rowIndex');
  //   rowIndex.attr('data-index', row.length - 1);
  //     incrementRowIndex(i);
  //   };
  //
  // while (row.length <= rowMax) {
  //   row.push(0);
  //   var rowIndex = $('<div></div>').appendTo( '.column6' );
  //   rowIndex.addClass('rowIndex');
  //   rowIndex.attr('data-index', row.length - 1);
  //     incrementRowIndex(i);
  // };
  //
  // while (row.length <= rowMax) {
  //   row.push(0);
  //   var rowIndex = $('<div></div>').appendTo( '.column7' );
  //   rowIndex.addClass('rowIndex');
  //   rowIndex.attr('data-index', row.length - 1);
  //      incrementRowIndex(i);
  // };

}, //updateColumnArray closure

// win checks
// checkVerticalWin: function() {
//   for (i = 0; i < yAxis-3; i++) {
//     for (j=0; j < xAxis; j++) {
//       if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j] && gameBoard[i][j] == board[i+2][j] && gameBoard[i][j] == gameBoard[i+3][j]) {
//         return true;
//       } else {
//         return false;
//         }
//     }
//   }
// },
//
// checkHorizontalWin: function() {
//   for (i = 0; i < yAxis; i++) {
//     for (j=0; j < xAxis-3; j++) {
//       if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i][j+1] && gameBoard[i][j] == board[i][j+2] && gameBoard[i][j] == gameBoard[i][j+3]) {
//         return true;
//       } else {
//         return false;
//         }
//     }
//   }
// },
//
// checkDiagonalWin1: function () {
//   for (i = 0; i < xAxis-3; i++) {
//     for (j=0; j < yAxis-3; j++) {
//       if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j+1] && gameBoard[i][j] == board[i+2][j+2] && gameBoard[i][j] == gameBoard[i+3][j+3]) {
//         return true;
//       } else {
//         return false;
//         }
//     }
//   }
// },
//
// checkDiagonalWin2: function() {
//   for (i = 0; i < xAxis-3; i++) {
//     for (j=0; j < yAxis-3; j++) {
//       if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j-1] && gameBoard[i][j] == board[i+2][j-2] && gameBoard[i][j] == gameBoard[i+3][j-3]) {
//         return true;
//       } else {
//         return false;
//         }
//     }
//   }
// },
//
// updateWinner: function() {
//   if (checkVerticalWin == true || checkHorizontalWin == true || checkDiagonalWin1 == true || checkDiagonalWin2 == true) {
//     return App.winnerDisplay();
//   } else {
//     return false; //do nothing
//   }
//
// },

// Event Handlers
onClickStart: function(event) {
  event.preventDefault();
  console.log('start game');
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

onClickBoard: function() {
  console.log('clicked column');
  // UI.addTokenToBoard();
  UI.updateColumnArray();
}
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
  $('.column1').on('click', UI.onClickBoard);
  $('.column2').on('click', UI.onClickBoard);
  $('.column3').on('click', UI.onClickBoard);
  $('.column4').on('click', UI.onClickBoard);
  $('.column5').on('click', UI.onClickBoard);
  $('.column6').on('click', UI.onClickBoard);
  $('.column7').on('click', UI.onClickBoard);
};
