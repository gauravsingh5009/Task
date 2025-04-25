const str = "Colorado's Fly Fishing Outfitter";

function typeTextOnce() {
    let counter = 0;
    const bannerText = document.querySelector(".inner-text h1");
    bannerText.textContent = "";

    const interval = setInterval(() => {
        if (counter < str.length) {
            bannerText.textContent += str[counter++];
        } else {
            clearInterval(interval); // Done typing
        }
    }, 50);
}

window.addEventListener("DOMContentLoaded", typeTextOnce);
