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
  var board
  var currentRow
  var currentPlayer
  var game = new Array();

var token = {
  playerOne:
  playerTwo:
  Computer:
}

function newGame() {



}
