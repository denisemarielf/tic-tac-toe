const player = (name, mark) => {
    const getName = name;
    const getMark = mark;
    return {getName, getMark}
};

const game = (() => {

const submitButton = document.getElementById('submit-button');    
    submitButton.addEventListener('click', function () {
        //get player's names
        const p1name = document.getElementById('name-player-1').value;
        const p2name = document.getElementById('name-player-2').value;
        const player1 = player(p1name, "x");
        const player2 = player(p2name,"o");
        //show gameboard
        const gameboard = document.getElementById('gameboard');
        const gameStart = document.getElementById('game-start');
        gameboard.style.display = 'grid';
        gameStart.style.display = 'none';
        //add names and turns 
        const div = document.createElement('DIV')
        div.className="turn";

        //player1
        const player1Div = document.createElement("div");
        player1Div.classList.add("player-div");
        player1Div.setAttribute("id", "player-1-div")
        const title1 = document.createElement("h6");
        title1.setAttribute("id", "player-1-title");
        title1.classList.add("player-title");
        title1.innerHTML = "Player 1: ";

        const player1Name = document.createElement ("h2");
        player1Name.setAttribute ("id", "player-1-name");
        player1Name.classList.add("player-name");
        player1Name.innerHTML = player1.getName;

        //player2
        const player2Div = document.createElement("div");
        player2Div.classList.add("player-div");
        player2Div.setAttribute("id", "player-2-div")
        const title2 = document.createElement("h6");
        title2.setAttribute("id", "player-2-title");
        title2.classList.add("player-title");
        title2.innerHTML = "Player 2: ";

        const player2Name = document.createElement ("h2");
        
        player2Name.setAttribute ("id", "player-2-name");
        player2Name.classList.add("player-name");
        player2Name.innerHTML = player2.getName;

        player1Div.appendChild(title1);
        player1Div.appendChild(player1Name);

        player2Div.appendChild(title2);
        player2Div.appendChild(player2Name);
        
        div.appendChild(player1Div);
        div.appendChild(player2Div);

        const main = document.getElementById('main');
        main.insertBefore(div, gameboard);

        //gameboard

        let array = ["", "", "", "", "", "", "", "", ""]; 
        const boardPositions = document.querySelectorAll('.game-positions');

        //display control

        let rounds = 1;


        function checkWinner (array) {
            if(array[0] === "x" && array[1] === "x" && array[2] === "x" || array[3] === "x" && array[4] === "x" &&  array[5] === "x" || array[6] === "x" && array[7] === "x" && array[8] === "x" || array[0] === "x" && array[3] === "x" && array[6] === "x" || array[1] === "x" && array[4] === "x" && array[7] === "x" || array[2] === "x" && array[5] === "x" && array[8] === "x" || array[0] === "x" && array[4] === "x" && array[8] === "x" || array[2] === "x" && array[4] === "x" && array[6] === "x"  ){
                const endScreen = document.createElement('div');
                endScreen.setAttribute("id", "end-screen");
                endScreen.innerHTML = "The winner is " + player1.getName + "!";
                const restartButton = document.createElement('button');
                restartButton.setAttribute("id", "restart-button")
                restartButton.innerHTML = "Restart";
                endScreen.appendChild(restartButton);
                main.insertBefore(endScreen, div);
                div.style.display = 'none';
                gameboard.style.display = 'none';
                restartButton.addEventListener('click', function () {
                    restart(endScreen); 
                    })    

            } else if (array[0] === "o" && array[1] === "o" && array[2] === "o" || array[3] === "o" && array[4] === "o" &&  array[5] === "o" || array[6] === "o" && array[7] === "o" && array[8] === "o" || array[0] === "o" && array[3] === "o" && array[6] === "o" || array[1] === "o" && array[4] === "o" && array[7] === "o" || array[2] === "o" && array[5] === "o" && array[8] === "o" || array[0] === "o" && array[4] === "o" && array[8] === "o" || array[2] === "o" && array[4] === "o" && array[6] === "o" ) {
                const endScreen = document.createElement('div');
                endScreen.setAttribute("id", "end-screen");
                endScreen.innerHTML = "The winner is " + player2.getName + "!";
                const restartButton = document.createElement('button');
                restartButton.setAttribute("id", "restart-button")
                restartButton.innerHTML = "Restart";
                endScreen.appendChild(restartButton);
                main.insertBefore(endScreen, div)
                div.style.display = 'none';
                gameboard.style.display = 'none'
                restartButton.addEventListener('click', function () {
                    restart(endScreen); 
                    })   
            } else if (rounds === 10){
                const endScreen = document.createElement('div');
                endScreen.setAttribute("id", "end-screen");
                endScreen.innerHTML = "It's a tie!";
                const restartButton = document.createElement('button');
                restartButton.setAttribute("id", "restart-button")
                restartButton.innerHTML = "Restart";
                endScreen.appendChild(restartButton);
                main.insertBefore(endScreen, div)
                div.style.display = 'none';
                gameboard.style.display = 'none'
                restartButton.addEventListener('click', function () {
                    restart(endScreen); 
                    }) 
            }

        }

        boardPositions.forEach((element) => {
        element.addEventListener('click', function (){
            if (rounds % 2 === 1 && array[element.dataset.position] === "") {
            array[element.dataset.position] = "x";
            element.innerHTML = array[element.dataset.position];
            rounds++; 
            player1Div.style.borderColor = 'white'
            player2Div.style.borderColor = 'yellow'
            checkWinner(array);
          } else if(rounds % 2 !== 1 && array[element.dataset.position] === ""){
              array[element.dataset.position] = "o";
              element.innerHTML = array[element.dataset.position];
              rounds++;
                player2Div.style.borderColor = "white"
                player1Div.style.borderColor = "yellow"
              checkWinner(array);
          }

        });

        
          
        })

       const restart = function(screen) {
            rounds = 1;
            array = ["", "", "", "", "", "", "", "", ""];
            screen.style.display = "none";
            gameboard.style.display = "grid";
            div.style.display = "flex";
            boardPositions.forEach(element => {  
                    element.innerHTML = "";
            })
       }
       
    })

})();