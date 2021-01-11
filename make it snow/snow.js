function newSnow(initX, initY, initR, initColor) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor
    };

}

function newRandomSnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(1, 5),
        color: "white"
    };
}

// Create and return an array with 'total' buble objects
 function createRandomBubbleArray(total) {
     let temp = [];
    for (let n = 1; n <= total; n++) {
        temp.push(newRandomSnow());
    }
    return temp;
}

function drawSnow(asnow) {
    stroke(asnow.color)
    circle(asnow.x, asnow.y, asnow.r, "stroke")

}

function moveSnow(asnow) {
    asnow.x += randomInt(-2, 3);
    asnow.y += randomInt(0, 10);
}



