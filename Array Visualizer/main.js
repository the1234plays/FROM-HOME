//Array Visualizer

//HTML Vairbales
let containerEl = document.getElementById("container")
let bestData = document.getElementById("best")
let worstData = document.getElementById("worst")

//Global vairbales
let myData = [];
for (let n = 1; n <= 50; n++) {
    myData.push(Math.random() * 600)
}


// Display Data
drawArray();


function drawArray() {
    let oustputStr = ""
    for (let i = 0; i < myData.length; i++) {
        oustputStr += `<div style="height: ${myData[i]}px"></div>`
    }
    containerEl.innerHTML = oustputStr
}

//key Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 38) {
        //up Arrow - Add 600 to the index 0
        let middleIndex = Math.floor(myData.length / 2);
        myData.splice(middleIndex, 0, Math.random() * 600);

        
    } else if (event.keyCode === 40) {
        //Down Arrow- Remove element from middle
        let middleIndex = Math.floor(myData.length / 2);
        myData.splice(middleIndex, 1);
    } 

    // if (event.keyCode === 38) {
    //     //up Arrow - pUSHVALUE TO THE END OF THE ARRAY
    //     myData.push(Math.random() * 600)
    // } else if (event.keyCode === 40) {
    //     //Down Arrow- Remove value from the end of the array
    //     let poppedValue = myData.pop();
    //     console.log(poppedValue);



    //Redraw the Array
    drawArray();
    bestData.innerHTML = Math.max(...myData)
    worstData.innerHTML = Math.min(...myData)
}

//Math.max(...myData);