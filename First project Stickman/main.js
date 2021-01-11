//Draw stickman

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;




function drawStickman (x, y, color) {
    stroke(color); 
    circle(x +20, y +20, 20, "stroke"); // Head
    line(x + 20, y + 40, x + 20, y + 80); //body
    line(x, y + 70, x + 20, y + 50); //left arm
    line(x + 40, y + 70, x + 20, y + 50); // Right Arm
    line(x, y + 110, x + 20, y + 80); // Left Leg
    line(x + 40, y + 110, x + 20, y + 80); // Right Leg


}

drawStickman(100, 100, "red");
drawStickman(300, 300, "orange")