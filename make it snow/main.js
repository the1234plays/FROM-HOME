let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;



let snow = [];
for (let n = 1; n <= 100; n++) {
    snow.push(newRandomSnow())
}

requestAnimationFrame(draw);
function draw() {

    background("black")

    for (let i = 0; i < snow.length; i++) {


        //Move and Draw All Bubbles
        moveSnow(snow[i]);
        drawSnow(snow[i]);
    }

    // Loop draw function
    requestAnimationFrame(draw);
}

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { 

        addSnow();

    } else if (event.keyCode === 37) { 

        snow.pop();

    }
}


function addSnow () {
    snow.push(newSnow(Math.random() * 1000, 0, 5, "white")); 
}

let newRandomSnowx = newRandomSnow.x;
let newRandomSnowy = newRandomSnow.y;


requestAnimationFrame(animate);

function animate () {
if (newRandomSnowy < 0) {
    newRandomSnowy = cnv.height
    newRandomSnowx = Math.random () * 200
    requestAnimationFrame(animate);

}
}