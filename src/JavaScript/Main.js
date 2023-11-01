// Select the navigation bar element
const navbar = document.getElementById("navbar");
const navbarMin = document.querySelector(".navbar");
const subNav= document.getElementById("subNav");
const subNavMin = document.querySelector(".p-header");

// Add a scroll event listener
window.addEventListener("scroll", function () {
    // Check the scroll position
    if (window.scrollY > 80) { // Change 100 to the desired scroll position
        navbar.style.backgroundColor = "#0B0B09"; // Change to the desired background color
        subNav.style.backgroundColor="#0B0B09";
    } else {
        navbar.style.backgroundColor = "transparent"; // Restore the initial background color
        subNav.style.backgroundColor="transparent";
    }
});

// Toggle mobile menu
document.querySelector("#menu-icon").onclick = () => {
    navbarMin.classList.toggle("active");
    subNavMin.classList.remove("active");
};
document.querySelector("#menu-icon-2").onclick = () => {
    subNavMin.classList.toggle("active");
    navbarMin.classList.remove("active");
};

// Close mobile menu on scroll
window.onscroll = () => {
    navbarMin.classList.remove("active");
    subNavMin.classList.remove("active");
};







