let profileDetails = {
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25,
};

let profile = document.getElementById("profileContainer");

let imageEl = document.createElement("img");
let nameEl = document.createElement("h1");
let ageEl = document.createElement("p");

nameEl.classList.add("text-white", "font-bold", "pt-3");
ageEl.classList.add("text-white", "font-bold", "pt-3");

imageEl.src = profileDetails.imgSrc;
nameEl.textContent = profileDetails.name;
ageEl.textContent = "Age: " + profileDetails.age;

profile.appendChild(imageEl);
profile.appendChild(nameEl);
profile.appendChild(ageEl);