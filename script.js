document.addEventListener("DOMContentLoaded", function() {
    let gridContainer = document.getElementById("gridContainer");
    console.log(gridContainer);
});

const numRows = 16;
const numCols = 16;

function createGrid(rows, cols) {
  const gridContainer = document.getElementById('gridContainer');

  for (let i = 0; i < rows; i++) {
    // 1. Create a row element
    const row = document.createElement('div');
    row.classList.add('grid-row'); // Add class for styling

    for (let j = 0; j < cols; j++) {
      // 2. Create a cell element
      const cell = document.createElement('div');
      cell.classList.add('grid-cell'); // Add class for styling

      // 3. Append the cell to the row
      row.appendChild(cell);
    }

    // 4. Append the row to the grid container
    gridContainer.appendChild(row);
  }
}

createGrid(16, 16);