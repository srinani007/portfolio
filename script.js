* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif; /* Modern and widely used font */
    scroll-behavior: smooth; /* Enables smooth scrolling */
    -webkit-font-smoothing: antialiased; /* Improves font rendering on webkit browsers */
    -moz-osx-font-smoothing: grayscale; /* Improves font rendering on macOS */
}
body {
    background: linear-gradient(135deg, #0a0a23, #1a1a3d);
    color: #f0f0f0;
    line-height: 1.8;
    overflow-x: hidden;
    font-size: 16px;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
}

body::before {
    content: "Loading...";
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #00ffff;
    font-size: 1.5rem;
    font-family: 'Orbitron', sans-serif;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5);
    animation: pulse 1.5s infinite;
}

body.loaded::before {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
}

@keyframes pulse {
    0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    50% {
        transform: translate(-50%, -50%) scale(1.1);
        opacity: 0.8;
    }
}

header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 15px 20px;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.85); /* Modern semi-transparent background */
    backdrop-filter: blur(10px); /* Adds a glassmorphism effect */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border for separation */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* Adds depth */
    transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transitions */
}
header:hover {
    background: rgba(0, 0, 0, 0.95); /* Slightly darker on hover */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7); /* Enhanced shadow on hover */
}

header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
    backdrop-filter: blur(10px); /* Adds a modern glassmorphism effect */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border for separation */
    z-index: -1;
    transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out; /* Smooth transitions */
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 20px;
    position: relative; /* Ensures proper positioning */
    background: rgba(0, 0, 0, 0.85); /* Adds a semi-transparent background */
    backdrop-filter: blur(10px); /* Modern glassmorphism effect */
    border-radius: 10px; /* Smooth rounded corners */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); /* Adds depth */
    transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transitions */
}

nav:hover {
    background: rgba(0, 0, 0, 0.95); /* Slightly darker on hover */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7); /* Enhanced shadow on hover */
}

nav .logo {
    font-family: 'Orbitron', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #00ffff;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: color 0.3s ease-in-out;
}

nav .logo:hover {
    color: #ff00ff; /* Adds a modern hover effect */
}

nav .menu-toggle {
    display: none; /* Hidden by default for larger screens */
    background: none;
    border: none;
    cursor: pointer;
}

nav .menu-icon {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #00ffff;
    margin: 5px 0;
    position: relative;
    transition: transform 0.3s ease-in-out;
}

nav .menu-icon::before,
nav .menu-icon::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background: #00ffff;
    transition: transform 0.3s ease-in-out;
}

nav .menu-icon::before {
    top: -8px;
}

nav .menu-icon::after {
    bottom: -8px;
}

nav .menu-toggle.active .menu-icon {
    background: transparent;
}

nav .menu-toggle.active .menu-icon::before {
    transform: rotate(45deg) translate(5px, 5px);
}

nav .menu-toggle.active .menu-icon::after {
    transform: rotate(-45deg) translate(5px, -5px);
}

nav .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

nav .nav-links a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    padding: 8px 15px;
    border-radius: 5px;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
}

nav .nav-links a:hover {
    background: #00ffff;
    color: #0a0a23;
}

@media (max-width: 768px) {
    nav .menu-toggle {
        display: block; /* Visible on smaller screens */
    }

    nav .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        border-radius: 10px;
        padding: 10px 20px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    }

    nav .nav-links.active {
        display: flex;
    }

    nav .nav-links a {
        padding: 10px;
        text-align: center;
    }
}
.menu-icon {
    display: block;
    width: 30px;
    height: 4px;
    background-color: #00ffff; /* Modern neon color */
    margin: 6px 0;
    border-radius: 2px; /* Smooth rounded edges */
    position: relative;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
    box-shadow: 0 2px 5px rgba(0, 255, 255, 0.5); /* Adds depth */
}

.menu-icon::before,
.menu-icon::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background-color: #00ffff; /* Matches the main bar */
    border-radius: 2px;
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    box-shadow: 0 2px 5px rgba(0, 255, 255, 0.5);
}

.menu-icon::before {
    top: -10px;
}

.menu-icon::after {
    bottom: -10px;
}

.menu-toggle.active .menu-icon {
    background-color: transparent; /* Hides the middle bar */
    box-shadow: none;
}

.menu-toggle.active .menu-icon::before {
    transform: rotate(45deg) translate(5px, 5px); /* Creates an "X" shape */
}

.menu-toggle.active .menu-icon::after {
    transform: rotate(-45deg) translate(5px, -5px); /* Creates an "X" shape */
}

.logo-img {
    width: 50px;
    height: 50px;
    border-radius: 50%; /* Adds a circular shape for a modern look */
    box-shadow: 0 4px 10px rgba(0, 255, 255, 0.5); /* Adds depth with a glowing effect */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth hover effect */
}

.logo-img:hover {
    transform: scale(1.1); /* Slight zoom on hover */
    box-shadow: 0 6px 15px rgba(0, 255, 255, 0.7); /* Enhanced glow on hover */
}

.logo {
    font-family: 'Orbitron', sans-serif;
    font-size: 24px; /* Slightly larger for better readability */
    font-weight: 800; /* Bolder for emphasis */
    color: #00ffff;
    text-transform: uppercase;
    letter-spacing: 3px; /* Increased spacing for a sleek look */
    background: linear-gradient(45deg, #00ffff, #ff00ff); /* Modern gradient effect */
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; /* Makes the gradient visible */
    text-shadow: 2px 2px 10px rgba(0, 255, 255, 0.5), 2px 2px 15px rgba(255, 0, 255, 0.5); /* Neon glow effect */
    transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out; /* Smooth transitions */
}

.logo:hover {
    color: #ff00ff; /* Changes color on hover */
    text-shadow: 3px 3px 15px rgba(255, 0, 255, 0.7), 3px 3px 20px rgba(0, 255, 255, 0.7); /* Enhanced glow on hover */
}

.nav-links {
    list-style: none;
    display: flex;
    justify-content: space-around;
}

.nav-links li {
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s, transform 0.3s;
}

.nav-links a:hover {
    color: #00ffff;
    transform: scale(1.05);
}
.section {
    padding: 80px 20px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

#home { 
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(17, 17, 17, 0.8)), url('hero-bg.jpg'); 
    background-blend-mode: overlay; 
}
#about { 
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(17, 17, 17, 0.8)), url('about-bg.jpg'); 
    background-blend-mode: overlay; 
}
#skills { 
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(17, 17, 17, 0.8)), url('skills-bg.jpg'); 
    background-blend-mode: overlay; 
}
#experience { 
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(17, 17, 17, 0.8)), url('experience-bg.jpg'); 
    background-blend-mode: overlay; 
}
#projects { 
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(17, 17, 17, 0.8)), url('projects-bg.jpg'); 
    background-blend-mode: overlay; 
}
#achievements { 
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(17, 17, 17, 0.8)), url('achievements-bg.jpg'); 
    background-blend-mode: overlay; 
}
#contact { 
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(17, 17, 17, 0.8)), url('contact-bg.jpg'); 
    background-blend-mode: overlay; 
}

.section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    z-index: -1;
}
h1, h2, h3 {
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 15px;
}

h1 { 
    font-size: 48px; 
    color: #00ffff; 
    background: linear-gradient(45deg, #00ffff, #ff00ff); 
    background-clip: text; 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    text-shadow: 2px 2px 10px rgba(0, 255, 255, 0.5), 2px 2px 15px rgba(255, 0, 255, 0.5);
    animation: fadeInText 1.5s ease-in-out;
}
h2 { 
    font-size: 36px; 
    color: #00ffff; 
    text-shadow: 1px 1px 5px rgba(0, 255, 255, 0.5); 
}
h3 { 
    font-size: 24px; 
    color: #ffffff; 
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.5); 
}

.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position: relative;
    padding-top: 80px; /* Account for fixed header */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(17, 17, 17, 0.8)), url('hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;
}

.hero-content {
    width: 100%;
    max-width: 800px;
    padding: 20px;
    animation: fadeIn 2s ease-in-out;
}

.hero-content h1 {
    font-size: 3em;
    margin-bottom: 15px;
    line-height: 1.2;
}

.animated-text {
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #f4eaea;
    overflow: hidden;
    border-right: 3px solid #00ffff;
    white-space: nowrap;
    padding: 0 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    animation: fadeIn 2s ease-in-out, typing 3s steps(40, end) infinite, blink-caret 0.75s step-end infinite;
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
    background-clip: text;
    -webkit-background-clip: text;
}

.cta-btn {
    display: inline-block;
    padding: 12px 25px;
    background: linear-gradient(45deg, #00ffff, #ff00ff);
    color: #0a0a23;
    text-decoration: none;
    border-radius: 8px;
    margin: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
    font-size: 1.1em;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0, 255, 255, 0.5);
}

.cta-btn.secondary {
    margin-left: 10px;
    background: transparent;
    border: 2px solid #00ffff;
    color: #00ffff;
    font-size: 1em;
    padding: 12px 25px;
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.cta-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 255, 255, 0.7);
}

.hero-image {
    margin-top: 30px;
    animation: fadeIn 2s ease-in-out;
}

.hero-image img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 4px solid #00ffff;
    animation: float 3s ease-in-out infinite, fadeIn 2s ease-in-out;
    box-shadow: 0 4px 15px rgba(0, 255, 255, 0.5);
}

.scroll-indicator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #00ffff;
    font-family: 'Orbitron', sans-serif;
    font-size: 14px;
}

.scroll-icon {
    width: 15px;
    height: 25px;
    margin: 0 auto;
    border: 2px solid #00ffff;
    border-radius: 10px;
    position: relative;
}

.scroll-icon::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 6px;
    background: #00ffff;
    animation: scrollDown 1.5s infinite;
}
.skills-grid, .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.skill-card, .project-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    padding: 25px;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 10px rgba(0, 255, 255, 0.2);
}

.skill-card:hover, .project-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 6px 20px rgba(0, 255, 255, 0.4);
}

.timeline {
    padding: 20px;
    list-style: none;
    position: relative;
    border-left: 2px solid rgba(0, 255, 255, 0.5);
}

.timeline-item {
    margin-bottom: 40px;
    position: relative;
    padding-left: 20px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 0;
    width: 12px;
    height: 12px;
    background: #00ffff;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

footer {
    text-align: center;
    padding: 20px;
    background: #000;
    color: #fff;
    font-family: 'Orbitron', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    border-top: 2px solid rgba(0, 255, 255, 0.5);
}

.fade {
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
}

.fade-in {
    opacity: 1;
}

.fade-in-text {
    opacity: 0;
    animation: fadeInText 1.2s ease-in-out forwards;
}
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #00ffff; }
}

@keyframes fadeInText {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}

@keyframes scrollDown {
    0% { top: 5px; opacity: 1; }
    100% { top: 15px; opacity: 0; }
}

@media (max-width: 768px) {
    header {
        padding: 10px 15px;
    }

    .logo-img {
        width: 30px;
        height: 30px;
    }

    .logo {
        font-size: 18px;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 50px;
        left: 0;
        background: rgba(0, 0, 0, 0.95);
        border-radius: 8px;
        padding: 10px 0;
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links li {
        margin: 10px 0;
        text-align: center;
    }

    .menu-toggle {
        display: block;
        background: none;
        border: none;
        cursor: pointer;
    }

    .menu-icon {
        display: block;
        width: 20px;
        height: 2px;
        background: #00ffff;
        position: relative;
    }

    .menu-icon::before,
    .menu-icon::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background: #00ffff;
        transition: transform 0.3s ease-in-out;
    }

    .menu-icon::before {
        top: -6px;
    }

    .menu-icon::after {
        bottom: -6px;
    }

    .menu-toggle.active .menu-icon::before {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .menu-toggle.active .menu-icon::after {
        transform: rotate(-45deg) translate(5px, -5px);
    }

    .hero {
        height: auto;
        padding: 80px 20px 40px;
    }

    .hero-content h1 {
        font-size: 1.8em;
    }

    .animated-text {
        font-size: 1em;
        margin-bottom: 15px;
        padding: 0 5px;
    }

    .cta-btn {
        font-size: 0.9em;
        padding: 8px 16px;
        margin: 5px;
    }

    .hero-image img {
        width: 120px;
        height: 120px;
    }

    h1 {
        font-size: 28px;
    }

    h2 {
        font-size: 24px;
    }

    h3 {
        font-size: 16px;
    }

    .section {
        padding: 40px 15px;
        background-attachment: scroll;
    }

    .skills-grid,
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 15px;
    }

    .skill-card,
    .project-card {
        padding: 15px;
    }

    .timeline-item {
        margin-bottom: 20px;
    }
}