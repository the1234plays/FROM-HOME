let inputEl1 = document.getElementById("inputEl1");
let inputEl2 = document.getElementById("inputEl2");
let inputEl3 = document.getElementById("inputEl3");

// Program 
document.getElementById('calcBtn').addEventListener('click', calcBtn);
//Event Function
function calcBtn() {
    // Input
    let num1 = +inputEl1.value;
    let num2 = +inputEl2.value;
    let num3 = +inputEl3.value;
   

    // Output
    outputEl.innerHTML = calcAverage(num1, num2, num3) 
}

function calcAverage(a, b) {
    let z = (a + b + ) / 3
    return z
}
