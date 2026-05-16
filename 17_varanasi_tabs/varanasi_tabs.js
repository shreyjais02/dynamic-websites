let aboutButton = document.getElementById("aboutButton");
let timeButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");

let aboutTab = document.getElementById("aboutTab");
let timeTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById("attractionsTab");

function onClickAboutTab() {
    aboutButton.style.backgroundColor = "white";
    timeButton.style.backgroundColor = "#dae2ec";
    attractionsButton.style.backgroundColor = "#dae2ec";

    aboutTab.classList.remove("hidden");
    timeTab.classList.add("hidden");
    attractionsTab.classList.add("hidden");
}

function onClickTimeToVisitTab() {
    aboutButton.style.backgroundColor = "#dae2ec";
    timeButton.style.backgroundColor = "white";
    attractionsButton.style.backgroundColor = "#dae2ec";

    aboutTab.classList.add("hidden");
    timeTab.classList.remove("hidden");
    attractionsTab.classList.add("hidden");
}

function onClickAttractionsTab() {
    aboutButton.style.backgroundColor = "#dae2ec";
    timeButton.style.backgroundColor = "#dae2ec";
    attractionsButton.style.backgroundColor = "white";

    aboutTab.classList.add("hidden");
    timeTab.classList.add("hidden");
    attractionsTab.classList.remove("hidden");
}