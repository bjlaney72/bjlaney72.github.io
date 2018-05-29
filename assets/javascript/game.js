
   //global constants and variables
   const min = 97
   const max = 122
   let wins = 0
   let losses = 0
   let remaining = 9
   let compGuess = getRandomLetter()
   let userGuess
   let userGuesses = []
   let gameOutcomes = []

   function getRandomLetter() {
       lower = Math.ceil(min);
       upper = Math.floor(max);
       let thisGuess = String.fromCharCode(Math.floor(Math.random() * (upper - lower + 1)) + lower);
       console.log("computer guess: " + thisGuess);
       return thisGuess
   }

   function updateUserGuesses(userGuess) {
       var node = document.createElement("h3");
       node.setAttribute("class", "d-inline added-div");
       var textnode = document.createTextNode(" " + userGuess);
       node.appendChild(textnode);
       document.getElementById("user-guesses").appendChild(node);     
   }

   function removeElementsByClass() {
       var elements = document.getElementsByClassName("added-div");
       while (elements.length > 0) {
           elements[0].parentNode.removeChild(elements[0]);
       }
   }

   function updateRemaining(rem) {
       document.getElementById("count-inc").innerHTML = rem;
   }

   function updateUserWins(winCount) {
       thisDiv = document.getElementById("win-inc");
       thisDiv.innerHTML = winCount;
   }

   function updateUserLosses(lossCount) {
       thisDiv = document.getElementById("loss-inc");
       thisDiv.innerHTML = lossCount;
   }

   function resetGameVariables() {
       remaining = 9
       updateRemaining(remaining)
       compGuess = getRandomLetter()
       userGuess = ""
       userGuesses = []
       removeElementsByClass()
   }

   function gameStats() {
       this.outcome = gameResult;
       this.tries = numUserGuesses;

   }

/*         compGuess = getRandomLetter(min, max) */
  

   document.addEventListener('keypress', (event) => { //user keypress event listener
       userGuess = event.key; //game level variable to hold user guess
       let thisAscii = event.keyCode

       if (thisAscii < min || thisAscii > max) {
           alert(userGuess + " not a valid selection, try again")
           return
       } else if (userGuesses.includes(userGuess)) { //if userGuess hasn't been used before                                                    
           alert(userGuess + " has already been tried, try again") //then add to userGuesses array
           return
       } else {
           userGuesses.push(userGuess)

           if (userGuess === compGuess) {
               wins++
               updateUserGuesses(userGuess)
               updateUserWins(wins)
               alert("you won!  select another letter to play again")
               resetGameVariables()
           } else {
               remaining--
               updateUserGuesses(userGuess)
               updateRemaining(remaining)

               if (remaining === 0) {
                   /*  alert("game over " + remaining) */
                   losses++
                   alert("you lose!  select another letter to play again")
                   updateUserLosses(losses)
                   resetGameVariables()
                   return;
               }
           }
       }


       console.log("user guess: " + userGuess)

   });