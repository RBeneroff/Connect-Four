var App = {
// game variables
// var gameBoard = [ [0,0,0,0,0,0,0],
//                     [0,0,0,0,0,0,0],
//                     [0,0,0,0,0,0,0],
//                     [0,0,0,0,0,0,0],
//                     [0,0,0,0,0,0,0],
//                     [0,0,0,0,0,0,0], ],
//
//   var currentPosition = [i][j],
//   var currentPlayer = ${playerOne} || ${playerTwo},
//   var isWinner: false,
//   var isPlaying: false,
//   var tokens = 0,



}; // App closing

var UI = {

// settings: function() {
//   xAxis: 7,
//   yAxis: 6,
//   tokensToWin: 4,
//   playerOne: 'r',
//   playerTwo: 'b'
// },

changePlayer: function() {
  if (currentPlayer === 'red') {
    currentPlayer = 'black';
  } else {
    currentPlayer = red;
  }
},


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
};
