
function changePlayer(e){
    if (turn==player_x){
       e.target.append(turn)
       turn = player_o
       document.getElementById('X').style.backgroundColor = 'white'
       document.getElementById('X').style.color = 'black'
       document.getElementById('O').style.backgroundColor = 'black'
       document.getElementById('O').style.color = 'white'
    } else{
       e.target.append(turn)
       turn = player_x
       document.getElementById('O').style.backgroundColor = 'white'
       document.getElementById('O').style.color = 'black'
       document.getElementById('X').style.backgroundColor = 'black'
       document.getElementById('X').style.color = 'white'
       
    }
    document.getElementById("turn").innerHTML =turn + "'S " + " TURN"
    const id = e.target.id
    if (!options[id]){
       options[id] = turn
    }
 }
 