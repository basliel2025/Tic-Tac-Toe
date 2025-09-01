Tic Tac Toe Game

This repository contains a web-based Tic-Tac-Toe game built with HTML, CSS, and JavaScript. It supports two human players and allows you to play rounds of Tic-Tac-Toe with names, scoring, and a simple interface.

Features

This game offers:

Two-player mode where both players take turns placing their markers (X and O) on a 3×3 grid.

Customizable player names entered before each game.

Clear indication of which player’s turn it is.

Display of the winner or a draw when the game concludes.

Option to restart a round without resetting names or scores.

Seamless user experience with minimal refreshes and a maintained game state.

How to Run It

Clone the repository:

git clone https://github.com/basliel2025/Tic-Tac-Toe.git


Open index.html in your browser.

Enter names for Player X and Player O.

Click empty cells to take turns marking them.

Once a player wins or the board fills up, the result appears.

Use the Restart button to play another round.

File Structure

index.html — the main page with the game layout and input fields.

game.css — styles defining the look and feel of the board, buttons, and messages.

game.js — JavaScript logic using closure modules to control game state, player turns, and winner detection.

How It Works (Brief Overview)

The game initializes by reading player names and setting up an empty board.

Players click on cells to place their marker (X or O).

After each move, the game checks for a win or draw.

If a win occurs, the game displays the winning player’s name.

Clicking Restart clears the board while preserving the player names.

The logic relies on closures to encapsulate the board state, control game flow, and manage display updates in a modular and clear way.

Future Improvements (Ideas)

If you would like to expand the project, you might consider:

Resetting scores or marking rounds won.

Adding computer opponent (AI) support.

Including a scoreboard showing cumulative wins.

Improving accessibility or keyboard navigation.


 Author

Game designed by [basliel-ugr-3563-16@aau.edu.et](mailto:basliel-ugr-3563-16@aau.edu.et), student at [Addis Ababa University](mailto:info@aau.edu.et)
