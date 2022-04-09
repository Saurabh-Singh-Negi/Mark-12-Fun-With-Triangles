var Angle1 = document.querySelector("#angle1");
var Angle2 = document.querySelector("#angle2");
var Angle3 = document.querySelector("#angle3");
var btnCheck = document.querySelector("#check-triangle");
var outputMessage = document.querySelector("#output");


function calculateSumOfAngles(angleOne,angleTwo,angleThree) {
    var sum = Number(angleOne)+Number(angleTwo)+Number(angleThree);
    return sum; 
}

function isTriangle() {
    var sumOfAngles = calculateSumOfAngles(Angle1.value,Angle2.value,Angle3.value);
    if(Number(sumOfAngles) == 180) {
        outputMessage.innerText = "Yay! That's a triangle";
    }
    else {
        outputMessage.innerText = "Sorry! That's not a triangle";
    }
}

btnCheck.addEventListener("click", isTriangle);
