// ================================================
// E-PORTFOLIO MAIN JAVASCRIPT
// ================================================

// ================================================
// 1. NAVIGATION & SCROLL BEHAVIOR
// ================================================

const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Add scrolled class to navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    mobileMenuBtn.innerHTML = mobileMenu.classList.contains('open')
        ? '<i class="fas fa-times text-2xl"></i>'
        : '<i class="fas fa-bars text-2xl"></i>';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
    });
});

// Scroll to top button functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================================
// 2. INTERSECTION OBSERVER FOR ANIMATIONS
// ================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and elements with animation
document.querySelectorAll('.reflection-card, .product-card, .concept-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// ================================================
// 3. SMOOTH SCROLL FOR ANCHOR LINKS
// ================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        e.preventDefault();

        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - navbar.offsetHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================================
// 4. ACTIVE NAVIGATION LINK INDICATOR
// ================================================

const updateActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navbar.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                navLinks.forEach(link => link.style.color = '');
                navLink.style.color = '#7c3aed';
            }
        }
    });
};

window.addEventListener('scroll', updateActiveNav);

// ================================================
// 5. LAZY LOADING FOR IMAGES (FUTURE USE)
// ================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ================================================
// 6. KEYBOARD NAVIGATION IMPROVEMENTS
// ================================================

document.addEventListener('keydown', (e) => {
    // Skip to main content with Tab key
    if (e.key === 'Tab' && e.ctrlKey) {
        const mainContent = document.querySelector('section');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Scroll to top with Home key
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Scroll to bottom with End key
    if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }
});

// ================================================
// 7. THEME DETECTION & PREFERENCE
// ================================================

const detectDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Listen for theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
});

// ================================================
// 8. PERFORMANCE MONITORING
// ================================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    });
}

// ================================================
// 9. PAGE VISIBILITY API
// ================================================

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Tab is now hidden');
    } else {
        console.log('Tab is now visible');
    }
});

// ================================================
// 10. INITIALIZATION
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('E-Portfolio loaded successfully');

    // Set initial active nav
    updateActiveNav();

    // Trigger animations for elements already in view
    document.querySelectorAll('.reflection-card, .product-card, .concept-box').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('fade-in-up');
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

// ================================================
// 11. UTILITY FUNCTIONS
// ================================================

// Copy to clipboard function (for future use)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ================================================
// 12. ENHANCED SCROLL PERFORMANCE
// ================================================

window.addEventListener('scroll', throttle(() => {
    updateActiveNav();
}, 100));

// ================================================
// 13. ACCESSIBILITY ENHANCEMENTS
// ================================================

// Add ARIA labels to interactive elements
const buttons = document.querySelectorAll('[href^="#"]');
buttons.forEach(btn => {
    if (!btn.getAttribute('aria-label')) {
        const text = btn.textContent.trim();
        btn.setAttribute('aria-label', `Navigate to ${text}`);
    }
});

// Focus visible polyfill for better keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ================================================
// 14. SERVICE WORKER REGISTRATION (OPTIONAL)
// ================================================

if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker for offline support
    // navigator.serviceWorker.register('/sw.js').then(reg => {
    //     console.log('Service Worker registered:', reg);
    // }).catch(err => {
    //     console.log('Service Worker registration failed:', err);
    // });
}

console.log('All JavaScript modules loaded successfully');
