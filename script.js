


const player1 = "x";
const player2 = "o";
const Players = [player1,player2];
const squares = document.querySelectorAll('.squares');
let currentPlayer = player1;


squares.forEach(move => {

    move.addEventListener("click", handleEvent,{once:true});
    
    
});

function switchTurn() {
   

}

function handleEvent(e) {


    const square = e.target;
    if ( currentPlayer === player1){
        currentPlayer = player2;
    } else currentPlayer = player1

    placeMark(square,currentPlayer);
    
    console.log(currentPlayer);

    
}

function placeMark(square,currentPlayer){
    square.classList.add(currentPlayer)
    console.log(square.classList);

}



/*

const gameArray = new Array();
gameArray[0]= new Array(0,0,0);
gameArray[1]= new Array(0,0,0);
gameArray[2]= new Array(0,0,0);

let diagSum=0;
let rowSum=0;
let colSum=0;


//test cases
//diag

    // gameArray[0][0]=-1;
    // gameArray[1][1]=-1;
    // gameArray[2][2]=-1;

//cols
    // gameArray[2][0]=-1;
    // gameArray[2][1]=-1;
    // gameArray[2][2]=-1;

//rows
    gameArray[0][2]=-1;
    gameArray[1][2]=-1;
    gameArray[2][2]=-1;


for (let row=0; row <3; row++){
    colSum=0;
    
    for(let col=0; col<3; col++){

        if(row==col){
            diagSum+= gameArray[row][col];
        }
        colSum+= gameArray[row][col];
        rowSum+=gameArray[row][col];
    }
   
}


console.log({gameArray});
console.log({diagSum}, {rowSum}, {colSum});

*/


