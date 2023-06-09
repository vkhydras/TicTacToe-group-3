




























function changePlayer(e){
   //e refers to the event objet (even or e)
      if (turn==player_x){
      //e,target refers to the specific cell clicked and append(turn adds the X or O)
         e.target.append(turn)
         turn = player_o
         document.getElementById('X').style.backgroundColor = 'transparent'
         document.getElementById('X').style.color = 'white'
         document.getElementById('O').style.backgroundColor = '#FF2E63'
         document.getElementById('O').style.color = 'white'
      } else{
         e.target.append(turn)
         turn = player_x
         document.getElementById('O').style.backgroundColor = 'transparent'
         document.getElementById('O').style.color = 'white'
         document.getElementById('X').style.backgroundColor = '#FF2E63'
         document.getElementById('X').style.color = 'white'
         
      }
      document.getElementById("turn").innerHTML =turn + "'S " + " TURN"
      //e.target.id gets the id of the cell clicked 
      const id = e.target.id
      if (!options[id]){
      //options[id] = turn removes null from the specified index and append X or O
         options[id] = turn
      }
   }