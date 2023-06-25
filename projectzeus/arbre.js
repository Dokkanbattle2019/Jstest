class Node {
    constructor(data = null, left = null, right = null) {
        this.key = data;
        this.left = left;
        this.right = right;
    }

}

function test(event) {
    const element = event.target;
    const existingKnight = document.getElementById("knight");

    if (existingKnight) {
        existingKnight.removeAttribute("id"); // Supprime l'ID existant

    }
    element.id = "knight";



}

//dom
let placeKnight = document.getElementById("placeKnight");
let clearBoard = document.getElementById("clearBoard");
let knightDestination = document.getElementById("knightDestination");
let action = document.getElementsByTagName("action");



// set board

let board = document.getElementById("board");
let condition = false;


for (let i = 0; i < 8; i++) {
    if (condition) {
        condition = false;
    } else {
        condition = true;
    }
    let row = document.createElement("div");
    board.appendChild(row);
    for (let i = 0; i < 8; i++) {
        let square = document.createElement("div");
        square.classList.add("squares");
        row.appendChild(square);
        if (condition) {
            if (i % 2 === 0) {
                square.classList.add("black");
            }
        } else {
            if (i % 2 === 1) {
                square.classList.add("black");
            }
        }

    }
}

// toutes les cases
let squares = document.querySelectorAll(".squares");

// event listeners

placeKnight.addEventListener("click", () => {


    squares.forEach((square) => {
        square.addEventListener("click", test);

    });
});





