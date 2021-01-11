let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 550;
cnv.height = 400;



function drawStar(x, y, color) {
    stroke(color);
    lineWidth(3)
    line(x, y, x - 80, y + 120);
    line(x - 80, y + 120, x + 110, y + 50);
    line(x + 110, y + 50, x - 100, y + 50);
    line(x -100, y + 50, x + 90, y + 120);
    line(x + 90, y + 120, x, y);

}

function drawTarget(x, y, r, mode) {
    stroke("green")
    lineWidth(1)
    circle(x, y, r, "stroke")
    circle(x, y, 2 * r, "stroke")
    circle(x, y, 3 * r, "stroke")
    circle(x, y, 4 * r, "stroke")
    circle(x, y, 5 * r, "stroke")
    circle(x, y, 6 * r, "stroke")
    circle(x, y, 7 * r, "stroke")
}

function drawRobot (x, y, mode) {

    circle(x + 20, y + 20, 6 * Math.PI, "fill")
    fill("white")
    circle(x + 30, y + 20, 2 * Math.PI, 'fill')
    fill("black")
    circle( x + 30, y + 20, 1/2 *Math.PI, "fill")
    line(x + 20, y + 35, x + 20, y + 60)
    rect(x, y + 60, 40, 60, "fill" )
    rect()
}

drawStar(130, 20, "red");
drawStar(400, 20, "blue");

drawTarget(80, 300, 2 * Math.PI, "stroke");

drawRobot(300, 250, "black");