let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: [
        "Pasta",
        "Oil",
        "Onions",
        "Salt",
        "Tomato Pasta Sauce",
        "Cheese",
    ],
};

let mainHeading = document.getElementById("recipeTitle");
mainHeading.textContent = recipeObj.title;

let imgEl = document.getElementById("img");
imgEl.src = recipeObj.imgSrc;

let ingredientsEl = document.getElementById("ingredientListContainer");
let ings = recipeObj.ingredients;

for (let i = 0; i < ings.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = ings[i];
    ingredientsEl.appendChild(listItem);
}