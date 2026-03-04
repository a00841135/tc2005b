const btnPress = document.getElementById("btn-press");
const catImg = document.querySelector(".rotating-img");

btnPress.addEventListener("click", function () {
    catImg.classList.add("spin");

    setTimeout(() => {
        catImg.classList.remove("spin");
    }, 1000);
});