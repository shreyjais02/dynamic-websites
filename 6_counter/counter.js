let counterElement = document.getElementById("counterValue");

function clicked() {
    let previousValue = counterElement.textContent;
    let updatedValue = parseInt(previousValue) + 1;
    counterElement.textContent = updatedValue;
    counterElement.style.color = "#c20a72";
}