/* navbar.js */
document.addEventListener("DOMContentLoaded", () => {
    const navbarToggle = document.querySelector(".navbar-toggle");

    navbarToggle.addEventListener("click", () => {
        const navbarMenu = document.querySelector(".navbar ul");
        navbarMenu.classList.toggle("show");
    });
});
