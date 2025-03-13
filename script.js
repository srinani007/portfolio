// Smooth scrolling for nav links and close menu on mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close the hamburger menu after clicking a link on mobile
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle && window.innerWidth <= 768) {
            menuToggle.checked = false;
        }
    });
});

// Scroll-triggered animations with Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            if (entry.target.querySelector('.fade-in-text') || entry.target.querySelector('.slide-in') || entry.target.querySelector('.skill-card') || entry.target.querySelector('.project-card')) {
                entry.target.querySelectorAll('.fade-in-text, .slide-in, .skill-card, .project-card').forEach(element => {
                    element.classList.add('fade-in');
                });
            }
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

// Dynamic Skills Loading (Optional - Uncomment and configure if using Spring Boot backend)
// Fetch skills from backend API
/*
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:8080/api/skills') // Replace with your deployed backend URL
        .then(response => response.json())
        .then(skills => {
            const skillsGrid = document.getElementById('skills-grid');
            skills.forEach((skill, index) => {
                const skillCard = document.createElement('div');
                skillCard.className = 'skill-card';
                skillCard.textContent = skill;
                skillCard.style.animationDelay = `${(index + 1) * 0.1}s`; // Staggered delay
                skillsGrid.appendChild(skillCard);
            });
        })
        .catch(error => {
            console.error('Error fetching skills:', error);
            // Fallback to static skills if API fails
            const fallbackSkills = ['Java 17', 'Spring Boot', 'ReactJS', 'Python', 'TensorFlow', 'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Kafka', 'NLP'];
            const skillsGrid = document.getElementById('skills-grid');
            fallbackSkills.forEach((skill, index) => {
                const skillCard = document.createElement('div');
                skillCard.className = 'skill-card';
                skillCard.textContent = skill;
                skillCard.style.animationDelay = `${(index + 1) * 0.1}s`;
                skillsGrid.appendChild(skillCard);
            });
        });
});
*/

// Add loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Optional: Preload images to avoid layout shifts
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