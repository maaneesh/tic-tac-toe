


const player1 = "X";
const player2 = "O";
const Players = [player1,player2];
const squares = document.querySelectorAll('.squares');
const restart = document.getElementById('reset-button');
const board = document.getElementById('squares');
const winningMesssage = document.getElementById('text-message');
let currentPlayer = player1;
let gameWinner = "";

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



//reset button


restart.addEventListener("click",resetClassList);


squares.forEach(move => {

    move.addEventListener("click", handleEvent,{once:true});  
    
});


function handleEvent(e) {
    
    const square = e.target;
    if ( currentPlayer === player1){
        currentPlayer = player2;
    } else currentPlayer = player1

    placeMark(square,currentPlayer);

    if (checkWin(currentPlayer)){
        gameWinner = currentPlayer;
        endGame(false);
    }
    else if ( isDraw()){
        winningMesssage.innerText=`It's a draw!`;

    }
 
}



function placeMark(square,currentPlayer){
    square.classList.add(currentPlayer);

}

function checkWin(currentPlayer){
    return WINNING_COMBINATIONS.some( combination => {
        return combination.every(index => {
            return squares[index].classList.contains(currentPlayer);
        })
    })
}
function isDraw(){
    return [...squares].every(move =>{
        return move.classList.contains(player1) ||  move.classList.contains(player2);
    })
    endGame(true);

}

function endGame(draw){

    if (draw){
        winningMesssage.innerText = `It's a Draw!`;

    } else{
        winningMesssage.innerText = `${currentPlayer} Wins!`;
        resetClassList();
    }

}


function resetClassList(){

    squares.forEach(move => {

        move.classList.remove(player1);
        move.classList.remove(player2);
            
    });  


}

