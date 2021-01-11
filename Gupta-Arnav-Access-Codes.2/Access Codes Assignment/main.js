// Access Codes Assignment

// Add Event Listeners 
document.getElementById('button1').addEventListener('click', page1btn);
document.getElementById('button2').addEventListener('click', page2btn);
document.getElementById('button3').addEventListener('click', page3btn);
document.getElementById('button4').addEventListener('click', page4btn);


// Page 1
function page1btn() {
    // Declaring Variables
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;

    // Process
    if (input1 == '1' && input2 == '2' && input3 == '3') {
        document.getElementById('output').innerHTML = 'ACCESS GRANTED' //Output
    } else {
        document.getElementById("output").innerHTML = 'ACCESS DENIED'
    } //Output

}

// Page 2
function page2btn() {
    // Declaring Variables
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;

    //Process
    if (input1 == 'WOW' && input2 >= '50' && input2 <= '60') {
        document.getElementById('output').innerHTML = 'ACCESS GRANTED' //Output
    } else {
        document.getElementById("output").innerHTML = 'ACCESS DENIED' //Output
    }

}

// Page 3
function page3btn() {
    // Declaring Variables
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;

    //Process
    if (input1 == input2 || input3 == "LET ME IN") {
        document.getElementById('output').innerHTML = 'ACCESS GRANTED' //Output 
    } else {
        document.getElementById("output").innerHTML = 'ACCESS DENIED' //Output
    }
}

// Page 4
function page4btn() {
    // Declaring Variables
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;

    //Process
    if (input1 == 'ALGORITHM' || input2 == 'ALGORITHM' || input3 == 'ALGORITHM') {
        document.getElementById('output').innerHTML = 'ACCESS GRANTED' //Output
    } else {
        document.getElementById("output").innerHTML = 'ACCESS DENIED' //Output
    }
}