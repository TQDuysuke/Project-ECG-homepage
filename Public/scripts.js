// Add fade-in animation for contributors
document.addEventListener("DOMContentLoaded", () => {
    const contributors = document.querySelectorAll(".contributor");
    contributors.forEach((contributor, index) => {
        contributor.style.animationDelay = `${index * 0.3}s`;
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Make the gradient follow the mouse
document.addEventListener("mousemove", (event) => {
    const gradient = document.querySelector(".gradient");
    const { clientX, clientY } = event;
    gradient.style.transform = `translate(${clientX - gradient.offsetWidth / 2}px, ${clientY - gradient.offsetHeight / 2}px)`;
});

// Enhanced slideshow functionality with corresponding content
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll(".slide");
    const contents = document.querySelectorAll(".team-content");
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        contents[index].classList.remove("active");
    });
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add("active");
    contents[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // Change image and content every 3 seconds
}
document.addEventListener("DOMContentLoaded", showSlides);

// Enhanced slideshow functionality for product images
let productSlideIndex = 0;
function showProductSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    productSlideIndex++;
    if (productSlideIndex > slides.length) productSlideIndex = 1;
    slides[productSlideIndex - 1].classList.add("active");
    setTimeout(showProductSlides, 3000); // Change image every 3 seconds
}
document.addEventListener("DOMContentLoaded", showProductSlides);

// Toggle navbar menu on mobile
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
