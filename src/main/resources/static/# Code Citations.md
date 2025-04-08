# Code Citations

## License: unknown
https://github.com/DaniyarOtynshin/mesto-react/tree/4c895d8b106e4d1da335ee770f8385f75a7a5fa3/src/blocks/popup-image/popup-image.css

```
fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:
```


## License: unknown
https://github.com/dochardi/dochardi.github.io/tree/8021782c86ce2265e509d951bff6a0b1ec68ca31/theme/style.css

```
video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit:
```

:root {
  --primary-color: #00ffff;
  --secondary-color: #ff00ff;
  --text-color: #fff;
  --background-color: rgba(0, 0, 0, 0.7);
  --transition: 0.3s ease;
  --font-family: 'Orbitron', sans-serif;
}

body {
  font-family: var(--font-family);
}

.section {
  padding: 100px 30px;
}

@media (max-width: 768px) {
  .hero-content p {
    font-size: 1.5em;
  }

  .cta-btn,
  .cta-btn.secondary {
    font-size: 0.9em;
    padding: 8px 16px;
  }

  .scroll-indicator {
    bottom: 10px;
    font-size: 12px;
  }

  .hero-content h1 {
    font-size: 1.8em;
  }

  .hero-image img {
    width: 120px;
    height: 120px;
  }

  .section {
    padding: 40px 15px;
  }
}

@media (max-width: 480px) {
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

@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 3.5em;
  }

  .hero-content p {
    font-size: 2em;
  }

  .animated-text {
    font-size: 1.8em;
  }

  .cta-btn {
    font-size: 1.2rem;
    padding: 10px 20px;
  }

  .hero-image img {
    width: 150px;
    height: 150px;
  }
}

@media (min-width: 1200px) {
  .section {
    padding: 100px 30px;
  }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: var(--primary-color);
  font-family: var(--font-family);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.scroll-indicator p {
  margin: 0;
  padding: 0;
}

.scroll-icon {
  width: 15px;
  height: 25px;
  margin-top: 5px;
  border: 2px solid var(--primary-color);
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
  background: var(--primary-color);
  animation: scrollDown 1.5s infinite;
}

/* Animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: var(--primary-color);
  }
}

@keyframes fadeInText {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrollDown {
  0% {
    top: 5px;
    opacity: 1;
  }

  100% {
    top: 15px;
    opacity: 0;
  }
}

