const btn = document.getElementById("readBtn");
const moreText = document.getElementById("more");
const dots = document.getElementById("dots");

btn.addEventListener("click", function () {
    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btn.textContent = "Read More";
    } else {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btn.textContent = "Read Less";
    }
});