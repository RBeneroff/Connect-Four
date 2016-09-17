
var Config = {
  startingPlayer: 'r',
  countToWin: 4,
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
    swal({   title: "Sweet",   text: "You Won!",   imageUrl: "./images:font/winning.png" });
  },

  addTokensToBoard1: function(i) {
    // if (column1Array.length <= 6) {
      if (currentPlayer === 'b' && i === 1) {
          $('#tokenR1-1').show();
      } else if (currentPlayer === 'r' && i === 1) {
          $('#tokenB1-1').show();
      };

      if (currentPlayer === 'b' && i === 2) {
          $('#tokenR1-2').show();
      } else if (currentPlayer === 'r' && i === 2) {
          $('#tokenB1-2').show();
      };

      if (currentPlayer === 'b' && i === 3) {
          $('#tokenR1-3').show();
      } else if (currentPlayer === 'r' && i === 3) {
          $('#tokenB1-3').show();
      };

      if (currentPlayer === 'b' && i === 4) {
          $('#tokenR1-4').show();
      } else if (currentPlayer === 'r' && i === 4) {
          $('#tokenB1-4').show();
      };

      if (currentPlayer === 'b' && i === 5) {
          $('#tokenR1-5').show();
      } else if (currentPlayer === 'r' && i === 5) {
          $('#tokenB1-5').show();
      };

      if (currentPlayer === 'b' && i === 6) {
          $('#tokenR1-6').show();
      } else if (currentPlayer === 'r' && i === 6) {
          $('#tokenB1-6').show();
      };
    // }
  }, //addTokensToBoard1 closure

  addTokensToBoard2: function(i) {
    // if (column2Array.length <= 6) {
      if (currentPlayer === 'b' && i === 1) {
        $('#tokenR2-1').show();
      } else if (currentPlayer === 'r' && i === 1) {
        $('#tokenB2-1').show();
        };

      if (currentPlayer === 'b' && i === 2) {
        $('#tokenR2-2').show();
       } else if (currentPlayer === 'r' && i === 2) {
        $('#tokenB2-2').show();
      };

      if (currentPlayer === 'b' && i === 3) {
        $('#tokenR2-3').show();
      } else if (currentPlayer === 'r' && i === 3) {
        $('#tokenB2-3').show();
      };

      if (currentPlayer === 'b' && i === 4) {
        $('#tokenR2-4').show();
      } else if (currentPlayer === 'r' && i === 4) {
        $('#tokenB2-4').show();
      };

      if (currentPlayer === 'b' && i === 5) {
        $('#tokenR2-5').show();
      } else if (currentPlayer === 'r' && i === 5) {
        $('#tokenB2-5').show();
      };

      if (currentPlayer === 'b' && i === 6) {
        $('#tokenR2-6').show();
      } else if (currentPlayer === 'r' && i === 6) {
        $('#tokenB2-6').show();
      };
    // }
  },

  addTokensToBoard3: function(i) {

    if (currentPlayer === 'b' && i === 1) {
      $('#tokenR3-1').show();
    } else if (currentPlayer === 'r' && i === 1) {
      $('#tokenB3-1').show();
      };


    if (currentPlayer === 'b' && i === 2) {
      $('#tokenR3-2').show();
     } else if (currentPlayer === 'r' && i === 2) {
      $('#tokenB3-2').show();
    };

    if (currentPlayer === 'b' && i === 3) {
      $('#tokenR3-3').show();
    } else if (currentPlayer === 'r' && i === 3) {
      $('#tokenB3-3').show();
    };

    if (currentPlayer === 'b' && i === 4) {
      $('#tokenR3-4').show();
    } else if (currentPlayer === 'r' && i === 4) {
      $('#tokenB3-4').show();
    };

    if (currentPlayer === 'b' && i === 5) {
      $('#tokenR3-5').show();
    } else if (currentPlayer === 'r' && i === 5) {
      $('#tokenB3-5').show();
    };

    if (currentPlayer === 'b' && i === 6) {
      $('#tokenR3-6').show();
    } else if (currentPlayer === 'r' && i === 6) {
      $('#tokenB3-6').show();
    };


  },

  addTokensToBoard4: function(i) {

      if (currentPlayer === 'b' && i === 1) {
        $('#tokenR4-1').show();
      } else if (currentPlayer === 'r' && i === 1) {
        $('#tokenB4-1').show();
        };

      if (currentPlayer === 'b' && i === 2) {
        $('#tokenR4-2').show();
       } else if (currentPlayer === 'r' && i === 2) {
        $('#tokenB4-2').show();
      };

      if (currentPlayer === 'b' && i === 3) {
        $('#tokenR4-3').show();
      } else if (currentPlayer === 'r' && i === 3) {
        $('#tokenB4-3').show();
      };

      if (currentPlayer === 'b' && i === 4) {
        $('#tokenR4-4').show();
      } else if (currentPlayer === 'r' && i === 4) {
        $('#tokenB4-4').show();
      };

      if (currentPlayer === 'b' && i === 5) {
        $('#tokenR4-5').show();
      } else if (currentPlayer === 'r' && i === 5) {
        $('#tokenB4-5').show();
      };

      if (currentPlayer === 'b' && i === 6) {
        $('#tokenR4-6').show();
      } else if (currentPlayer === 'r' && i === 6) {
        $('#tokenB4-6').show();
      };


  },

  addTokensToBoard5: function(i) {
    if (currentPlayer === 'b' && i === 1) {
      $('#tokenR5-1').show();
    } else if (currentPlayer === 'r' && i === 1) {
      $('#tokenB5-1').show();
      };

    if (currentPlayer === 'b' && i === 2) {
      $('#tokenR5-2').show();
     } else if (currentPlayer === 'r' && i === 2) {
      $('#tokenB5-2').show();
    };

    if (currentPlayer === 'b' && i === 3) {
      $('#tokenR5-3').show();
    } else if (currentPlayer === 'r' && i === 3) {
      $('#tokenB5-3').show();
    };

    if (currentPlayer === 'b' && i === 4) {
      $('#tokenR5-4').show();
    } else if (currentPlayer === 'r' && i === 4) {
      $('#tokenB5-4').show();
    };

    if (currentPlayer === 'b' && i === 5) {
      $('#tokenR5-5').show();
    } else if (currentPlayer === 'r' && i === 5) {
      $('#tokenB5-5').show();
    };

    if (currentPlayer === 'b' && i === 6) {
      $('#tokenR5-6').show();
    } else if (currentPlayer === 'r' && i === 6) {
      $('#tokenB5-6').show();
    };

  },

  addTokensToBoard6: function(i) {
    if (currentPlayer === 'b' && i === 1) {
      $('#tokenR6-1').show();
    } else if (currentPlayer === 'r' && i === 1) {
      $('#tokenB6-1').show();
      };

    if (currentPlayer === 'b' && i === 2) {
      $('#tokenR6-2').show();
     } else if (currentPlayer === 'r' && i === 2) {
      $('#tokenB6-2').show();
    };

    if (currentPlayer === 'b' && i === 3) {
      $('#tokenR6-3').show();
    } else if (currentPlayer === 'r' && i === 3) {
      $('#tokenB6-3').show();
    };

    if (currentPlayer === 'b' && i === 4) {
      $('#tokenR6-4').show();
    } else if (currentPlayer === 'r' && i === 4) {
      $('#tokenB6-4').show();
    };

    if (currentPlayer === 'b' && i === 5) {
      $('#tokenR6-5').show();
    } else if (currentPlayer === 'r' && i === 5) {
      $('#tokenB6-5').show();
    };

    if (currentPlayer === 'b' && i === 6) {
      $('#tokenR6-6').show();
    } else if (currentPlayer === 'r' && i === 6) {
      $('#tokenB6-6').show();
    };

  },

  addTokensToBoard7: function(i) {
    if (currentPlayer === 'b' && i === 1) {
      $('#tokenR7-1').show();
    } else if (currentPlayer === 'r' && i === 1) {
      $('#tokenB7-1').show();
      };

    if (currentPlayer === 'b' && i === 2) {
      $('#tokenR7-2').show();
     } else if (currentPlayer === 'r' && i === 2) {
      $('#tokenB7-2').show();
    };

    if (currentPlayer === 'b' && i === 3) {
      $('#tokenR7-3').show();
    } else if (currentPlayer === 'r' && i === 3) {
      $('#tokenB7-3').show();
    };

    if (currentPlayer === 'b' && i === 4) {
      $('#tokenR7-4').show();
    } else if (currentPlayer === 'r' && i === 4) {
      $('#tokenB7-4').show();
    };

    if (currentPlayer === 'b' && i === 5) {
      $('#tokenR7-5').show();
    } else if (currentPlayer === 'r' && i === 5) {
      $('#tokenB7-5').show();
    };

    if (currentPlayer === 'b' && i === 6) {
      $('#tokenR7-6').show();
    } else if (currentPlayer === 'r' && i === 6) {
      $('#tokenB7-6').show();
    };

  },

  warningDisplay: function() {
    if (rowsColumn1.length === 6) {
      $('.fullColumnImg').show().delay(2000).fadeOut().stop();
    } else {
      $('.fullColumnImg').hide()
    }
    if (rowsColumn2.length === 6) {
      $('.fullColumnImg').show().delay(2000).fadeOut().hide(0);
    };
    if (rowsColumn3.length === 6) {
      $('.fullColumnImg').show().delay(2000).fadeOut().hide(0);
    };
    if (rowsColumn4.length === 6) {
      $('.fullColumnImg').show().delay(2000).fadeOut().hide(0);
    };
    if (rowsColumn6.length === 6) {
      $('.fullColumnImg').show().delay(2000).fadeOut().hide(0);
    };
    if (rowsColumn7.length === 6) {
      $('.fullColumnImg').show().delay(2000).fadeOut().hide(0);
    };
    if (rowsColumn5.length === 6) {
      $('.fullColumnImg').show().delay(2000).fadeOut().hide(0);
    };
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
// var tally = 0;
var tally = ($('.column1').data('clicks') || 0);


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

  },

  checkHorizontalWin: function(i) {
    var count = 1;

      if (column1Array[i] !== undefined) {
        if (column1Array[i] === column2Array[i] ) {
          ++count;
        } else {
          count = 1;
        }
      }

    if (column2Array[i] !== undefined)  {
      if (column2Array[i] === column3Array[i]) {
        ++count;
      } else {
        count = 1;
      }
    }

    if (column3Array[i] !== undefined) {
      if(column3Array[i] === column4Array[i]) {
        ++count;
      } else {
        count = 1;
      }
    }
    if (count < 4 ) {
      if (column4Array[i] !== undefined) {
        if (column4Array[i] === column5Array[i]) {
          ++count;
        } else {
          count = 1;
        }
      }
    }

    if (count < 4 ) {
      if (column5Array[i] !== undefined) {
        if(column5Array[i] === column6Array[i]) {
          ++count;
        } else {
          count = 1;
        }
      }
    }

    if (count < 4 ) {
      if (column6Array[i] !== undefined) {
        if(column6Array[i] === column7Array[i]) {
          ++count;
        } else {
          count = 1;
        }
      }
    }
    if (count === Config.countToWin) {
      App.winnerDisplay();
      console.log('winning horizontally');
      }
  }, //check horiztonal win closure

  checkDiagonalWin1: function () {
  },

  checkDiagonalWin2: function() {
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
    swal({   title: "Ready?",   text: "",   imageUrl: "./images:font/taco.png" });
    UI.changePlayer();
  }, //onClickStart closure

  onClickReset: function() {
    console.log('reset');
    column1Array.length = [];
    column2Array.length = [];
    column3Array.length = [];
    column4Array.length = [];
    column5Array.length = [];
    column6Array.length = [];
    column7Array.length = [];
    $('.rowIndex').remove();
    currentPlayer === Config.startingPlayer;
    count = 1;
    // $('#tokenR1').hide();
  },

  onClickInstructions: function() {
    console.log('instructions');
    swal({   title: "Don't know how to play?",   text: "Bascically, get four of your tokens in a row before your opponent does.",   imageUrl: "./images:font/inst.png" });
  },

  onClickColumn1: function() {
    console.log('clicked column1');
    if (column1Array.length === 5) {
      $('.column1').off('click');
    };
    UI.updateColumnArray1();
    UI.changePlayer();
    UI.checkVerticalWin();
    UI.checkHorizontalWin(column1Array.length-1);
    App.addTokensToBoard1(column1Array.length);
    App.warningDisplay();
  },

  onClickColumn2: function() {
    console.log('clicked column2');
    if (column2Array.length === 5) {
      $('.column2').off('click');
    };
      UI.updateColumnArray2();
      UI.changePlayer();
      UI.checkVerticalWin();
      UI.checkHorizontalWin(column2Array.length-1);
      App.addTokensToBoard2(column2Array.length);
      App.warningDisplay();
  },

  onClickColumn3: function() {
    console.log('clicked column3');
    if (column3Array.length === 5) {
      $('.column3').off('click');
    };
    UI.updateColumnArray3();
    UI.changePlayer();
    UI.checkVerticalWin();
    UI.checkHorizontalWin(column3Array.length-1);
    App.addTokensToBoard3(column3Array.length);
    App.warningDisplay();
  },

  onClickColumn4: function() {
    console.log('clicked column4');
    if (column4Array.length === 5) {
      $('.column4').off('click');
    };
    UI.updateColumnArray4();
    UI.changePlayer();
    UI.checkVerticalWin();
    UI.checkHorizontalWin(column4Array.length-1);
    App.addTokensToBoard4(column4Array.length);
    App.warningDisplay();
  },

  onClickColumn5: function() {
    console.log('clicked column5');
    if (column5Array.length === 5) {
      $('.column5').off('click');
    };
    UI.updateColumnArray5();
    UI.changePlayer();
    UI.checkVerticalWin();
    UI.checkHorizontalWin(column5Array.length-1);
    App.addTokensToBoard5(column5Array.length);
    App.warningDisplay();
  },

  onClickColumn6: function() {
    console.log('clicked column6');
    if (column6Array.length === 5) {
      $('.column6').off('click');
    };
    UI.updateColumnArray6();
    UI.changePlayer();
    UI.checkVerticalWin();
    UI.checkHorizontalWin(column6Array.length-1);
    App.addTokensToBoard6(column6Array.length);
    App.warningDisplay();
  },

  onClickColumn7: function() {
    console.log('clicked column7');
    if (column7Array.length === 5) {
      $('.column7').off('click');
    };
    UI.updateColumnArray7();
    UI.changePlayer();
    UI.checkVerticalWin();
    UI.checkHorizontalWin(column7Array.length-1);
    App.addTokensToBoard7(column7Array.length);
    App.warningDisplay();
  },

}; // UI closing

// responsive image mapping
$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});

//last thing - Initial Event handlers
window.onload = function() {
  $('img[usemap]').rwdImageMaps();
  $('.instButton').on('click', UI.onClickInstructions);
  $('.startButton').on('click', UI.onClickStart);
  $('.resetButton').on('click', UI.onClickReset);
  $('.column1').on('click', UI.onClickColumn1);
  $('.column2').on('click', UI.onClickColumn2);
  $('.column3').on('click', UI.onClickColumn3);
  $('.column4').on('click', UI.onClickColumn4);
  $('.column5').on('click', UI.onClickColumn5);
  $('.column6').on('click', UI.onClickColumn6);
  $('.column7').on('click', UI.onClickColumn7);
  // $('[item=column1token]').on('click', App.addTokensToBoard);
};
