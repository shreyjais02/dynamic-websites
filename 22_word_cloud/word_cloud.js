let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");

// function to generate random font size
function getRandomFontSize() {
    return Math.floor(Math.random() * 40) + 10;
    // random size between 10px and 50px
}

// function to create and append a word
function createAndAppendWord(word) {
    let spanEl = document.createElement("span");
    spanEl.textContent = word;
    spanEl.style.fontSize = getRandomFontSize() + "px";
    spanEl.classList.add("m-2");
    wordsContainer.appendChild(spanEl);
}

// render initial words
for (let i = 0; i < wordCloud.length; i++) {
    createAndAppendWord(wordCloud[i]);
}

function onAddWordToWordCloud() {
    let inputValue = userInput.value.trim();

    if (inputValue === "") {
        errorMsg.textContent = "Please enter a word";
    } else {
        errorMsg.textContent = "";
        createAndAppendWord(inputValue);
        userInput.value = "";
    }
}