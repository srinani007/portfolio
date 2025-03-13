// Smooth scrolling for nav links and close menu on mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close the hamburger menu after clicking a link on mobile
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Scroll-triggered animations with Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.querySelectorAll('.fade-in-text, .skill-card, .project-card').forEach(element => {
                element.classList.add('fade-in');
            });
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade');
    observer.observe(section);
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