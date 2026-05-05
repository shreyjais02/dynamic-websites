let isLiked = false;

function onClickLikeButton() {
    if (!isLiked) {
    document.getElementById("likeIcon").src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/liked.png";
    document.getElementById("puppyImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
    document.getElementById("likeButton").style.backgroundColor = "#2563eb";
    document.getElementById("likeButton").style.color = "#ffffff";
    }
    else {
    document.getElementById("likeIcon").src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/hit_like.png";
    document.getElementById("puppyImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
    document.getElementById("likeButton").style.backgroundColor = "#d1d5db";
    document.getElementById("likeButton").style.color = "#4b5563";
    }
    isLiked = !isLiked;
}