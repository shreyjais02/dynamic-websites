let imageElement = document.getElementById("image");
let warningElement = document.getElementById("warningMessage");
let imageWidthElement = document.getElementById("imageWidth");
let imageWidth = 200;

function onIncrement() {
    if (imageWidth < 300) {
        imageWidth = imageWidth + 5;
        imageElement.style.width = imageWidth + "px";
        imageWidthElement.textContent = imageWidth + "px";
        warningElement.textContent = "";
    } else {
        warningElement.textContent = "Image too big. Reduce the size.";
    }
}

function onDecrement() {
    if (imageWidth > 100) {
        imageWidth = imageWidth - 5;
        imageElement.style.width = imageWidth + "px";
        imageWidthElement.textContent = imageWidth + "px";
        warningElement.textContent = "";
    } else {
        warningElement.textContent = "Image too small. Increase the size.";
    }
}