# Unit Spec : `UI`

### `axis & settings OR config`

  config:
  // var currentPosition = [i][j],
  // var currentPlayer = ${playerOne} || ${playerTwo},
  // var isWinner: false,
  // var isPlaying: false,
  // var tokens = 0,

  // settings: function() {
  //   xAxis: 7,
  //   yAxis: 6,
  //   tokensToWin: 4,
  //   playerOne: 'r',
  //   playerTwo: 'b'
  // },

  1. Define the x and y axis and how many tokens to declare a win
  var settings = {
    xAxis: 7, (horizontal) j
    yAxis: 6, (vertical) i
    tokensToWin: 4,
    playerOne: 'r',
    playerTwo: 'b'
  };

  figure out to determine value of array - 7 nested array

  var gameBoard = [ [0,0,0,0,0,R,0], row horizontal (x)
                    [0,0,0,0,0,R,0], column vertical (y)
                    [0,0,B,0,0,R,0],
                    [0,0,0,0,0,R,0],
                    [R,B,B,R,B,B,0],
                    [0,0,0,0,0,0,0], ]

                    gameBoard[0][5] = 'r'

### `addTokenToBoard`
  function addTokenToBoard(currentPlayer, xPos, yPos) {
  function addTokenToBoard(currentPlayer, data-index, column#)
  AT data-index at column#, put player's token
  <!-- gameBoard[xPos][yPos] = playerSpot;
  gameBoard[j][i] -- [data-id][] -->
  gameBoard[row][column]
  column doesn't change but row will change
  data-id++ each time same column clicked
  row is data-index-- SAME THING,
  need to now change 0 to r or b
  When column is clicked, add token to column[i][j+1]

  column1 = [0,0,0,0,0,0] --> ['r','b','r', 0, 0, 0]
  column2 = [0,0,0,0,0,0]
  when column 1 is first clicked, change 0 to 'r' then when clicked again change to 'b'

  1. When player clicks column1, next 0 in line (closest) turns to'b'
  2. each column must be a button then

  if (onClickColumn1.clicked && rowsColumn1.length < 5) {
    change that 0 in array to 'r' or 'b'
  }

  splice()
  column1Array.splice(0,0)


  $("#mybutton").click(function(){
    var oldval=$("#mytext").val();
    $("#mytext").val('Changed by button');
    var newval=$("#mytext").val();
    if (newval != oldval) {
      $("#mytext").trigger('change');
    }
  });

  $("onClickColumn1").click(function(){
    var oldval=$(0).val();
    $(0).val(0);
    var newval=$(0).val();
    if (newval != oldval) {
      $(0).trigger('r');
    }
  });

  $(UI.onClickColumn1).click(function(event, column1Array) {

  })
  .trigger("click", ['r']);

  // if($(UI.onClickColumn1).clicked){
    // var newArray1 = column1Array + moveUp;
    // var column1 = document.getElementsByClassName('column1');
    // var moveUp = $(column1[value='data-index']).next();
    //   moveUp++;
    //
    // column1Array.splice(UI.moveUp++,1,currentPlayer);
    // column2Array.splice(UI.rowIndex,1,currentPlayer);
    // column3Array.splice(UI.rowIndex,1,currentPlayer);
    // column4Array.splice(UI.rowIndex,1,currentPlayer);
    // column5Array.splice(UI.rowIndex,1,currentPlayer);
    // column6Array.splice(UI.rowIndex,1,currentPlayer);
    // column7Array.splice(UI.rowIndex,1,currentPlayer);
    // incrementRowIndex(i);

      // return column1Array; - DO NOT NEED (added into updateColumnArray)

### `changePlayer` - DONE
1. update who's turn it is
2. switch back and forth between playerOne and playerTwo

### `computerAI` -- REACH

  <!-- ### `updateTurn` - JS code
  1. Default starts with playerOne
  2. if !playerOne, then playerTwo -->

### `updateWinner`-- DONE
1. Return true if any of the check for wins returns a win
2. Otherwise remain false

## Checking for wins

### `checkVerticalWin` -- check for current player ONLY -

1. check for wins vertically for player that just went

column1Array.string();
function countForWin(str) {
  var c= str.match(r);
  return c.map(function(itm) {
    return[itm.charAt(0), itm.length];
    });
}

currentValue = null;
previousValue = 0;
tally = 0;

for the length of the column (6), count 'r' or 'b' - 3 to check 3 down from spot
  currentValue = [column1Array[index]][column1Array] -->

  for (var x = 0; x <= 6; x++) {
    for (var y = 0; y <= 5; y++) {
      currentValue = column1Array[column1Array[i]][column1Array];
      currentValue = column1Array[index value][column#]
      if (currentValue === previousValue && currentValue !== 0) {
        tally += 1;
      } else {
        tally = 0;
      };
      if (tally === Config.countToWin -1) {
        return true;
      }
      previousValue = currentValue;
    }
    tally = 0;
    previousValue = 0;
  };
    return false;
    console.log('winner!');


  for (i = 0; i < xAxis-3; i++) {
    for (j=0; j < yAxis; j++) {
      if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j] && gameBoard[i][j] == board[i+2][j]) && gameBoard[i][j] == gameBoard[i+3][j])
      return true;
    }
  } else {
    return false;
  }

  if

<!--
function checkVerticalWin(token, column, data-index) {
  if (column[i][index] < axis.xAxis) {
    for (var i = 0; i < axis.xAxis; i++) {
      if ( tokens[black] < 4) {
        tokens[black]++ (updateDataIndex)
        array.push(); (updateColumnArray)
      } else if (tokens === 4) {
        array.push();
        return updateWinner;
      } else if (column[i][index] === 7) {
        return fullColumnCheck;
      }
    }
  }
} -->

### `checkHorizontalWin`
1. check for horizontal wins for specific player

for (i = 0; i < xAxis; i++) {
  for (j=0; j < yAxis-3; j++) {
    if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i][j+1] && gameBoard[i][j] == board[i][j+2]) && gameBoard[i][j] == gameBoard[i][j+3])
    return true;
  }
} else {
  return false;
}

OR

for (var y = 0; y <= 5; y++) {
        for (var x = 0; x <= 6; x++) {
            currentValue = board[y][x];
            if (currentValue === previousValue && currentValue !== 0) {
                tokens += 1;
            } else {
                // Reset the count if you find a gap.
                tokens = 0;
            }
            if (tokens === 4) {
                return true;
            }
            previousValue = currentValue;
        }

        // After each row, reset the tokens and previous value.
        tokens = 0;
        previousValue = 0;
    }

    // No horizontal win was found.
    return false;
}

### `checkDiagonalWin`
1. check for diagonal wins for specific player

check right diagonal:
for (i = 0; i < xAxis-3; i++) {
  for (j=0; j < yAxis-3; j++) {
    if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j+1] && gameBoard[i][j] == board[i+2][j+2]) && gameBoard[i][j] == gameBoard[i+3][j+3])
    return true;
  }
} else {
  return false;
}

check left diagonal:
for (i = 0; i < xAxis-3; i++) {
  for (j=0; j < yAxis-3; j++) {
    if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j-1] && gameBoard[i][j] == board[i+2][j-2]) && gameBoard[i][j] == gameBoard[i+3][j-3])
    return true;
  }
} else {
  return false;
}


## Core Functions

<!-- ### `updateDataIndex`
1. When a column is clicked, update the data-index of that column +1
2. if that column array === 7, do nothing
tokens = tokens + 1; -->

### `fullColumnCheck` -- DONE in updateColumnDisplays
1. If data-index on a column === 7 && player clicks on that column
return ###warningDisplay

### `updateColumnArray` -- DONE
1. When a column is clicked, +1 to that column's data-index
2. When column index = 5, do nothing
column doesn't change but row will change
data-id++ each time same column clicked
row is data-index-- SAME THING,
need to now change 0 to r or b


## Event handlers

### `onClickStart` - DONE
1. If game is not started,
    start game
2. If game has started, do nothing
3. prevents page from reloading


### `onClickReset` - DONE
1. clears the game -- ###updateColumnDisplay to empty
2. Updates ###updateTurn and ###whosTurn to default

### `onClickInstructions` - DONE
1. When clicked, show instructions to game - makes visible
2. When clicked again, hide instructions - makes invisible

# seven column buttons - DONE
### `column1Button`
1. When column1 is clicked, ###addTokenToBoard at column
2. gameBoard array updates
### `column2Button`
### `column3Button`
### `column4Button`
### `column5Button`
### `column6Button`
### `column7Button`

## Animations

### `dropToken`
1. Drop token from arrow above

### `hoverArrow`
1. When mouse is hovering over column, display that htmlArrow
2. When mouse is not over arrow, hide that arrow

### `startAnimation` - REACH
1. When start button is clicked, do some animation
