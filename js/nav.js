document.addEventListener("DOMContentLoaded", function () {
    const navIcon = document.getElementById("nav-icon");
    const navlink = document.getElementById("links");

    navIcon.addEventListener("click", function () {
        navlink.classList.toggle("active");
    });
});