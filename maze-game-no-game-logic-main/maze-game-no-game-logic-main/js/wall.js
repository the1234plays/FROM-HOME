// Wall Functions
function newWall(initX, initY, initW, initH) {
  return {
    x: initX,
    y: initY,
    w: initW,
    h: initH
  }
}

function drawWall(aWall) {
  fill("grey");
  rect(aWall.x, aWall.y, aWall.w, aWall.h, "fill");
}

function drawWalls(walls) {
  for (let i = 0; i < walls.length; i++) {
    drawWall(walls[i]);
  }
}