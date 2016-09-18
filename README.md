# Connect-Four---GA
Project One - create Connect Four game

Link to live site: https://rbeneroff.github.io/Connect-Four/

No installation instructions - click link & play!

I created my game using a sprite and used image mapping in order to separate the board and buttons into clickable areas. I used HTML, CSS, and jQuery to create the game and added in Sweet Alert and a responsive design jQuery image map (although not positive it is working). Both the Sweet Alert and Responsive Image Mapping were from GitHub users. I am not the most comfortable with functions so I took simple approaches and although I repeat myself often, I wanted to make sure the logic worked first. If I have time, I'd like to go back and refactor my JS file so that it's cleaner and more concise.

Unsolved problems:
- Diagonal wins
- Player vs computer
- Hover arrows constantly changing position depending on screen size
- you can start game without clicking Start Game first

User Story:
As a user, you will have the option to play with a friend or play the computer (reach). When the user is ready to start the game, they can click the Start Game Button. When it is their turn the blue box will display who's move it is. As the user moves their mouse over the 7 columns, the arrow moves with them. When the user clicks, a token will fall on whichever column the user is hovering over. When a column is full, a warning pops up letting the user know they need to find a different column. When one of the players gets 4  tokens in a row (either horizontally, vertically), a pop-up appears on the screen letting the user know who won. The game is over and the user has the option to restart the game. If the players reach a tie, a pop-up appears telling the players to try again. By clicking the Restart Game button the Connect Four board clears and the game restarts. At any point during the game, if the user clicks the Restart Game button, the game will restart. Don’t know how to play the game? You can click the ? button and a pop-up will show up with instructions.
