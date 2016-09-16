Linking the arrays and the currentPosition and the checking for win:

1. have an array grid of zeros
2. have currentPosition [row][column] - where i is vertical & j is horizontal
    - use this position to start from when looking for winner
3. when a column is clicked, zero is turned into an R or B
4. when checking for winner - go [row+1][column] (if going vertical)
    - if that coordinate equals B, then next one equals b, and next and next -- return true, else return false (if it is a 0 or an R, return false)
      (but need to figure out how to go from top to bottom)


if column[5] clicked --> data-index goes up by 1 (that is the row value)
so when column is clicked `updateColumnArray` goes up by one
App.rowId = App.newRowId++;

rowIndex = 0; -- should be the column's data index
var column1Clicked = $('.column1');


updateColumnArray: function() {
  for (when rowIndex <= 6) { -----> (var i = 0; i <= 6; i++ )
    if (.column1 is clicked) { -----> (column1Clicked.clicked == true)
      rowIndex++;
    } else {
      do nothing if rowIndex is === 6
    }
  }
}


every time a column is clicked, you want to create a div which is the row with a data index
