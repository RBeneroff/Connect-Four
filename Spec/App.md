# Unit Spec : `App` / `Display`

### `addTokensToBoard` - DONE
1. Displays the tokens in each column
2. When player clicks column, display is updated and new token is shown
3. If column is full - do nothing

### `htmlArrows`
1. have one arrow above each column
2. display: hidden until ###hoverArrow is used

  if($('#map')) {
    $('.column1').each(function() {
      var id= $(this).attr('id');
      $(this).mouseover(function() {
        $('.arrow1'+id).show();
      });
      $(this).mouseout(function() {
        var id = $(this).attr('id');
        $('.arrow1'+id).hide();
      });
    });
  };

### `restart` - DONE once board clears of showing tokens
1. When Reset Button is clicked (###onClickReset), update display (###updateColumnDisplay) to a blank board
2. Update ###updateTurn to default playerOne's turn
3. Update ###whosTurn to default view

### `whosTurn` - REACH
1. Default display: 'Ready?' (or whatever saying is)
2. When startButton is clicked, toggle to playerOne display
3. One playerOne goes, update toggle to playerTwo display
POSSIBLY USE A SWITCH STATEMENT

### `winnerDisplay` - DONE
1. When ###updateWinner returns true, show winnerDisplay with player who won  
2. If nobody has won, remain hidden

### `warningDisplay` - DONE (need to fix bug)
1. If ###fullColumnCheck returns true, update warningDisplay to show the warning
2. If ###fullColumnCheck is false, do nothing and hide display
3. If board is completely full, call a tie

### `turnDisplay` - DONE
1. Show whos turn it is

## Animations

### `dropToken`
1. Drop token from arrow above

### `hoverArrow`
1. When mouse is hovering over column, display that htmlArrow
2. When mouse is not over arrow, hide that arrow

### `startAnimation` - REACH
1. When start button is clicked, do some animation

## Image Mapping - DONE in HTML

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

### Pseudo-Code:

- image maps
- css grid layout (css-tricks)

CSS - NEED TO CUT OUT CIRCLES FROM BOARD, need to create arrow
for image map - need to put all buttons on one image; if time make board 3D
- use Z index to make board up front
- token falls from behind arrow
- use of sprites to create the tokens
  #game-board {} -- will be set in place, does not do anything (how do I want to set this up? Image with tokens on top?)
  #tokens{} -- sprite, onclick
  #arrow {} -- hover (arrow over each column, shows only when hovered over that column)
  aside {} -- try using flex to create the 4 separate boxes will will consist of side panel; on 4th div will have 3 buttons (do I need to split this up?)
    <div id="whosTurn"></div>
      <div id="instructions"></div>
    <div id="start"></div>
      <button name="startButton"></button>
    <div id="warning"></div>
      <p>this shows when user has clicked on full column</p>
    <div id="gameFunctions"></div>
      <div id="oneP"></div>
      <div id="twoP"></div>
      <div id="restart"></div>
  header {}
  footer {}


Javascript
Each time a token is added to the table it is put into a new array (one for each column) -- 7 arrays; one for each column
  when game is reset, arrays = [];

variables:
  var board  = $('#game-board');
  var currentRow
  var currentPlayer
    var playerOne
    var playerTwo
  var game = new Array();
  var restart = $('#restart');
  var count = 0; -- FOR statement

var token = {
  playerOne:
  playerTwo:
  Computer:
};

function newGame() {
};

function checkForWin() {
  return checkHorizontalWin || checkVerticalWin || checkDiagonalWin
};

function checkHorizontalWin() {};
function checkVerticalWin() {};
function checkDiagonalWin() {};

function buildBoard () {}

Game Logic:
- use 7 arrays; one for each column
- bottom of the board is index 0 and goes up vertically
- when clicked the token shows up in the next available spot in the array (so if index 0 and 1 are filled, the token will fill index number 3 in the column)
- IF column 5 clicked, +1 token to array
- IF add to array in certain column, add one token to board in that column
- IF array >= 7, provide #warning
- must take turns between player one and two - assign one color to player one and one color to player two
- BUTTONS:
  Start Game - .on('click', function {});
  Restart Game - .on('click', function {  reset()  });
  1 player
  2 player
  Instructions
- FOR LOOP -- (var i = 0; i < array.length; i++); -- for each column, when column is clicked, loop until it hits end of array then +1 token to end of it
  -- need to figure out how to make that work with CSS to then add token to #game-board
- game players - playerOne is even, playerTwo is odd? or true false
  x % 2 ==== 0 or x='1' otherwise x = '2'
- MAYBE -- do three big check statements, for example -
          checkVerticalWin {
            if tokens === 4 -- return win
          } else if {
            if(tokens < 4) {
              token++
              push to array();
            }
          } else if {
            if(column4 === full) {
              return warning statement;
            }
          }
- buildBoard function -- need to set the width and height - so 7 and 6
- one click event for EACH column since the user can click on each column
- each column has a click number, so it increases every time it is clicked
- COLUMNS --- loop through each element in the 2d-array, and get the nth column OR get column with map function
- OR use an object so the value can be red or black - value is 0 until a token is added OR value for array is red or black while image map value goes up
- use image map to divide columns, each column has an html value, data-index (array5 - dataIndex)[6-1]  ---> array[5][4] array five, data index 4 then 6-1 would be column 6
