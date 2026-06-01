const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const dropdown = document.querySelector(".dropdown > a");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
});

dropdown.addEventListener("click", function(e){

    if(window.innerWidth <= 768){

        e.preventDefault();

        dropdownMenu.classList.toggle("mobile-open");

    }

});