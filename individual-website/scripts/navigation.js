const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
    

hamburger.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevents unwanted clicks from closing the menu
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});

    // Ensure the hamburger is positioned at the end of the navbar
hamburger.style.position = "absolute";
hamburger.style.right = "20px";
hamburger.style.top = "15px";


