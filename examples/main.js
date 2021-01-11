

requestAnimationFrame(draw);

function draw () {
    background("skyblue")

    fill("white")

    if (KeyIsPressed[32]) {
        rect(50, 50, 200, 100, "fill")
    }

    requestAnimationFrame(draw);
}



