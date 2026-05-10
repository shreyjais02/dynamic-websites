let bgImg = document.getElementById("bgContainer");
let mainHeading = document.getElementById("heading");
let inputEl = document.getElementById("themeUserInput");

function changeTheme() {
    if (inputEl.value === "Light") {
        bgImg.style.backgroundImage = "url(https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png)";
        mainHeading.style.color = "#014d40";
    } else {
        bgImg.style.backgroundImage = "url(https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png)";
        mainHeading.style.color = "white";
    }
}