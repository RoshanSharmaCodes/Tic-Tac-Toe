const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winnerDisplay = document.getElementById("winnerDisplay");
const label = document.getElementById("winner");
var counter = 0;
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
const circle = "o";
const cross = "x";
let circleTurn;

cells.forEach(cell=>{
    cell.addEventListener("click",handleClick,{once:true})
})


function reloadPage(){
    window.location.reload();
}

function handleClick(e){
    counter++
    if(counter==9){
        window.location.reload();
    }
    //This Code will Place Mark
    var cell = e.target;
    var currClass = circleTurn?circle:cross;
    MarkCell(cell,currClass);
    if(checkWins(currClass)){
        label.innerText = currClass.toUpperCase()+" Wins";
        winnerDisplay.classList.remove("no");
        winnerDisplay.classList.add("yes");
        
    }   
    else{

    }
    circleTurn = swapTurns(circleTurn);
    switchHoverBoard(circleTurn);

    
}

function checkWins(currClass){
    return WINNING_COMBINATIONS.some(row=>{
        return row.every(index=>{
            return cells[index].classList.contains(currClass);
        })
    })
}

function MarkCell(cell,currClass){
    cell.classList.add(currClass);
}

function swapTurns(circleTurn){
    return !circleTurn;
}

function switchHoverBoard(circleTurn){
    board.classList.remove("circle");
    board.classList.remove("cross");
    if(circleTurn){
        board.classList.add("circle")
    }else{
        board.classList.add("cross");
    }
}