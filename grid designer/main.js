//Grid-MAze Designer

//GLOBAL CONSTANTS
const NUM_ROWS = 10;
const NUM_COLS = 10;

//Create an arry to represent a grid
let grid = createGridArray();

//Add a player to the grid array
let player = {
    row: 5,
    col: 5
}

grid[player.row][player.col] = 2

//Create divs to model the grid array
createDivGrid(grid);

// Player Movement - Key event listener
document.getElementById("keydown", movePlayer);

function movePlayer(event) {
    
    if(event.keyCode  == 39) { //Right arrow key
        //Remove player class from current location
        let cellId = "cell" + player.row + "-" + player.col
        document.getElementById(cellId).classList.remove("player");

        // Set grid array to 0 for current location
        grid[player.row][player.col] = 0;

        //Update player location
        player.col ++;

        //Update the class and grid
        cellId = "cell" + player.row + "-" + player.col
        document.getElementById(cellId).classList.add("player")

        grid[player.row][player.col] = 2;

    } else if(event.keyCode == 37 ) { //Left arrow key
          //Remove player class from current location
          let cellId = "cell" + player.row + "-" + player.col
          document.getElementById(cellId).classList.remove("player");
  
          // Set grid array to 0 for current location
          grid[player.row][player.col] = 0;
  
          //Update player location
          player.col --;
  
          //Update the class and grid
          cellId = "cell" + player.row + "-" + player.col
          document.getElementById(cellId).classList.add("player")

    }
}