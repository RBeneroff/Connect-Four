Linking the arrays and the currentPosition and the checking for win:

1. have an array grid of zeros
2. have currentPosition [i][j] - where i is vertical & j is horizontal
    - use this position to start from when looking for winner
3. when a column is clicked, zero is turned into an R or B
4. when checking for winner - go [i+1][j] (if going vertical)
    - if that coordinate equals B, then next one equals b, and next and next -- return true, else return false (if it is a 0 or an R, return false)
      (but need to figure out how to go from top to bottom)
