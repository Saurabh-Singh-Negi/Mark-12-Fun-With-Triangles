const baseTriangle = document.querySelector("#triangle-base");
const heightTriangle = document.querySelector("#triangle-height");
const btnCalculate = document.querySelector("#calculate-button");
const outputMessage = document.querySelector("#output");

function calculateArea() {
    var area = 0.5 * Number(baseTriangle.value) * Number(heightTriangle.value);
    outputMessage.innerText = "area: " +area; 
}


btnCalculate.addEventListener("click", calculateArea);

