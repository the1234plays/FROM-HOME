// Color Array By Arnav Gupta

// Varibales for HTML elements
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("color-in")

//Global Varibale
let colors;

//Fetch content from colors.txt
fetch("colors.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    colors = stringData.split(/\r?\n/)
    displayColors(colors);


}


// Event Listener
inputEl.addEventListener("keyup", submitHandler);

function submitHandler(event) {
    let divStr = "";
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].includes(inputEl.value)) {
            divStr += `<div style = "background: ${colors[i]} "></div>`;
        }

    }
}




function displayColors(colors) {
    let divStr = "";
    let count = 0;
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].length >= 0) {
            divStr += `<div style = "background: ${colors[i]} "></div>`;
            count++;
        }


    }
    containerEl.innerHTML = divStr + `<p>Count: ${count}</p>`;

}

//Display all colors on page