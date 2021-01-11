let testScore = document.getElementById("testScore")


document.getElementById("mainbtn").addEventListener("click", grade)

function grade() {
    let grade = Number(doucment.getElementById("testscore".value));

    output.innerHTML = percentGrade(grade)
}


function percentGrade() {
    if (testScore <= 49) {
        return "F"
    } else if (testScore <= 59) {
        return "D"
    } else if (testScore <= 69) {
        return "C"
    } else if (testScore <= 79) {
        return "B"
    } else {
        return "A"
    }
}

function ticket (speed, limit) {
    if (speed > limit + 21) {
        return "Big ticket"
    } else if (speed >= limit + 20) {
        return "Small ticket"
    } else if (speed >= limit) {
        return "No Ticket"

    } else 
    return "error TOOO FAST!!!!!"
}

function isDivisible(num1, num2) {
    if (num2 % num1 == 0 ) {
        return true
    } else {
        return false
    }
} 

