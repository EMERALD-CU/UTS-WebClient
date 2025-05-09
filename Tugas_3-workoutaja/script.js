document.addEventListener("DOMContentLoaded", function () {
    // Cache DOM elements
    const startButton = document.getElementById("start-btn");
    const navLinks = document.querySelectorAll("nav ul li a");
    const pageContent = document.querySelector("main");
    const heroImage = document.querySelector(".hero-image");
    
    // Check if elements exist before adding event listeners
    if (!startButton || !navLinks.length || !pageContent || !heroImage) {
        console.error("One or more required elements not found");
        return;
    }

    // Button interaction logic
    let isClicked = false;
    const buttonColors = {
        default: "#69B99D",
        clicked: "#3d6655",
        hover: "#4a8a77"
    };

    function handleButtonClick() {
        isClicked = true; 
        startButton.style.backgroundColor = buttonColors.clicked;
        
        setTimeout(() => {
            startButton.style.backgroundColor = buttonColors.default;
        }, 300);
    }

    function handleButtonHover() {
        if (isClicked) {
            startButton.style.backgroundColor = buttonColors.hover;
        }
    }

    function handleButtonLeave() {
        if (isClicked) {
            startButton.style.backgroundColor = buttonColors.default;
        }
    }

    // Navigation logic
    function handleNavClick(clickedLink) {
        navLinks.forEach(link => {
            link.style.opacity = link === clickedLink ? "1" : "0.5";
            link.setAttribute('aria-current', link === clickedLink ? 'page' : 'false');
        });
    }

    // Page load animation
    function initPageLoad() {
        pageContent.classList.add("visible");
        heroImage.classList.add("visible");
        document.body.classList.add("loaded");
    }

    // Event listeners
    startButton.addEventListener("click", handleButtonClick);
    startButton.addEventListener("mouseenter", handleButtonHover);
    startButton.addEventListener("mouseleave", handleButtonLeave);

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Remove if you want actual navigation
            handleNavClick(this);
        });
    });

    // Initialize page with slight delay
    setTimeout(initPageLoad, 200);
});