// Smooth scrolling for nav links and close menu on mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close the hamburger menu after clicking a link on mobile
        if (window.innerWidth <= 768) {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Scroll-triggered animations with Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            const elementsToFade = entry.target.querySelectorAll('.fade-in-text, .skill-card, .project-card');
            if (elementsToFade.length) {
                elementsToFade.forEach(element => element.classList.add('fade-in'));
            }
        }
    });    
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    if (navLinks && menuToggle && !navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});


// Add loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Preload images to avoid layout shifts
const images = [
    'logo.jpg',
    'hero-bg.jpg',
    'avatar.jpg',
    'about-bg.jpg',
    'skills-bg.jpg',
    'experience-bg.jpg',
    'projects-bg.jpg',
    'achievements-bg.jpg',
    'contact-bg.jpg'
];

images.forEach(src => {
    const img = new Image();
    img.src = src;
});