# Unit Spec : `UI`


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

### `axis & settings`
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
function addTokenToBoard(playerSpot,xPos, yPos) {
  <!-- gameBoard[xPos][yPos] = playerSpot;
  gameBoard[j][i] -- [data-id][] -->
  gameBoard[row][column]
  column doesn't change but row will change
  data-id++ each time same column clicked
  row is data-index-- SAME THING,
  need to now change 0 to r or b
}

1. When player clicks column1, next 0 in line (closest) turns to'b'
2. each column must be a button then

### `changePlayer` - DONE
if (currentPlayer === red) {
  currentPlayer = black
} else {
  currentPlayer = red
}

var currentPlayer = ${playerOne} or ${playerTwo}

### `computerAI` -- REACH

<!-- ### `updateTurn` - JS code
1. Default starts with playerOne
2. if !playerOne, then playerTwo -->

### `updateWinner`
1. Return true if any of the check for wins returns a win
2. Otherwise remain false

## Checking for wins

### `checkVerticalWin` -- check for current player ONLY

1. check for wins vertically for player that just went

  for (i = 0; i < xAxis-3; i++) {
    for (j=0; j < yAxis; j++) {
      if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j] && gameBoard[i][j] == board[i+2][j]) && gameBoard[i][j] == gameBoard[i+3][j])
      return true;
    }
  } else {
    return false;
  }

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

### `fullColumnCheck`
1. If data-index on a column === 7 && player clicks on that column
return ###warningDisplay

<!-- ### `updateColumnArray` -- update Board
1. When a column is clicked, +1 to that column's array
2. If column array === 7, do nothing
When column is clicked, add token to column[i][j+1]

  while (board[i][index] !== 7) {
    if (board[i][index] < 7) {
      add to array
      board[i].push();
    }
  }

for (var y = 0; y <= 5; y++) {
  for (var x = 0; x <= 6; x++) {
    if (gameBoard[y][x] !== 0) {
      var spot = $('')
    }
  }
} -->


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

# seven column buttons
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
