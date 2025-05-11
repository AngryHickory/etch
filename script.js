document.addEventListener('DOMContentLoaded', function() {
    let gridContainer = document.getElementById('gridContainer');
});

const gridButton = document.getElementById('gridButton');
const resetButton = document.getElementById('reset');

function createGrid(rows, cols) { // this line defines a function named createGrid - it takes the parameters rows and cols
  const gridContainer = document.getElementById('gridContainer'); // this line references the html element with the ID gridContainer

  gridContainer.innerHTML = '';

  for (let i = 0; i < rows; i++) { // this is the outer for loop for the rows
    const row = document.createElement('div'); // this line creates a new div element inside the outer loop, it will be a row in the grid.
    row.classList.add('grid-row'); // this line adds a CSS class called grid-row to the new row div

    for (let j = 0; j < cols; j++) { // this is the inner for loop, it's for the columns. 
      const cell = document.createElement('div'); // this line creates a new div that will be a cell in the grid.
      cell.classList.add('grid-cell'); // Add class for styling

      row.appendChild(cell); // this line appends the cell element to the row element. this makes the cell the child of the row in HTML. 

    cell.addEventListener('mouseenter', function(event) {
      cell.classList.add('hovered');
    });

    cell.addEventListener('touchstart', function(event) {
      cell.classList.add('hovered');
    });

    }

    gridContainer.appendChild(row); // this appends the row to the grid container once the inner loop is finished adding cells. 
  }
}

createGrid(16, 16); // this line calls the function with two arguments: rows, columns

gridButton.addEventListener('click', function() {
  const inputValue = prompt("Enter a number for grid size:");

  if (inputValue !== null) {
    const num = parseInt(inputValue);

    if (!isNaN(num) && num > 0 && num <= 100) {
      createGrid(num, num);
    } else {
        alert("Please enter a number between 1-100");
    }
  } else {
    alert("You must enter a number.")
  }
});

resetButton.addEventListener('click', () => {
  location.reload();
})