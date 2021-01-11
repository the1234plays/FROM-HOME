let ballRadius = 10;
let x = 150
let y = cnv.height - 10;
let wallx = 2;
let wally = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = cnv.width;
let rightIsPressed = false;
let leftIsPressed = false; 
let score = 0;
let lives = 3;


document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

let scoreNumber = document.getElementById("scoreTracker")
let livesNumber = document.getElementById("livesTracker")



function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, cnv.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}



function keyDownHandler(event) {
    if(event.keyCode === 39) {
        rightIsPressed = true;
    }
    else if(event.keyCode === 37) {
        leftIsPressed = true;
    }
}

function keyUpHandler(event) {
    if(event.keyCode === 39) {
        rightIsPressed = false;
    }
    else if(event.keyCode === 37) {
        leftIsPressed = false;
    }
}


requestAnimationFrame(draw)
 
function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    drawBall();
    drawPaddle();
    
    if(x + wallx > cnv.width) {
        wallx = -wallx;
    } else if ( x + wallx < 0) {
        wallx = -wallx;
    }


    if(y + wally < ballRadius) {
        wally = -wally;
    }
    else if(y + wally > cnv.height) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            wally = -wally;
            score++
            console.log(score)
        }
        else {
            lives--;
            if(lives == 0) {
            alert("Game Over, click reload to jump right back into the action, your score was " + score);
            document.location.reload();
            clearInterval(interval);
        } else  {
            x = 150
            y = 10;
            dx = 2;
            dy = -2;
            paddleX = cnv.width;
        }
        }

        scoreNumber.innerHTML = score
        livesNumber.innerHTML = lives
    }


    if(rightIsPressed) {
        paddleX += 5;

        
    }
    else if(leftIsPressed) {
        paddleX -= 5;
        
    }
    
    x += wallx;
    y += wally;
}
 
let    interval =  setInterval(draw, 10);