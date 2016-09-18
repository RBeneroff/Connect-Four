# Unit Spec : `UI`

### `Config` - DONE
1. holds any variables that are needed for the configuration of the site (startingPlayer, countToWin)

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

### `checkVerticalWin` -- DONE
1. check for wins vertically for player that just went


### `checkHorizontalWin` - DONE
1. check for horizontal wins for specific player

### `checkDiagonalWin` - REACH
1. check for diagonal wins for specific player

tokenRed = `tokenR`+column1Array + rowsColumn1

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

// for (i = 0; i < xAxis-3; i++) {
//   for (j=0; j < yAxis-3; j++) {
//     if (gameBoard[i][j] != 0 && gameBoard[i][j] == board[i+1][j-1] && gameBoard[i][j] == board[i+2][j-2] && gameBoard[i][j] == gameBoard[i+3][j-3]) {
//       return true;
//     } else {
//       return false;
//       }
//   }
// }

## Core Functions

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
