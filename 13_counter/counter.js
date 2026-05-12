let counterElement = document.getElementById("counterValue");

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;
    if (updatedCounterValue < 0) {
        counterElement.style.color = "Red";
    } else if (updatedCounterValue > 0) {
        counterElement.style.color = "Green";
    }
    else {
        counterElement.style.color = "Black";
    }
}

function onReset() {
    counterElement.textContent = 0;
    counterElement.style.color = "Black";
}

function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;
    if (updatedCounterValue < 0) {
        counterElement.style.color = "Red";
    } else if (updatedCounterValue > 0) {
        counterElement.style.color = "Green";
    }
    else {
        counterElement.style.color = "Black";
    }
}