let bgClr = document.getElementById("bgColorInput");
let fontClr = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let paddingValue = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");
let customBtn = document.getElementById("customButton");


function onApplyProperties() {
    customBtn.style.backgroundColor = bgClr.value;
    customBtn.style.color = fontClr.value;
    customBtn.style.fontSize = fontSize.value;
    customBtn.style.fontWeight = fontWeight.value;
    customBtn.style.padding = paddingValue.value;
    customBtn.style.borderRadius = borderRadius.value;
}