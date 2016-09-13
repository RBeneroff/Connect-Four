# Unit Spec : `UI`


### `playerOne`
if (player === red) { player = black }
else { player = red }

### `playerTwo`
if (player === black) { player = red }
else { player = red }

### `computerAI` -- REACH

### `updateTurn` - JS code
1. Default starts with playerOne
2. if !playerOne, then playerTwo

### `updateWinner`
1. Return true if any of the check for wins returns a win
2. Otherwise remain false

## Checking for wins

### `checkVerticalWin`
When a player clicks on a column:
1. if tokens of same color === 4; return ###updateWinner true
2. else if (tokens < 4), update the ###updateDataIndex and ###updateColumnArray
3. else if (column === full) { do ###fullColumnCheck}

### `checkHorizontalWin`
When a player clicks on a column:
1. if tokens of same color === 4; return ###updateWinner true
2. else if (tokens < 4), update the ###updateDataIndex and ###updateColumnArray
3. else if (column === full) { do ###fullColumnCheck}

### `checkDiagonalWin` -- split up?
When a player clicks on a column:
1. if tokens of same color === 4; return ###updateWinner true
2. else if (tokens < 4), update the ###updateDataIndex and ###updateColumnArray
3. else if (column === full) { do ###fullColumnCheck}


## Core Functions

### `updateDataIndex`
1. When a column is clicked, update the data-index of that column +1
2. if that column array === 7, do nothing

### `fullColumnCheck`
1. If data-index on a column === 7 && player clicks on that column
return ###warningDisplay

### `updateColumnArray`
1. When a column is clicked, +1 to that column's array
2. If column array === 7, do nothing


## Event handlers

### `onClickStart`
1. If game is not started,
    start game
2. If game has started, do nothing
3. prevents page from reloading

### `onClickReset`
1. clears the game -- ###updateColumnDisplay to empty
2. Updates ###updateTurn and ###whosTurn to default

### `onClickInstructions`
1. When clicked, show instructions to game - makes visible
2. When clicked again, hide instructions - makes invisible

## Animations

### `dropToken`
1. Drop token from arrow above

### `hoverArrow`
1. When mouse is hovering over column, display that htmlArrow
2. When mouse is not over arrow, hide that arrow

### `startAnimation` - REACH
1. When start button is clicked, do some animation 
