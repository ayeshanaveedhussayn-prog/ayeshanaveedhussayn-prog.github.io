document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const navMenu = document.getElementById("navMenu");

    if (!menuIcon || !navMenu) return;

    const navLinks = navMenu.querySelectorAll("a");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        menuIcon.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuIcon.textContent = "☰";
        });
    });
});
