//NO GLOBAL CODE!!!!!!!!!!!!!!!1
//MODULES OR FACTORIES ONLY


//gameBoard, displayController -> module

//players -> factories

const player = (name, mark) => {
    const getName = () => name;
    return {getName, mark}
};

const game = (() => {
    const player1 = player("Juan", "x")
    const player2 = player("Maria", "o")
    console.log(player1.name, player1.mark)
})();

const gameboard = (() => {
    const array = ["", "", "", "", "", "", "", "", ""]; 
    array[0] = "o";
    return {
        array
    };

})();

const displayController = (() => {
    const positions = document.querySelectorAll('.game-positions')
    positions.forEach(element => {
        element.addEventListener('click', () => {
           element.innerHTML = gameboard.array[element.dataset.position];
        })
    })
})();
//[element.dataset.position]






