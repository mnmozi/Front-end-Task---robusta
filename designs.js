// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');
// Select the table
const table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
function makeGrid() { //make grid clear the table at first then create N(height) rows with M(width) columns with a white bachground color and add to each cell event listener to change their color

  table.innerHTML = ''; //clear all elements inside the table
  for (let i = 0; i < gridHeight.value; i++) {
    let tableRow = document.createElement('tr');
    for (let j = 0; j < gridWidth.value; j++) {
      let tableCell = document.createElement('td');
      tableCell.style.backgroundColor = 'white';
      // tableCell.style.backgroundColor = color.value; //this line can make all the cells with a backgroundColor that got picked before submitting
      tableCell.addEventListener('click', changeColor);
      tableRow.appendChild(tableCell);
    }
    table.appendChild(tableRow);
  }

  function changeColor() {
    this.style.backgroundColor = color.value; // this refers to the element that fired the event
  }
}