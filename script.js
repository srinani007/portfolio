class Portfolio {
    constructor() {
        this.navToggle = document.querySelector('.nav__toggle');
        this.navList = document.querySelector('.nav__list');
        this.navOverlay = document.querySelector('.nav__overlay');
        this.init();
    }

    init() {
        this.addEventListeners();
        this.initSmoothScroll();
        this.initIntersectionObserver();
    }

    addEventListeners() {
        this.navToggle.addEventListener('click', () => this.toggleNav());
        this.navOverlay.addEventListener('click', () => this.closeNav());
        window.addEventListener('resize', () => this.handleResize());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeNav();
        });
    }

    toggleNav() {
        this.navList.classList.toggle('active');
        this.navOverlay.classList.toggle('active');
        this.navToggle.classList.toggle('active');
        document.body.style.overflow = this.navList.classList.contains('active') ? 'hidden' : 'auto';
    }

    closeNav() {
        this.navList.classList.remove('active');
        this.navOverlay.classList.remove('active');
        this.navToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    handleResize() {
        if (window.innerWidth > 768) {
            this.closeNav();
        }
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                const headerOffset = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: targetPosition - headerOffset,
                    behavior: 'smooth'
                });
            });
        });
    }

    initIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('[data-observe]').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});