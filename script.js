
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

let player = ["player 1", "player 2"];
let i=player.length;
let currentPlayer="";

//MOVE 1
const move1 = document.querySelector('.move-1');
move1.addEventListener("click", e => {

    console.log(e.target);
    //gameArray[0][0]=;
})

move1.addEventListener("click", e => {
    
    currentPlayer =player[i%2];
    i++;
    console.log({currentPlayer});

})

//MOVE 2
const move2 = document.querySelector('.move-2');
move2.addEventListener("click", e => {

    console.log(e.target);
    //gameArray[0][1]=;
})

move2.addEventListener("click", e => {
    
    currentPlayer =player[i%2];
    i++;
    console.log({currentPlayer});

})

//MOVE 3
const move3 = document.querySelector('.move-3');
move3.addEventListener("click", e => {

    console.log(e.target);
    //gameArray[0][2]=;
})

move3.addEventListener("click", e => {
    
    currentPlayer =player[i%2];
    i++;
    console.log({currentPlayer});

})


//MOVE 4
const move4 = document.querySelector('.move-4');
move4.addEventListener("click", e => {

    console.log(e.target);
    //gameArray[1][0]=;
})

move4.addEventListener("click", e => {
    
    currentPlayer =player[i%2];
    i++;
    console.log({currentPlayer});

})

//MOVE 5
const move5 = document.querySelector('.move-5');
move5.addEventListener("click", e => {

    console.log(e.target);
    //gameArray[1][1]=;
})

move5.addEventListener("click", e => {
    
    currentPlayer =player[i%2];
    i++;
    console.log({currentPlayer});

})
//MOVE 6
const move6 = document.querySelector('.move-6');
move6.addEventListener("click", e => {

    console.log(e.target);
    //gameArray[1][2]=;
})

move6.addEventListener("click", e => {
    
    currentPlayer =player[i%2];
    i++;
    console.log({currentPlayer});

})

//MOVE 7
const move7 = document.querySelector('.move-7');
move7.addEventListener("click", e => {

    console.log(e.target);
    //gameArray[2][0]=;
})

move7.addEventListener("click", e => {
    
    currentPlayer =player[i%2];
    i++;
    console.log({currentPlayer});

})
//MOVE 8
const move8 = document.querySelector('.move-8');
move8.addEventListener("click", e => {

    console.log(e.target);
    //gameArray[2][1]=;
})

move8.addEventListener("click", e => {
    
    currentPlayer =player[i%2];
    i++;
    console.log({currentPlayer});

})

//MOVE 9
const move9 = document.querySelector('.move-9');
move9.addEventListener("click", e => {

    console.log(e.target);
    //gameArray[2][2]=;
})

move9.addEventListener("click", e => {
    
    currentPlayer =player[i%2];
    i++;
    console.log({currentPlayer});

})

