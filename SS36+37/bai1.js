
function checkAnswer() {
    let answerInput = document.getElementById("answer");
    let answer = answerInput.value;

    if (answer.length > 10) {
    displayMessage("Cau tra loi khong hop le !!!");
    } else {
    displayMessage("Cau tra loi hop le.");
    }
}

function displayMessage(msg) {
    let messageElement = document.getElementById("message");
    messageElement.textContent = msg;
}
