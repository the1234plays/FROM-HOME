// Player Functions

function newPlayer(initX, initY, initW, initH, initColor, initSpeed, initlKey, initrKey, inituKey, initdKey) {
  return {
    x: initX,
    y: initY,
    w: initW,
    h: initH,
    color: initColor,
    speed: initSpeed,
    lKey: initlKey,
    rKey: initrKey,
    uKey: inituKey,
    dKey: initdKey
  }
}

function drawPlayer(aPlayer) {
  fill(aPlayer.color);
  rect(aPlayer.x, aPlayer.y, aPlayer.w, aPlayer.h, "fill");
}

function movePlayer(aPlayer) {
  if (keyIsDown[aPlayer.lKey]) {
    aPlayer.x += -aPlayer.speed;
  } else if (keyIsDown[aPlayer.rKey]) {
    aPlayer.x += aPlayer.speed;
  } else if (keyIsDown[aPlayer.uKey]) {
    aPlayer.y += -aPlayer.speed;
  } else if (keyIsDown[aPlayer.dKey]) {
    aPlayer.y += aPlayer.speed;
  }
}

function resetPlayer(aPlayer) {
  aPlayer.x = 0;
  aPlayer.y = 275;
}

function checkWallCollision(aPlayer, walls) {
  for (let i = 0; i < walls.length; i++) {
    if (rectCollide(aPlayer, walls[i])) {
      resetPlayer(aPlayer);
      break;
    }
  }
}