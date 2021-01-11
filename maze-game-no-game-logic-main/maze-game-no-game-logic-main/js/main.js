// Maze Game by Mr. V

// Global Variables
let player = newPlayer(0, 275, 50, 50, "red", 5, 37, 39, 38, 40);
let walls = [];
walls.push(newWall(100, 0, 20, 100));
walls.push(newWall(200, 400, 20, 200));
walls.push(newWall(300, 200, 20, 150));

// Set Canvas Size
canvasSize(800, 600);

// Main Draw Loop
requestAnimationFrame(draw);

function draw() {
  // LOGIC
  movePlayer(player);
  checkWallCollision(player, walls);

  // DRAWING
  background("skyblue");
  drawPlayer(player);
  drawWalls(walls);

  requestAnimationFrame(draw);
}

// Event Stuff