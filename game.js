var App = {
//game variables
  var gameBoard = [ [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0], ]

  var currentPosition = [i][j];
  var currentPlayer = ${playerOne} || ${playerTwo}
  isWinner: false,
  isPlaying: false,
  tokens = 0;



}; // App closing

Var UI = {

settings: function() {
  xAxis: 7,
  yAxis: 6,
  tokensToWin: 4,
  playerOne: 'black',
  playerTwo: 'red'
};

changePlayer: function() {
  if (currentPlayer === 'red') {
    currentPlayer = 'black';
  } else {
    currentPlayer = red;
  }
},

// Event Handlers
onClickStart: function() {
  event.preventDefault();
  if (!App.isPlaying) {
    App.startGame();
  }
}, //onClickStart closure

onClickReset: function() {
  $('startButton')[0].reset();
  $('updateColumnDisplay')[0].reset();
  $('updateWinner') = false;
},

onClickInstructions: function() {
  $('#instructions').toggle();
};
}; // UI closing

//last thing - Initial Event handlers
window.onload = function() {
  $('#instructions').on('click', UI.onClickInstructions);
  $('startButton').on('click', UI.onClickStart);
  $('resetButton').on('click', UI.onClickReset);
};
