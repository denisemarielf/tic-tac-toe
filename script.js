//NO GLOBAL CODE!!!!!!!!!!!!!!!1
//MODULES OR FACTORIES ONLY


//gameBoard, displayController -> module

//players -> factories

const player = (name, mark) => {
    return {name, mark}
};

const gameboard = (() => {
    const array = ["", "", "", "", "", "", "", "", ""]; 
    
    const boardPositions = document.querySelectorAll('.game-positions')

    return {
        array,
        boardPositions
    };

})();

console.log(gameboard.array)
//display: mostrar o dejar de mostrar cosas
const displayController = (() => {
    //mostrar tablero de juego
    const submitButton = document.getElementById('submit-button')
    submitButton.addEventListener('click', function() {
        const gameboard = document.getElementById('gameboard');
        const gameStart = document.getElementById('game-start')
        gameboard.style.display = 'grid';
        gameStart.style.display = 'none';
    })
    //mostrar las posiciones de los jugadores
    
    gameboard.boardPositions.forEach(element => {  
            element.addEventListener('click', function (){
                element.innerHTML = gameboard.array[element.dataset.position]
            });
        })
})();


const game = (() => {
    
})();







