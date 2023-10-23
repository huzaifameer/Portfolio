// Select the navigation bar element
const navbar = document.getElementById("navbar");
const navbarMin = document.querySelector(".navbar");

// Add a scroll event listener
window.addEventListener("scroll", function () {
    // Check the scroll position
    if (window.scrollY > 100) { // Change 100 to the desired scroll position
        navbar.style.backgroundColor = "#011321"; // Change to the desired background color
    } else {
        navbar.style.backgroundColor = "transparent"; // Restore the initial background color
    }
});

// Toggle mobile menu
document.querySelector("#menu-icon").onclick = () => {
    navbarMin.classList.toggle("active");
};

// Close mobile menu on scroll
window.onscroll = () => {
    navbarMin.classList.remove("active");
};







