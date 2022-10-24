// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;


// Add a row
//If there is no row and no column, add one cells
//Otherwise add a new cell for each column of cell under the existing column of cells
function addR() {

// If there is no row or no column before
    if (numRows === 0 && numCols === 0) {

        const table = document.querySelector("#grid");

        let addRow = document.createElement("tr");
        let addCell = document.createElement("td");

        table.appendChild(addRow);

        const row = document.querySelector("tr");

        addCell.addEventListener("click", clickColor);
        row.appendChild(addCell);

//add row and add column, both of which makes only one cell
        numRows++;
        numCols++;

    }
// If there is a row, a column, or more
    else {

        const table = document.querySelector("#grid");

        let addRow = document.createElement("tr");

        table.appendChild(addRow);

        const row = document.querySelectorAll("tr");

        for (let i = 0; i < numCols; i++) {

            let cell = document.createElement("td");
            cell.addEventListener("click", clickColor);
            row[numRows].appendChild(cell);

        }
// add a new cell for each column
        numRows++;

    }
}

// Add a column
//If there is no row and no column, add one cells
//Otherwise add a new cell for each row of cell on the right side of the existing row of cells

function addC() {
//if there is no row and no column
    if (numRows === 0 && numCols === 0) {

        const table = document.querySelector("#grid");

        let addRow = document.createElement("tr");
        let addCell = document.createElement("td");

        table.appendChild(addRow);

        const row = document.querySelector("tr");

        addCell.addEventListener("click", clickColor);
        row.appendChild(addCell);

//add row and add column, both of which makes only one cell

        numCols++;
        numRows++;

    } else {

        const row = document.querySelectorAll("tr");

        for (let i = 0; i < numRows; i++) {

            let cell = document.createElement("td");
            cell.addEventListener("click", clickColor);
            row[i].appendChild(cell);

        }
// add a new cell for each row
        numCols++;

    }
}

// Remove a row
//If number of rows is 0, then simply return as is
// Otherwise delete one row of cells

function removeR() {

    if (numRows === 0) return;

    const table = document.querySelector("#grid");

//removechild method to remove the last row
    table.removeChild(table.lastChild);

//decrease the number of rows
    numRows--;

//delete all of the cells in that row
    if (numRows === 0) {

//use while loop to remove all the cells in the row
        while (table.hasChildNodes()) {
            table.removeChild(table.lastChild);
        }
        numCols = 0;
    }
}

// Remove a column
//If number of columns is 0, then simply return as is
// Otherwise delete one column of cells

function removeC() {

    if (numCols === 0) return;

    const table = document.querySelector("#grid");
    const rows = document.querySelectorAll("tr");

    for (let i = 0; i < numRows; i++) {
      //removechild method to remove the last column
        rows[i].removeChild(rows[i].lastChild);
    }
    //decrease the number of columns
    numCols--;

//delete all the cells in that column
    if (numCols === 0) {
//using while loop to keep deleting cells until there are co cells in the column
        while (table.hasChildNodes()) {
            table.removeChild(table.lastChild);
        }

        numRows = 0;
    }
}


// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}


function clickColor() {
    this.style.backgroundColor = colorSelected;
}

// Fill all uncolored cells
function fillU(){
    let row = document.getElementsByTagName("td"); //get array of all cells
    for (let i = 0; i < row.length; i++){
        if(!row[i].style.backgroundColor){ //if the cell has no color then we set the color to the colorselected
            row[i].style.backgroundColor = colorSelected;
        }
    }
}


// Fill all cells
function fillAll(){
    let row = document.getElementsByTagName("td"); //get array of all cells
    for (let i = 0; i < row.length; i++) {
        row[i].style.backgroundColor = colorSelected; // fills the cell with the color selected
    }
}


// Clear all cells
function clearAll(){
    let row = document.getElementsByTagName("td"); //get array of all cells
    for (let i = 0; i < row.length; i++) {
        row[i].style.removeProperty("background-color"); // remove the backgroundColor
    }
}
