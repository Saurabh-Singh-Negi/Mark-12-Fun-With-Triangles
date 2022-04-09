const sideLength = document.querySelectorAll(".side-length");
const btnCalculate = document.querySelector("#calculate-button");
const outputMessage = document.querySelector("#output");

function calculateSquare(side1,side2) {
    var sum = side1*side1 + side2*side2;
    return sum;
}


function calculateHypotenuse() {
    var sumOfSquares = calculateSquare(Number(sideLength[0].value),Number(sideLength[1].value));
    var result = Math.sqrt(sumOfSquares);  
    outputMessage.innerText = "result:" + result; 
}


btnCalculate.addEventListener("click", calculateHypotenuse);