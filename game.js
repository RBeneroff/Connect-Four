
var Config = {
  startingPlayer: 'r',
  countToWin: 4,
  // winner: 0,
}; //config closing

var App = {

hoverArrow: function() {
  if($('#map')) {
    $('.column1 area').each(function() {
      var id= $(this).attr('id');
      $(this).mouseover(function(e) {
        $('.arrow1'+id).show();
      });
      $(this).mouseout(function() {
        var id = $(this).attr('id');
        $('.arrow1'+id).hide();
      });
    });
  };
},

winnerDisplay: function() {
  UI.checkVerticalWin;
  UI.checkHorizontalWin;
  // window.alert('You Win ' + currentPlayer);
  swal({   title: "Sweet!",   text: "You Won!",   imageUrl: "winning.png" });
},

};// App closing

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
column1Array = [];
column2Array = [];
column3Array = [];
column4Array = [];
column5Array = [];
column6Array = [];
column7Array = [];
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

// win checks
checkVerticalWin: function() {

  if (column1Array.length > 3) {
    var winnerCheck = column1Array[column1Array.length -1];
    if (column1Array[column1Array.length -2] === winnerCheck &&    column1Array[column1Array.length -3] === winnerCheck && column1Array[column1Array.length - 4] === winnerCheck) {
      App.winnerDisplay();
      console.log('winner column1');
     }
  };

  if (column2Array.length > 3) {
    var winnerCheck = column2Array[column2Array.length -1];
    if (column2Array[column2Array.length -2] === winnerCheck &&    column2Array[column2Array.length -3] === winnerCheck && column2Array[column2Array.length - 4] === winnerCheck) {
      App.winnerDisplay();
      console.log('winner column2');
     }
  };

  if (column3Array.length > 3) {
    var winnerCheck = column3Array[column3Array.length -1];
    if (column3Array[column3Array.length -2] === winnerCheck &&    column3Array[column3Array.length -3] === winnerCheck && column3Array[column3Array.length - 4] === winnerCheck) {
      App.winnerDisplay();
      console.log('winner column3');
     }
  };

  if (column4Array.length > 3) {
    var winnerCheck = column4Array[column4Array.length -1];
    if (column4Array[column4Array.length -2] === winnerCheck &&    column4Array[column4Array.length -3] === winnerCheck && column4Array[column4Array.length - 4] === winnerCheck) {
      App.winnerDisplay();
      console.log('winner column4');
     }
  };

  if (column5Array.length > 3) {
    var winnerCheck = column5Array[column5Array.length -1];
    if (column5Array[column5Array.length -2] === winnerCheck &&    column5Array[column5Array.length -3] === winnerCheck && column5Array[column5Array.length - 4] === winnerCheck) {
      App.winnerDisplay();
      console.log('winner column5');
     }
  };

  if (column6Array.length > 3) {
    var winnerCheck = column6Array[column6Array.length -1];
    if (column6Array[column6Array.length -2] === winnerCheck &&    column6Array[column6Array.length -3] === winnerCheck && column6Array[column6Array.length - 4] === winnerCheck) {
      App.winnerDisplay();
      console.log('winner column6');
     }
  };

  if (column7Array.length > 3) {
    var winnerCheck = column7Array[column7Array.length -1];
    if (column7Array[column7Array.length -2] === winnerCheck &&    column7Array[column7Array.length -3] === winnerCheck && column7Array[column7Array.length - 4] === winnerCheck) {
      App.winnerDisplay();
      console.log('winner column7');
     }
  };
    // var w = column1.attr('data-index');
    // if (column1Array[5] === column1Array[4] && column1Array[5] === column1Array[3] && column1Array[5] === column1Array[2]) {
    //   console.log('winner!');
    //   // Config.winner++;
    // } else {
    //   console.log('loser');
    // }
    // return true;
    // else {
    //   Config.winner = 0;
    // }
    // if (Config.winner === Config.countToWin) {
    //   App.winnerDisplay();
    // }
  // }

  // counter = 0;
  // for (var i = 0; i < rowIndex.length; i++) {
  //   if (column1Array[0] === column1Array[1] === column1Array[2] === column1Array[3] === column1Array[4] === column1Array[5]) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } console.log('winner!');

  // if currentValue = previousValue add 1... until 4, if not, stop
  // if (counter = countToWin) {
  //   return true;
  // } else {
  //   return false;
  // }

  // for (i = 0; i < rowsColumn1.length - 3) {
  //   if column1Array[]
  // }

  // for (i = 0; i < yAxis-3; i++) {
  //   for (j=0; j < xAxis; j++) {
  //     if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j] && gameBoard[i][j] == board[i+2][j] && gameBoard[i][j] == gameBoard[i+3][j]) {
  //       return true;
  //     } else {
  //       return false;
  //       }
  //   }
  // } console.log('Vertical winner!');
},

checkHorizontalWin: function() {

  if (rowsColumn1.length > 3) {
    var winnerCheck = rowsColumn1.attr('data-index');
    if (rowsColumn1[rowsColumn1.length] === rowsColumn2[rowsColumn2.length] === rowsColumn3[rowsColumn3.length] === rowsColumn4[rowsColumn4.length]) {
      App.winnerDisplay();
      console.log('winner');
    }
  }

     //
    //   winnerCheck &&    rowsColumn1[rowsColumn1.length -3] === winnerCheck && rowsColumn1[rowsColumn1.length - 4] === winnerCheck) {
    //   App.winnerDisplay();
    //   console.log('winner');
    //  }
  // };


  // for (i = 0; i < yAxis; i++) {
  //   for (j=0; j < xAxis-3; j++) {
  //     if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i][j+1] && gameBoard[i][j] == board[i][j+2] && gameBoard[i][j] == gameBoard[i][j+3]) {
  //       return true;
  //     } else {
  //       return false;
  //       }
  //   }
  // }
},

checkDiagonalWin1: function () {
  //   for (i = 0; i < xAxis-3; i++) {
  //     for (j=0; j < yAxis-3; j++) {
  //       if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j+1] && gameBoard[i][j] == board[i+2][j+2] && gameBoard[i][j] == gameBoard[i+3][j+3]) {
  //         return true;
  //       } else {
  //         return false;
  //         }
  //     }
  //   }
},

checkDiagonalWin2: function() {
  // for (i = 0; i < xAxis-3; i++) {
  //   for (j=0; j < yAxis-3; j++) {
  //     if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j-1] && gameBoard[i][j] == board[i+2][j-2] && gameBoard[i][j] == gameBoard[i+3][j-3]) {
  //       return true;
  //     } else {
  //       return false;
  //       }
  //   }
  // }
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
  column1Array.length = [];
  column2Array.length = 0;
  column3Array.length = 0;
  column4Array.length = 0;
  column5Array.length = 0;
  column6Array.length = 0;
  column7Array.length = 0;
  $('.rowIndex').remove();
  currentPlayer === Config.startingPlayer;
  console.log('reset');

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
  UI.checkVerticalWin();
  // UI.checkHorizontalWin();
},

onClickColumn2: function() {
  console.log('clicked column2');
  // UI.addTokenToBoard();
  UI.updateColumnArray2();
  UI.changePlayer();
  UI.checkVerticalWin();
},

onClickColumn3: function() {
  console.log('clicked column3');
  // UI.addTokenToBoard();
  UI.updateColumnArray3();
  UI.changePlayer();
  UI.checkVerticalWin();
},

onClickColumn4: function() {
  console.log('clicked column4');
  // UI.addTokenToBoard();
  UI.updateColumnArray4();
  UI.changePlayer();
  UI.checkVerticalWin();
},

onClickColumn5: function() {
  console.log('clicked column5');
  // UI.addTokenToBoard();
  UI.updateColumnArray5();
  UI.changePlayer();
  UI.checkVerticalWin();
},

onClickColumn6: function() {
  console.log('clicked column6');
  // UI.addTokenToBoard();
  UI.updateColumnArray6();
  UI.changePlayer();
  UI.checkVerticalWin();
},

onClickColumn7: function() {
  console.log('clicked column7');
  // UI.addTokenToBoard();
  UI.updateColumnArray7();
  UI.changePlayer();
  UI.checkVerticalWin();
},

}; // UI closing

// responsive image mapping
// $(document).ready(function(e) {
//     $('img[usemap]').rwdImageMaps();
// });

//last thing - Initial Event handlers
window.onload = function() {
  $('img[usemap]').rwdImageMaps();
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
