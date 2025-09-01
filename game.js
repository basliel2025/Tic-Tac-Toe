const displayer = document.querySelector('.display-player');
const restart = document.querySelector('#restart');
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const Board = (function(){
    let combo = ['','','','','','','','',''];
    return {
        getCombo: function(){
            return combo.slice();
        },
        setCell: function(index, position){
            combo[index]= position; 
        },
        resetBoard: function(){
            combo= ['','','','','','','','',''];
        },
        cellEmpty: function(index){
            return combo[index]==='';
        }
    };
})();
const player = function(name, marker){
    return{
        getName: function(){
           return name;
        },
        getMarker: function(){
            return marker;
        },
    };
};
function winner(){
    for(let i=0;i< win.length; i++){
        const condition = win[i];
        const cellOne = Board.getCombo()[condition[0]];
        const cellTwo = Board.getCombo()[condition[1]];
        const cellThree = Board.getCombo()[condition[2]];
        if(cellOne == ""|| cellTwo==""|| cellThree==""){
            continue;
        }
        if(cellOne == cellTwo && cellTwo == cellThree){
            return cellOne; 
        }
    }
    return; 
}
function draw(){
    let draw = false;
    if(!Board.getCombo().includes("")){
        draw = true;
    }
    return draw;
}
const controlDisplay= (function(){
    let playing= "X";
    let gameActive = true;
    let ref = document.querySelector('.display-player');
    let winnerRef = document.querySelector('.winner');
    let currentPlayerName = "";
    return {
        cellUpdate: function(index, marker){
            const cell = document.querySelectorAll('.cell')[index];
            if(cell && cell.textContent==""){
                cell.textContent= marker;
                if(marker === 'X') {
                    cell.classList.add('playerX');
                } else if(marker === 'O') {
                    cell.classList.add('playerO');
                }
            }
        },
        turn: function(playerName){
            if(ref){
                currentPlayerName = playerName;
                ref.textContent = playerName;
            }
        },
        finalScore: function(winner){
            if(winner){
                winnerRef.textContent = winner + 'Wins the game';
                winnerRef.classList.remove('hide');
            }
            else{
                winnerRef.textContent= "It's a draw";
                winnerRef.classList.remove('hide');
            }
            gameActive = false;
        },
        resetDisplay: function(){
            const cell = document.querySelectorAll('.cell');
            cell.forEach(cells=> {
                cells.textContent="";
                cells.classList.remove('playerX', 'playerO');
            });
            ref.textContent="";
            winnerRef.classList.add('hide');
            Board.resetBoard();
            playing = "X";
            gameActive = true;
        },
        switchPlayer: function(){
            if(playing === "X"){
                playing = "O";
            } else {
                playing = "X";
            }
        },
        getCurrentPlayer: function(){
            return playing;
        },
        isGameActive: function(){
            return gameActive;
        }
    }
})();
const GameController = (function() {
    let players = [];
    let nowPlaying = 0; 
    let gameActive = false;
    return {
        StartGame: function() {
            const PlayerOne = document.querySelector('#first').value || 'Player 1';
            const PlayerTwo = document.querySelector('#second').value || 'Player 2';
            players = [
                player(PlayerOne, 'X'),
                player(PlayerTwo, 'O')
            ];
            nowPlaying = 0;
            gameActive = true;
            this.action();
            controlDisplay.resetDisplay();
            controlDisplay.turn(players[nowPlaying].getName());
        },
        click: function(index) {
            if (!gameActive || !Board.cellEmpty(index)) {
                return;
            }
            const nowPlayerMarker = players[nowPlaying].getMarker();
            Board.setCell(index, nowPlayerMarker);
            controlDisplay.cellUpdate(index, nowPlayerMarker);
            this.gameStatus();
            if (gameActive) {
                if(nowPlaying === 0){
                    nowPlaying = 1;
                } else {
                    nowPlaying = 0;
                }
                controlDisplay.switchPlayer();
                controlDisplay.turn(players[nowPlaying].getName());
            }
        },
        restartGame: function() {
            gameActive = true;
            nowPlaying = 0;
            controlDisplay.resetDisplay();
            controlDisplay.turn(players[nowPlaying].getName());
        },
        gameStatus: function() {
            const gameWinner = winner();
            if (gameWinner) {
                const winnerName = players.find(p => p.getMarker() === gameWinner).getName();
                controlDisplay.finalScore(winnerName);
                gameActive = false;
                return;
            }
            if (draw()) {
                controlDisplay.finalScore(null);
                gameActive = false;
            }
        },
        action: function() {
            const cells = document.querySelectorAll('.cell');
            cells.forEach((cell, index) => {
                cell.addEventListener('click', () => this.click(index));
            });
            if (restart) {
                restart.addEventListener('click', () => this.restartGame());
            }
        }
    };
})();
document.addEventListener('DOMContentLoaded', function() {
    GameController.StartGame();
});