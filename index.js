function restart(){
   cells.forEach(cell =>cell.addEventListener("click",clickHandle, {once: true}));
   options.fill(null)
   cells.forEach(cell =>{
      cell.innerText = "";
   })
   turn = player_x
   gameStatus = true
   roundWon = false
   draw = true
   document.getElementById("restart").style.display = "none"
   document.getElementById("turn").innerHTML =turn + "'S " + " TURN"
   document.getElementById('O').style.backgroundColor = 'white'
   document.getElementById('O').style.color = 'black'
   document.getElementById('X').style.backgroundColor = 'black'
   document.getElementById('X').style.color = 'white'
}
