// JavaScript to toggle dropdown visibility
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// // JavaScript to handle active state on navbar links
// const navLinks = document.querySelectorAll(".option");
// navLinks.forEach((link) => {
//   link.addEventListener("click", function () {
//     // Remove 'active' class from all links
//     navLinks.forEach((link) => link.classList.remove("active"));

//     // Add 'active' class to the clicked link
//     this.classList.add("active");
//   });
// });

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
