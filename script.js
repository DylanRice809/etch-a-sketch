// sets number of elements in the grid
let canvasSize = 100

// sets the size of the individual elements
let elementSize = 720/canvasSize;

// defines the grid and sets its size using the above parameters
const grid = document.querySelector("#grid");
grid.style.gridTemplateColumns = `repeat(${canvasSize}, ${elementSize}px)`;

// removes "hovered" class from all elements when pressed
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    const gridArray = document.getElementsByClassName("gridPiece");
    for (const piece of gridArray) {
        piece.classList.remove("hovered");
    }
})

const sizeButton = document.querySelector(".size");
sizeButton.addEventListener("click", () => {
    changeSize();
})


// changes the background colour of the buttons when hovered over
reset.addEventListener("mouseover", () => {
    reset.classList.add("clicked");
})
reset.addEventListener("mouseout", () => {
    reset.classList.remove("clicked");
})
sizeButton.addEventListener("mouseover", () => {
    sizeButton.classList.add("clicked");
})
sizeButton.addEventListener("mouseout", () => {
    sizeButton.classList.remove("clicked");
})

// ask the user for the canvas size when called, then draw it
function changeSize () {
    outer: while (true) {
        canvasSize = parseInt(prompt("Please input a new canvas size of 100 or less"));
        if (canvasSize <= 100 && canvasSize> 0) {
            break outer;
        }
    }
    elementSize = 720/canvasSize;
    grid.style.gridTemplateColumns = `repeat(${canvasSize}, ${elementSize}px)`;
    removeGrid();
    createGrid();
}

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