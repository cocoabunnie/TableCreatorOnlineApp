/*

This is the Javascript file for the HTML

*/


let table = document.getElementById("Table");
let mouseDownCheck = false;
addClickListenerToCells() //ensuring the initial 3 example cells can change colors also
addHoverListenerToCells(); //Ensuring initial 3 example cells can do click and hold
let numUserRows = table.rows.length; //Keeps track of how many rows the user has added
let numUserColumns = table.rows[0].cells.length; //keeps track of how many columns
let addRowButton = document.getElementById("addRowButton");
let removeRowButton = document.getElementById("removeRowButton");
let addColumnButton = document.getElementById("addColumnButton");
let removeColumnButton = document.getElementById("removeColumnButton");
let colorSelector = document.getElementById("colors");
let colorAllButton = document.getElementById("colorAllButton");
let fillEmptyButton = document.getElementById("fillEmptyCellsButton");
let clearColorButton = document.getElementById("clearAllColor");


//ADD ROW
addRowButton.addEventListener("click", function(){
    //NOTE - each cell is a column OF the row
    var currColumns = table.rows[0].cells.length;
    var newRowElement = document.createElement('tr');
    table.appendChild(newRowElement);
        for(var i = 0; i < currColumns; i++){
            //newRow.insertCell().innerHTML = "Write here"
            var newCellElement = document.createElement('td');
            newCellElement.innerHTML = "Write Here";
            newRowElement.appendChild(newCellElement);
        }

    rowsAndColumns();
    addClickListenerToCells();
    addHoverListenerToCells();
});

//REMOVE ROW
removeRowButton.addEventListener("click", function(){
    var currRows = table.rows.length;

    if (currRows > 1){ //Checks if user has rows added to delete
        table.deleteRow(-1);
        rowsAndColumns();
    } else {
        alert("You must have at least one row!!");
    }
});

//ADD COLUMN
addColumnButton.addEventListener("click", function(){
    var currRows = table.rows.length;
    
    for (let i = 0; i < currRows; i++){
        var newCellElement = document.createElement('td');
        newCellElement.innerHTML = "Write Here";
        table.rows[i].appendChild(newCellElement);
    }
    rowsAndColumns();
    addClickListenerToCells();
    addHoverListenerToCells();
});

//REMOVE COLUMN
removeColumnButton.addEventListener("click", function(){
    var currRows = table.rows.length;
    var currColumns = table.rows[0].cells.length;

    if (currColumns > 1){
        for (let i = 0; i < currRows; i++) {
            table.rows[i].deleteCell(-1);
        }
        rowsAndColumns();
    } else {
        alert("You must have at least one column!");
    }
});

//CHANGE COLOR OF CELL WHEN CLICKED
function addClickListenerToCells(){
    table.querySelectorAll('td').forEach(e => e.addEventListener("click", function(){
        var dropdown = document.getElementById("colors");
        e.style.backgroundColor = dropdown.value;
    }));
}

//CHANGE COLOR OF ALL CELLS AT ONCE
colorAllButton.addEventListener("click", function(){
    table.querySelectorAll('td').forEach(e => e.style.backgroundColor = colorSelector.value);
});

//FILL IN COLOR FOR EMPTY CELLS ONLY
fillEmptyButton.addEventListener("click", function(){
    let cells = table.querySelectorAll('#Table td') //creates an array of the cells
    for(let i = 0; i < cells.length; i++) { //goes through all the cells in array to check
        let color = cells[i].style.backgroundColor
 
        if (color == ""){ //if color is not defines
            cells[i].style.backgroundColor = colorSelector.value;
        }

        if (color == "white"){ //or if color is white
            cells[i].style.backgroundColor = colorSelector.value;
        }    
    }
});

//CLEAR COLOR FROM ALL CELLS
clearColorButton.addEventListener("click", function(){
    let cells = table.querySelectorAll('#Table td') //creates an array of the cells
    for(let i = 0; i < cells.length; i++) { //goes through all the cells in array to check
        cells[i].style.backgroundColor = "white";   
    }
})

//CLICK AND HOLD COLOR DRAGGING FEATURE
function addHoverListenerToCells(){
    table.querySelectorAll('td').forEach(e => e.addEventListener("mouseover", function(){
        if (mouseDownCheck == true){ //only change the color if mouse is down
            var dropdown = document.getElementById("colors");
            e.style.backgroundColor = dropdown.value;
        }
    }));

    table.querySelectorAll('td').forEach(e => e.addEventListener("mousedown", function(){
        mouseDownCheck = true;
        //Change color of cell when mouse down as well
        var dropdown = document.getElementById("colors");
        e.style.backgroundColor = dropdown.value;
    }));

    table.querySelectorAll('td').forEach(e => e.addEventListener("mouseup", function(){
        mouseDownCheck = false;
    }));
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

/*
    Not a part of the prompts!!! 
    Just for me to keep track of rows and columns in the console
*/
function rowsAndColumns(){
    console.log("Number of Rows: " + table.rows.length + " Number of Columns: " + table.rows[0].cells.length);
}