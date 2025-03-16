/* Global Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing:border-box; 
    font-family: 'Inter', sans-serif; /* Modern and widely used font */
    scroll-behavior: smooth; /* Enables smooth scrolling */
    -webkit-font-smoothing: antialiased; /* Improves font rendering on webkit browsers */
    -moz-osx-font-smoothing: grayscale; /* Improves font rendering on macOS */
}

/* Body Styles */
body {
    background: var(--bg-gradient, linear-gradient(135deg, #0a0a23, #1a1a3d));
    color: var(--text-color, #ffffff);
    font-family: var(--font-secondary, 'Inter', sans-serif);
    line-height: 1.8;
    overflow-x:hidden;
    font-size: 16px;
    transition: var(--transition, background 0.3s ease-in-out, color 0.3s ease-in-out);
    padding: 0 15px; /* Adds padding for better mobile view */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: absolute;
    width: 100%;
    height: 100%;
}

/* Responsive Typography */
html {
    font-size: 100%; /* Default font size for desktop */
}

@media (max-width: 768px) {
    html {
        font-size: 90%; /* Slightly smaller font size for mobile */
    }
}

@media (max-width: 480px) {
    html {
        font-size: 85%; /* Further reduced font size for smaller screens */
    }
}

/* Utility Classes */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px; /* Adds padding for mobile responsiveness */
}

.text-center {
    text-align: center;
}

.hidden {
    display: none !important;
}

/* Accessibility Improvements */
:focus {
    outline: 2px solid #00ffff;
    outline-offset: 2px;
}

a {
    color: inherit;
    text-decoration: none;
}

a:focus,
button:focus {
    outline: 2px solid #f7f7f7;
    outline-offset: 2px;
}
/* Replace lines 67-114 with this improved loader implementation */
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
  }
  
  .loader.hidden {
    opacity: 0;
    visibility: hidden;
  }
  
  .quantum-loader {
    display: flex;
    gap: 8px;
  }
  
  .quantum-dot {
    width: 20px;
    height: 20px;
    background: #00ffff;
    border-radius: 50%;
    animation: pulse 1.5s infinite ease-in-out;
  }
  
  .quantum-dot:nth-child(2) {
    animation-delay: 0.2s;
    background: #ff00ff;
  }
  
  .quantum-dot:nth-child(3) {
    animation-delay: 0.4s;
    background: #00ffff;
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
  }
body::before {
    content: "Loading...";
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 1.8rem;
    font-family: 'Orbitron', sans-serif;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(0, 255, 255, 0.6);
    animation: pulse 1.5s infinite;
    z-index: 9999; /* Ensures it stays above all other elements */
    background: rgba(0, 0, 0, 0.85); /* Adds a subtle background for better visibility */
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(254, 254, 254, 0.5);
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
        opacity: 0.9;
    }
}

@media (max-width: 768px) {
    body::before {
        font-size: 1.5rem;
        padding: 15px 25px;
    }
}

@media (max-width: 480px) {
    body::before {
        font-size: 1.2rem;
        padding: 10px 20px;
    }
}

  /* Header and Navigation */
  .neon-header {
    position:fixed;
    top: 0;
    width: 90%;
    padding: 10px;
    z-index: 1000;
    transition: var(--transition);
  }
  
  
  
  .responsive-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
  }
  
  .nav-brand {
    display:flex;
    align-items: center;
    gap: 20px;
  }
  
  .hologram-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: var(--transition);
  }
  
  .hologram-logo:hover {
    transform: scale(1.1);
  }
  

  
  .nav-items {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-link {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 700;
    padding: 8px 15px;
    border-radius: 5px;
    transition: var(--transition);
  }
  
  .nav-link:hover {
    background: var(--primary-color);
    color: #0a0a23;
  }
  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  
  .hamburger-line {
    width: 25px;
    height: 3px;
    background: var(--primary-color);
    margin: 5px 0;
    transition: var(--transition);
  }

/* Header Styles */
@media (max-width: 768px) {
    header .menu-toggle {
        display: block; /* Visible on smaller screens */
    }

    header .nav-links {
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

    header .nav-links.active {
        display: flex;
    }

    header .nav-links a {
        padding: 10px;
        text-align: center;
    }
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 20px;
    position: relative;
    background: rgba(76, 74, 74, 0.416); /* Semi-transparent background */
    border-radius: 10px; /* Smooth rounded corners */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); /* Adds depth */
    transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    z-index: 1000; /* Ensures it stays above other elements */
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
}
.nav-item.active {
  border-bottom: 2px solid white;
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
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

nav .menu-icon::before,
nav .menu-icon::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background: #00ffff;
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
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

/* Mobile View Adjustments */
@media (max-width: 768px) {
    nav {
        padding: 10px;;
    }

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
        z-index: 999; /* Ensures it stays above other elements */
    }

    nav .nav-links.active {
        display: flex;
    }

    nav .nav-links a {
        padding: 10px;
        text-align: center;
    }

    nav .menu-icon {
        width: 20px;
        height: 2px;
    }

    nav .menu-icon::before,
    nav .menu-icon::after {
        width: 20px;
        height: 2px;
    }
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
/* Add this around line 427 */
@media (max-width: 768px) {
    .nav-items {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      background: rgba(0, 0, 0, 0.95);
      width: 100%;
      flex-direction: column;
      border-radius: 0 0 10px 10px;
      padding: 15px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }
    
    .nav-items.active {
      display: flex;
    }
    
    .nav-link {
      width: 100%;
      text-align: center;
      padding: 12px 0;
    }
  }
.menu-toggle.active .menu-icon::before {
    transform: rotate(45deg) translate(5px, 5px); /* Creates an "X" shape */
}
  
.nav-brand {
    display: flex;
    align-items: center;


}

.hologram-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hologram-logo:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(255, 0, 255, 0.7);
}

.nav-menu {
    display:block;
    align-items: center;
}

.nav-items {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-link {
    color: var(--text-color, #fff);
    text-decoration: none;
    font-weight: 700;
    padding: 8px 15px;
    border-radius: 5px;
    transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
    background: var(--primary-color, #00ffff);
    color: #0a0a23;
    transform: scale(1.05);
}

.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

.hamburger-line {
    width: 25px;
    height: 3px;
    background: var(--primary-color, #00ffff);
    margin: 5px 0;
    transition: transform 0.3s ease, background 0.3s ease;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links li {
    display: flex;
}

.nav-links a {
    color: var(--text-color, #fff);
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s ease, transform 0.3s ease;
}

.nav-links a:hover {
    color: var(--primary-color, #00ffff);
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .nav-menu {
        flex-direction: column;
        align-items: flex-start;
    }

    .hamburger {
        display: block;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        gap: 10px;
        background: rgba(0, 0, 0, 0.95);
        padding: 10px;
        border-radius: 8px;
    }

    .nav-links.active {
        display: flex;
    }
}

.section {
    padding: 80px 20px;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
}

/* Video container to ensure full-screen coverage */
.video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

/* Video settings */
.video-container video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    object-fit: cover;
}
/* Add around line 568 */
@media (max-width: 768px) {
    .video-container video {
      /* This ensures mobile devices don't struggle with video playback */
      display: auto;
    }
    
    /* Add a fallback background for mobile */
    body {
      background: linear-gradient(135deg, #0a0a23, #1a1a3d);
    }
  }

/* Content styling */
.content {
    position: relative;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
    padding: 20px;
    border-radius: 10px;
}

/* Button styling */
.btn {
    display: inline-block;
    padding: 12px 24px;
    color: white;
    background: #00ffff;
    text-decoration: none;
    font-size: 18px;
    border-radius: 5px;
    transition: 0.3s ease;
}

.btn:hover {
    background: #ff00ff;
}  /* Replace line 603 with */
/* Replace line 603 with */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position: relative;
    padding: 120px 20px 40px; /* Increased top padding to account for fixed header */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;
  }
/* Gradient overlay for the section */
.section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
}
h1, h2, h3 {
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 15px;
}
/* Replace lines 627-635 with more responsive typography */
.hero-content h1 {
    font-size: clamp(2.5rem, 5vw, 5rem);
    margin-bottom: 20px;
    line-height: 1.2;
  }
  
  .animated-text {
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: 20px;
    /* rest of the styles remain the same */
  }
  
  @media (max-width: 480px) {
    .hero-content h1 {
      font-size: 2rem;
    }
    
    .animated-text {
      font-size: 1.2rem;
    }
  }

h1 { /* Replace lines 627-635 with more responsive typography */
    font-size: 48px; 
    color: #00ffff; 
    background: linear-gradient(45deg, #00ffff, #ff00ff); 
    -webkit-background-clip: text; 
    background-clip: text; 
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
    font-size: 22px; 
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
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;
}

.hero-content {
    width: 100%;
    max-width: auto;
    padding: auto;
    animation: fadeIn 2s ease-in-out;
}

.hero-content h1 {
    font-size: 3em;
    margin-bottom: 20px;
    line-height: 1.2;
}
.hero-content p {
    font-size: 2em;
    font-weight: 300;
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 20px;
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.animated-text {
  font-size: 2em;
  margin-bottom: 20px;
  font-family: 'Orbitron', sans-serif;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  white-space: nowrap;
  border-right: 3px solid #00ffff;
  width: auto;
  animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
  animation-fill-mode: forwards;
  font-weight: 1000;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.5);
  letter-spacing: 1px;
}

/* Updated animation */
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  0%, 100% { border-color: transparent; }
  50% { border-color: #00ffff; }
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
    padding: 10px 20px; /* Adjusted for better responsiveness */
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 0 8px rgba(0, 255, 255, 0.4); /* Reduced intensity for better aesthetics */
}

@media (max-width: 768px) {
    .cta-btn.secondary {
        font-size: 0.9em; /* Smaller font size for mobile */
        padding: 8px 16px; /* Reduced padding for smaller screens */
        box-shadow: 0 0 6px rgba(0, 255, 255, 0.3); /* Softer shadow for mobile */
    }
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
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
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
} /* Replace lines 757-772 with this more responsive grid layout */
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
/* Replace lines 757-772 with this more responsive grid layout */
.skills-grid, .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  }
  
  @media (max-width: 768px) {
    .skills-grid, .projects-grid {
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      gap: 15px;
      padding: 15px;
    }
  }
  
  @media (max-width: 480px) {
    .skills-grid, .projects-grid {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 10px;
      padding: 10px;
    }
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
    left: -8px;
    top: 0;
    width: 16px;
    height: 16px;
    background: #00ffff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}
.timeline-item time {
    font-size: 16px;
    color: #00ffff;
    font-family: 'Orbitron', sans-serif;
    position: absolute;
    left: -20px;
    top: 0;
}
.timeline-item h3 {
    font-size: 24px;
    color: #00ffff;
    margin-bottom: 5px;
    font-family: 'Orbitron', sans-serif;
}
.timeline-item p {
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 10px;
    font-family: 'Inter', sans-serif;
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
}


  /* Responsive Design */ /* Adjustments for smaller screens */
  @media (max-width: 768px) {
    .hamburger {
      display:block;
      padding: 40px;;
    }
  
    .nav-items {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 0;
      background: var(--glass-bg, rgba(0, 0, 0, 0.8)); /* Fallback added */
      padding: 10px 20px;
      box-shadow: var(--shadow, 0 4px 15px rgba(0, 0, 0, 0.5)); /* Fallback added */
    }
  
    .nav-items.active {
      display: flex;
    }
  
    .hero-content h1 {
      font-size: 2rem;
    }
  
    .neon-button {
      font-size: 0.9rem;
      padding: 8px 16px;
    }
  }
  /* Contact Section */ /* Add these styles around line 1050 */
  /* Add these styles around line 1050 */
@media (max-width: 768px) {
    .contact-wrapper {
      padding: 15px;
      max-width: 100%;
    }
    
    .contact-card {
      gap: 15px;
    }
    
    .contact-link {
      font-size: 1rem;
      padding: 8px 15px;
    }
    
    .form-group input,
    .form-group textarea {
      padding: 10px;
    }
    
    .submit-btn {
      padding: 10px 20px;
      font-size: 1rem;
    }
  }
#contact {
    padding: 80px 20px;
    color: #f0f0f0;
    text-align: center;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    font-family: 'Orbitron', sans-serif;
}

.contact-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 255, 255, 0.2);
}

.contact-card {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #f0f0f0;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 10px 20px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    transition: background 0.3s ease, transform 0.3s ease;
}

.contact-link:hover {
    background: rgba(0, 255, 255, 0.2);
    transform: translateY(-5px);
}

.contact-link i {
    font-size: 1.5rem;
    color: #00ffff;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.form-group input,
.form-group textarea {
    padding: 12px;
    border: 2px solid rgba(0, 255, 255, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: #f0f0f0;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #00ffff;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    outline: none;
}

.form-group textarea {
    resize: vertical;
    min-height: 150px;
}

.submit-btn {
    padding: 12px 24px;
    background: linear-gradient(45deg, #00ffff, #ff00ff);
    color: #0a0a23;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.submit-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 255, 255, 0.5);
}
/* Add this at the end of your CSS file (around line 1200) */
@media (min-width: 1200px) {
    /* Large desktop styles */
    .container {
      max-width: 1600px;
    }
    
    .section {
      padding: 100px 30px;
    }
  }
  
  @media (max-width: 992px) {
    /* Medium screens and tablets */
    .hero-content h1 {
      font-size: 3rem;
    }
    
    .animated-text {
      font-size: 1.8rem;
    }
    
    .section {
      padding: 60px 20px;
    }
    
    .cta-btn {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    /* Small mobile screens */
    h1 {
      font-size: 28px;
    }
    
    h2 {
      font-size: 24px;
    }
    
    h3 {
      font-size: 18px;
    }
    
    .section {
      padding: 40px 15px;
    }
    
    .hero-content h1 {
      font-size: 1.8rem;
    }
    
    .timeline-item {
      padding-left: 15px;
      margin-bottom: 30px;
    }
    
    .timeline-item h3 {
      font-size: 18px;
    }
  }

@media (max-width: 480px) {
    .section-title { font-size: 2rem; }
    .contact-link { font-size: 1rem; padding: 8px 15px; }
    .contact-link i { font-size: 1.2rem; }
    .form-group input, .form-group textarea { padding: 10px; font-size: 0.9rem; }
    .submit-btn { padding: 10px 20px; font-size: 1rem; }
  }
  @media (max-width: 1024px) {
    .hero { padding: 100px 20px; }
    .hero-content h1 { font-size: 3.5em; }
    .hero-content p { font-size: 2em; }
    .animated-text { font-size: 1.8em; }
  }
  @media (max-width: 1024px) {
    .cta-btn { font-size: 1.2rem; padding: 10px 20px; }
    .hero-image img { width: 150px; height: 150px; }
  }
  @media (max-width: 1024px) {
    .hero-content h1 { font-size: 3.5em; }
    .hero-content p { font-size: 2em; }
    .animated-text { font-size: 1.8em; }
  }
    .cta-btn { font-size: 1.2rem; padding: 10px 20px; }
    .hero-image img { width: 150px; height: 150px; }
    .hero { padding: 100px 20px; }
  /* Responsive Design for Smaller Screens */
  
  /* Adjustments for smaller screens */
  
  @media (max-width: 768px) {
    .section-title { font-size: 2rem; }
    .contact-link { font-size: 1rem; padding: 8px 15px; }
    .contact-link i { font-size: 1.2rem; }
    .form-group input, .form-group textarea { padding: 10px; font-size: 0.9rem; }
    .submit-btn { padding: 10px 20px; font-size: 1rem; }
    .hero { padding: 80px 20px 40px; }
    .hero-content h1 { font-size: 1.8em; }
    .hero-content .animated-text { font-size: 1.5em; }
    .cta-btn { font-size: 0.9em; padding: 8px 16px; margin: 5px; }
    .hero-image img { width: 120px; height: 120px; }
    h1 { 
      font-size: 28px; 
      font-weight: bold; 
      color: #00ffff; 
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.5); 
      line-height: 1.4; 
    }
    h2 { 
      font-size: 24px; 
      font-weight: 600; 
      color: #ff00ff; 
      text-shadow: 0 0 8px rgba(255, 0, 255, 0.4); 
      line-height: 1.5; 
    }
    h3 { 
      font-size: 18px; 
      font-weight: 500; 
      color: #f0f0f0; 
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); 
      line-height: 1.6; 
    }
    .section { padding: 40px 15px; background-attachment: scroll; }
    .skills-grid, .projects-grid { grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; }
    .skill-card, .project-card { padding: 15px; }
  }
 

  /* Footer */
  footer {
    background: rgba(0, 0, 0, 0.8);
    color: #f0f0f0;
    text-align: center;
    padding: 20px;
    position: relative;
    z-index: 1000;
  }
  footer p {
    font-size: 1rem;
    color: #00ffff;
    margin: 0;
    font-family: 'Orbitron', sans-serif;
  }
  footer a {
    color: #00ffff;
    text-decoration: none;
    font-weight: bold;
  }
  footer a:hover {
    color: #ff00ff;
    text-decoration: underline;
  }
  footer .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
  }
  footer .social-icons a {
    color: #00ffff;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
  footer .social-icons a:hover {
    color: #ff00ff;
  }
  footer .social-icons i {
    transition: transform 0.3s ease;
  }
  footer .social-icons a:hover i {
    transform: scale(1.2);
  }
  footer .social-icons a:hover i {
    color: #ff00ff;
  }
  footer .social-icons a:hover i {
    transform: rotate(360deg);
  }
  footer .social-icons a:hover i {
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }
  footer .social-icons a:hover i {
    transform: scale(1.2);
    color: #ff00ff;
  }
  footer .social-icons a:hover i {
    transition: transform 0.3s ease, color 0.3s ease;
  }
  
  /* Animations */
  @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  @keyframes typing { from { width: 0; } to { width: 100%; } }
  @keyframes blink-caret { from, to { border-color: transparent; } 50% { border-color: #00ffff; } }
  @keyframes fadeInText { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
  @keyframes scrollDown { 0% { top: 5px; opacity: 1; } 100% { top: 15px; opacity: 0; } }