// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close the mobile menu if open
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
        }
        // close the menu after clicking on a link on mobile 
        document.getElementById('mobile-menu').checked = false;
    });
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade');
    observer.observe(section);
});

// Add fade-in class in CSS via JS injection
const style = document.createElement('style');
style.innerHTML = `
    .fade { opacity: 0; transition: opacity 0.5s ease-in-out; }
    .fade-in { opacity: 1; }
`;
document.head.appendChild(style);

// Add loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});