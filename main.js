const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    nav.classList.toggle("navshow");
    burger.classList.toggle("toggle");
});



AOS.init({
    offset: 300,
    delay: 200,
    duration: 1000,
});