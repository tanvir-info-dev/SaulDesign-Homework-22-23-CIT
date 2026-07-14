const btn = document.getElementById("readBtn");
const moreText = document.getElementById("more");
const dots = document.getElementById("dots");
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".w_card");

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

// Works Showcase

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Active button
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Filter value
        const filter = button.dataset.filter;

        cards.forEach(card => {

            if(filter === "all"){
                card.classList.remove("hide");
            }
            else if(card.classList.contains(filter)){
                card.classList.remove("hide");
            }
            else{
                card.classList.add("hide");
            }

        });

    });

});