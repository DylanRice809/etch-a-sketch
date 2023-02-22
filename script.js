// sets number of elements in the grid
let canvasSize = 100

// sets the size of the individual elements
let elementSize = 960/canvasSize;

// defines the grid and sets its size using the above parameters
const grid = document.querySelector("#grid");
grid.style.gridTemplateColumns = `repeat(${canvasSize}, ${elementSize}px)`;

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

// creates the grid
function createGrid () {
    for (let i = 0; i < (canvasSize**2); i++) {
        createNewDiv();
    }   
}

createGrid();