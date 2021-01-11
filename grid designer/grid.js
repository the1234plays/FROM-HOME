//Grid Functions

function createGridArray() {
    //Create and return a grid array
    return [[1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0]];
}

function createDivGrid(grid) {
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            //Create a div for each elemement in my 2d grid
            let divEl = document.createElement("div");

            //Add an id to each divEl
            divEl.id = "cell" +row +"-" + col;

            //Add appropaiate class to each divEl
            if (grid[row][col] == 1) {
                divEl.classList.add("grey");
            } else if (grid[row][col] == 2) {
                divEl.classList.add("player");
            }

            //Add dataset values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col;

            //Add an event listener to each divEl            
            divEl.addEventListener("click", cellClicked)

            //Add div to conatainer
            document.getElementById("container").append(divEl)
        }
    }
}

function cellClicked (event) {
    // Set the color of the clicked cell

    //Get value of color select element
    let color = document.getElementById("cell-color").value;

    //Get row and col of the clicked cell
    let row = event.target.dataset.row;
    let col = event.target.dataset.col;


    //Update clicked cell based on slected color
    event.target.classList = ""; // Empty cell class list
    grid[row][col] = 0; // Set grid to "white"
    if (color == "grey") {
        event.target.classList.add("grey");
        grid[row][col] = 1;
    }   

}