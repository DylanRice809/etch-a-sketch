// sets number of elements in the grid
let canvasSize = 100

// sets the size of the individual elements
let elementSize = 960/canvasSize;

// defines the grid and sets its size using the above parameters
const grid = document.querySelector("#grid");
grid.style.gridTemplateColumns = `repeat(${canvasSize}, ${elementSize}px)`;

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    const gridArray = document.getElementsByClassName("gridPiece");
    for (const piece of gridArray) {
        piece.classList.remove("hovered");
    }
})

// created a new div and adds it to the grid when called
function createNewDiv () {
    let gridPiece = document.createElement("div");
    gridPiece.classList.add("gridPiece");
    gridPiece.addEventListener("mouseover", () => {
        gridPiece.classList.add("hovered");
    })
    gridPiece.style.width = `${elementSize}px`;
    gridPiece.style.height = `${elementSize}px`;
    grid.appendChild(gridPiece);
}

function createGrid () {
    for (let i = 0; i < (canvasSize**2); i++) {
        createNewDiv();
    }   
}

function removeGrid () {
    let child = grid.lastElementChild; 
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}

createGrid();