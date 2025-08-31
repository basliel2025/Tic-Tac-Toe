const cell = document.querySelectorAll('.cell');
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
    const combo = ['','','','','','','','',''];
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


