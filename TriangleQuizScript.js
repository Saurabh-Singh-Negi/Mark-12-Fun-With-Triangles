const quizForm = document.querySelector(".quiz-form");
const btnCheck = document.querySelector("#submit-answers");
const outputMsg = document.querySelector("#output");    

const correctAnswers = ['90', 'Right Angled'];

function calculateScore() {
    var score = 0;
    var index = 0;
    const data = new FormData(quizForm);
    for(let answer of data.values()) {
        if(answer === correctAnswers[index]) {
            score++;
        }
        index++;
    }
    outputMsg.innerText = "score is:" + score;
}

btnCheck.addEventListener("click", calculateScore);