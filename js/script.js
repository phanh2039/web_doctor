// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal with improved performance settings
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease',
        reset: false,
        mobile: true,
        useDelay: 'onload',
        viewFactor: 0.2
    });

    // Apply animations to elements
    sr.reveal('.section-title', {});
    sr.reveal('.about-image', { origin: 'left' });
    sr.reveal('.about-text', { origin: 'right', delay: 300 });
    sr.reveal('.expertise-card', { interval: 200 });
    sr.reveal('.timeline-item', { interval: 200 });
    
    // Add animations for new sections
    sr.reveal('.publication-card', { interval: 200 });
    sr.reveal('.project-item', { interval: 300, distance: '100px' });
    
    sr.reveal('.testimonial-controls', { delay: 400 });
    sr.reveal('.contact-info', { origin: 'left' });
    sr.reveal('.contact-form', { origin: 'right', delay: 300 });
    sr.reveal('.footer-content > div', { interval: 200, distance: '20px' });

    // Header scroll effect with debounce for better performance
    const header = document.querySelector('header');
    let scrollTimeout;
    
    function handleScroll() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);

    // Mobile menu toggle with improved UX
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Navigation active state based on scroll with debounce
    const sections = document.querySelectorAll('section');
    let navScrollTimeout;
    
    function updateNavigation() {
        if (navScrollTimeout) {
            window.cancelAnimationFrame(navScrollTimeout);
        }
        
        navScrollTimeout = window.requestAnimationFrame(function() {
            let current = '';
            const scrollPosition = window.scrollY + 200;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    window.addEventListener('scroll', updateNavigation);
    // Initial call to set active nav item
    updateNavigation();

    // Improved testimonial slider with touch support
    const testimonials = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const testimonialSlider = document.querySelector('.testimonials-slider');
    let currentIndex = 0;
    let startX, endX;
    let testimonialInterval;
    
    function showTestimonial(index) {
        testimonials.forEach(item => {
            item.classList.remove('active');
            item.setAttribute('aria-hidden', 'true');
        });
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        testimonials[index].setAttribute('aria-hidden', 'false');
        dots[index].classList.add('active');
    }
    
    function startAutoSlide() {
        testimonialInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(testimonialInterval);
    }
    
    // Add touch events for mobile swiping
    testimonialSlider.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        stopAutoSlide();
    }, false);
    
    testimonialSlider.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        
        if (startX - endX > 50) { // Swipe left
            currentIndex = (currentIndex + 1) % testimonials.length;
        } else if (endX - startX > 50) { // Swipe right
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        }
        
        showTestimonial(currentIndex);
        startAutoSlide();
    }, false);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showTestimonial(currentIndex);
            stopAutoSlide();
            startAutoSlide();
        });
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
        stopAutoSlide();
        startAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
        stopAutoSlide();
        startAutoSlide();
    });
    
    // Start auto-advance
    startAutoSlide();
    
    // Pause auto-advance on hover
    testimonialSlider.addEventListener('mouseenter', stopAutoSlide);
    testimonialSlider.addEventListener('mouseleave', startAutoSlide);

    // Back to top button with debounce
    const backToTopBtn = document.querySelector('.back-to-top');
    let backToTopTimeout;
    
    function updateBackToTopButton() {
        if (backToTopTimeout) {
            window.cancelAnimationFrame(backToTopTimeout);
        }
        
        backToTopTimeout = window.requestAnimationFrame(function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateBackToTopButton);
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Optimized number counter animation with IntersectionObserver
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;
    
    function countUp(entries) {
        const [entry] = entries;
        
        if (entry.isIntersecting && !counted) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                let count = 0;
                const duration = 2000; // ms
                const increment = target / (duration / 20);
                
                const timer = setInterval(() => {
                    count += increment;
                    stat.textContent = Math.floor(count);
                    
                    if (count >= target) {
                        stat.textContent = target;
                        clearInterval(timer);
                    }
                }, 20);
            });
            
            counted = true;
            observer.unobserve(entry.target); // Stop observing once counted
        }
    }
    
    // Use IntersectionObserver instead of scroll events
    const stats = document.querySelector('.stats-container');
    const observer = new IntersectionObserver(countUp, {
        root: null,
        threshold: 0.5,
        rootMargin: "0px"
    });
    
    if (stats) {
        observer.observe(stats);
    }

    // Form submission handler with proper validation
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (!isValid) {
                // Show error message
                const errorMessage = document.createElement('div');
                errorMessage.className = 'form-message error';
                errorMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Vui lòng điền đầy đủ thông tin!';
                
                // Remove existing messages
                const existingMessage = this.querySelector('.form-message');
                if (existingMessage) {
                    existingMessage.remove();
                }
                
                this.appendChild(errorMessage);
                
                setTimeout(() => {
                    errorMessage.remove();
                }, 3000);
                
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                this.reset();
                submitBtn.innerHTML = 'Gửi yêu cầu';
                submitBtn.disabled = false;
                
                // Show success message
                const formMessage = document.createElement('div');
                formMessage.className = 'form-message success';
                formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Yêu cầu của bạn đã được gửi thành công!';
                
                // Remove existing messages
                const existingMessage = this.querySelector('.form-message');
                if (existingMessage) {
                    existingMessage.remove();
                }
                
                this.appendChild(formMessage);
                
                setTimeout(() => {
                    formMessage.remove();
                }, 5000);
            }, 2000);
        });
        
        // Clear error on input
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('error');
            });
        });
    }

    // Optimized typing effect on hero section
    const heroText = document.querySelector('.hero-text p');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after hero section animation completes
        setTimeout(typeWriter, 1500);
    }

    // Optimized hover effect for expertise cards
    const expertiseCards = document.querySelectorAll('.expertise-card');
    
    expertiseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('animate__pulse')) {
                this.classList.add('animate__animated', 'animate__pulse');
            }
        });
        
        card.addEventListener('animationend', function() {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
    });

    // Optimized parallax effect for hero background with requestAnimationFrame
    const hero = document.querySelector('.hero');
    
    if (hero) {
        let parallaxTimeout;
        
        function updateParallax() {
            if (parallaxTimeout) {
                window.cancelAnimationFrame(parallaxTimeout);
            }
            
            parallaxTimeout = window.requestAnimationFrame(function() {
                const scrollPosition = window.scrollY;
                const translateY = scrollPosition * 0.4;
                hero.style.backgroundPosition = `center ${translateY}px`;
            });
        }
        
        // Only apply parallax on devices that can handle it well
        if (window.innerWidth > 768) {
            window.addEventListener('scroll', updateParallax);
        }
    }

    // Load images progressively for better performance
    function loadProgressiveImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.onload = () => img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('loaded');
            });
        }
    }
    
    // Initialize progressive image loading
    loadProgressiveImages();

    // Create dynamic scientific network connections
    function initializeNetworkAnimation() {
        const networkContainer = document.querySelector('.footer-particles');
        if (!networkContainer) return;
        
        const width = networkContainer.offsetWidth;
        const height = networkContainer.offsetHeight;
        const nodeCount = Math.floor(width * height / 15000); // Responsive node density
        
        const nodes = [];
        
        // Create nodes
        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div');
            node.className = 'node';
            
            const x = Math.random() * width;
            const y = Math.random() * height;
            
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            node.style.opacity = Math.random() * 0.5 + 0.1;
            
            nodes.push({
                element: node,
                x: x,
                y: y,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
            });
            
            networkContainer.appendChild(node);
        }
        
        // Animation loop
        function animate() {
            nodes.forEach(node => {
                // Update position
                node.x += node.speedX;
                node.y += node.speedY;
                
                // Bounce off edges
                if (node.x < 0 || node.x > width) node.speedX *= -1;
                if (node.y < 0 || node.y > height) node.speedY *= -1;
                
                // Update DOM
                node.element.style.left = `${node.x}px`;
                node.element.style.top = `${node.y}px`;
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }

    // Create floating medical symbol particles
    function createFloatingParticles() {
        const container = document.querySelector('.floating-particles-container');
        if (!container) return;
        
        setInterval(() => {
            const particle = document.createElement('div');
            particle.classList.add('floating-particle');
            
            const size = Math.random() * 10 + 5;
            const startX = Math.random() * window.innerWidth;
            const translateX = (Math.random() - 0.5) * 200;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${startX}px`;
            particle.style.bottom = `-${size}px`;
            particle.style.setProperty('--tx', `${translateX}px`);
            
            container.appendChild(particle);
            
            // Remove particle after animation completes
            setTimeout(() => {
                particle.remove();
            }, 15000);
        }, 3000);
    }

    // Initialize scientific background animations
    function initScientificBackgrounds() {
        initializeNetworkAnimation();
        createFloatingParticles();
        
        // Create dynamic data visualization effect for publications section
        const publicationsSection = document.querySelector('.publications');
        if (publicationsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-data');
                    } else {
                        entry.target.classList.remove('animate-data');
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(publicationsSection);
        }
    }

    // Initialize all scientific backgrounds when page is ready
    initScientificBackgrounds();
});