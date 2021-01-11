document.getElementById("calc").addEventListener("click", calcBtn)

function calcBtn() {
    let num1 = Number(document.getElementById("start").value);
    let num2 = Number(document.getElementById("step").value);
    let num3 = Number(document.getElementById("end").value);

    document.getElementById("output").innerHTML = arithmeticSum(num1, num2, num3);
}


function arithmeticSum(start, step, end) {
    let sum = 0
    for (let n = start; n <= end; n += end) {
        sum += n
    }
    return sum

}

