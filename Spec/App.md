# Unit Spec : `App` / `Display`


### `updateColumnDisplay`
1. Displays the tokens in each column
2. When player clicks column, display is updated and new token is shown
3. If column is full - do nothing

### `startGame`
1. If the game has started - do nothing when button is clicked
2. If game has not started - start game and change ###whosTurn display to playerOne

### `htmlArrows`
1. have one arrow above each column
2. display: hidden until ###hoverArrow is used

### `restart`
1. When Reset Button is clicked (###onClickReset), update display (###updateColumnDisplay) to a blank board
2. Update ###updateTurn to default playerOne's turn
3. Update ###whosTurn to default view

### `whosTurn` - Display toggle
1. Default display: 'Ready?' (or whatever saying is)
2. When startButton is clicked, toggle to playerOne display
3. One playerOne goes, update toggle to playerTwo display
POSSIBLY USE A SWITCH STATEMENT

### `winnerDisplay`
1. When ###updateWinner returns true, show winnerDisplay with player who won  
2. If nobody has won, remain hidden

### `warningDisplay`
1. If ###fullColumnCheck returns true, update warningDisplay to show the warning
2. If ###fullColumnCheck is false, do nothing and hide display

## Image Mapping

### `imageMap`
sprite of game board
width: 1857.92px;
height: 1461.94px;
placement on sprite page:
top: -946.25px;
left: -640px;
zoom: .4

<img src="url/to/your/image.jpg" alt="" usemap="#Map" />
<map name="Map" id="Map">
    <area alt="" title="" href="#" shape="poly" coords="top left, bottom right" />  --> x,y,x,y
    [...]
</map>

### `AreaColumn1`
area shape of column 1
coordinates: 797.07, 997.4, 978.37, 2148.6

### `AreaColumn2`
area shape of column 2
coordinates:978.37, 997.4, 1142.92, 2148.96

### `AreaColumn3`
area shape of column 3
coordinates: 1142.92, 997.4, 1320.24, 2148.96

### `AreaColumn4`
area shape of column 4
coordinates: 1320.24, 997.4, 1484.79, 2148.96

### `AreaColumn5`
area shape of column 5
coordinates: 1484.79, 997.4, 1655.97, 2148.96

### `AreaColumn6`
area shape of column 6
coordinates: 1655.97, 997.4, 1829.33, 2148.96

### `AreaColumn7`
area shape of column 7
coordinates: 1829.33, 997.4, 2006.33, 2148.96
