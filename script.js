document.addEventListener("DOMContentLoaded", function() {
    let gridContainer = document.getElementById("gridContainer");
    console.log(gridContainer);
});

const numRows = 16;
const numCols = 16;

function createGrid(rows, cols) {
    const gridContainer = document.getElementById("gridContainer");

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            gridContainer.appendChild(cell);
        }
    }
}

createGrid(numRows, numCols);