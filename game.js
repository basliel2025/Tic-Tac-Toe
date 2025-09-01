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
    return "It's a draw"; 
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
    return {
        cellUpdate: function(index, marker){
            const cell = document.querySelectorAll('.cell')[index];
            if(cell && cell.textContent==""){
                cell.textContent= marker;
            }
        },
        turn: function(){
            if(ref){
            ref.textContent = "It's " + playing + "'s turn";
            }
        },
        finalScore: function(winner){
            if(winner){
            ref.textContent = winner + " Wins the game";
            }
            else{
                ref.textContent= "It's a draw";
            }
            gameActive = false;
        },
        resetDisplay: function(){
            const cell = document.querySelectorAll('.cell');
            cell.forEach(cells=> cells.textContent="");
            ref.textContent="";
            Board.resetBoard();
            playing = "X";
            gameActive = true;
        },
        switchPlayer: function(){
            if(playing ==="X"){
                return "O";
            }
            else{
                return "X";
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


