// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Loading animation
    setTimeout(function() {
        document.querySelector('.loader-wrapper').classList.add('fade-out');
    }, 1500);

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Typewriter effect
    const typewriter = new Typed('.dynamic-text', {
        strings: ['Cybersecurity Specialist', 'Ethical Hacker', 'Penetration Tester', 'Digital Forensics Expert'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const cancel = document.getElementById('cancel');
    const dropdown = document.getElementById('dropdown');

    hamburger.addEventListener('click', function() {
        dropdown.classList.add('active');
    });

    cancel.addEventListener('click', function() {
        dropdown.classList.remove('active');
    });

    // Close dropdown when clicking on a link
    const navLinks = document.querySelectorAll('.dropdown .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            dropdown.classList.remove('active');
        });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.pointerEvents = 'none';
        }
    });

    // Skills category switching
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove active class from all categories
            skillCategories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            this.classList.add('active');
            
            // Here you would typically show/hide different skill sets
            // For now we'll just log the category
            console.log('Selected category:', this.dataset.category);
        });
    });

    // Animate stats counting
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            const increment = () => {
                current += step;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(increment);
                } else {
                    stat.textContent = target + '+';
                }
            };
            
            increment();
        });
    }
    
    // Only animate when stats are in view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelector('.stats').querySelectorAll('.stat-item').forEach(item => {
        statsObserver.observe(item);
    });

    // Tooltip positioning
    const toolItems = document.querySelectorAll('.tool-item');
    toolItems.forEach(tool => {
        tool.addEventListener('mouseenter', function() {
            const tooltip = this.getAttribute('data-tooltip');
            if (tooltip) {
                // You could enhance this with a custom tooltip implementation
            }
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For now we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});