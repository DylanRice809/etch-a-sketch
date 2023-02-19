const grid = document.querySelector("#grid");

function createNewDiv (row) {
    let gridPiece = document.createElement("div");
    gridPiece.classList.add("gridPiece");
    row.appendChild(gridPiece);
}

function createNewRow () {
    let gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    for (let i = 0; i < 32; i++) {
        createNewDiv(gridRow);
    }
    grid.appendChild(gridRow);
}

function createGrid () {
    for (let i = 0; i < 16; i++) {
        createNewRow();
    }    
}

createGrid();

const boxes = document.getElementsByClassName("gridPiece");
for (const div of boxes) {
    div.addEventListener("mouseover", () => {
        div.classList.add("hovered")
    })
}