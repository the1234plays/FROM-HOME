let inputEl1 = document.getElementById("inputEl1");
let inputEl2 = document.getElementById("inputEl2");
let inputEl3 = document.getElementById("inputEl3");
let inputEl4 = document.getElementById("inputEl4");



document.getElementById('mainBtn').addEventListener('click', calcBtn);

function calcBtn() {
    // Input
    let secondY = +inputEl1.value;
    let firstY = +inputEl2.value;
    let secondX = +inputEl3.value;
    let firstX = +inputEl4.value;


    outputEl.innerHTML = calcSlope(secondY, firstY, secondX, firstX);
}

function calcSlope (x1, x2, y1, y2) {
    let s = (y2 - y1) / (x2 - x1);
    return s
}