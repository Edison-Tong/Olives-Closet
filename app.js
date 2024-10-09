// JavaScript to toggle dropdown visibility
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Retrieve the last clicked navbar option from localStorage
const lastActive = localStorage.getItem("activeLink");
const navLinks = document.querySelectorAll(".option");

// Set the active class based on the stored value
if (lastActive) {
    navLinks.forEach((link) => {
        if (link.getAttribute("href") === lastActive) {
            link.classList.add("active");
        }
    });
}

// Add event listeners to save the clicked link to localStorage
navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        localStorage.setItem("activeLink", this.getAttribute("href"));
    });
});
