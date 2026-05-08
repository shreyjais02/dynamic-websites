let firstNum = document.getElementById("firstNumber");
let secondNum = document.getElementById("secondNumber");
let result = document.getElementById("userInput");
let successMessage = document.getElementById("gameResult");

function restartGame() {
    firstNum.textContent = Math.ceil(Math.random() * 100);
    secondNum.textContent = Math.ceil(Math.random() * 100);
    result.value = "";
    successMessage.textContent = "";
}

restartGame();

function checkResult() {
    let firstValue = parseInt(firstNum.textContent);
    let secondValue = parseInt(secondNum.textContent);
    let userValue = parseInt(result.value);
    let sum = firstValue + secondValue;
    if (userValue === sum) {
        successMessage.textContent = "Congratulations! You got it right.";
        successMessage.style.backgroundColor = "#028a0f";
    } else {
        successMessage.textContent = "Please try again!";
        successMessage.style.backgroundColor = "#1e217c";
    }
}