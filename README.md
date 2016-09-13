# Connect-Four---GA
Project One - create Connect Four game

Pseudo-Code:

HTML
<div id="game">
  <div id="game-board"></div>
    <div id="column1"></div>
    <div id="column2"></div>
    <div id="column3"></div>
    <div id="column4"></div>
    <div id="column5"></div>
    <div id="column6"></div>
    <div id="column7"></div>
</div>


CSS
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
- game players - playerOne is even, playerTwo is odd?
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
- 
