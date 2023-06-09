const cells = document.querySelectorAll(".cell");
let player_x ="X"
let player_o = "O";
let turn = player_x;
let roundWon = false
let restartBtn= document.getElementById('restart')
restartBtn.addEventListener('click',restart)
let draw = true



let gameStatus = true;

const winningCombo = [
   [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
let options = Array(9).fill(null)



cells.forEach(cell =>cell.addEventListener("click",clickHandle, {once: true}));


function clickHandle(e){ 
   if (gameStatus == true && roundWon == false){
      changePlayer(e)
      checkWinner()
   } 
   
}