// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.testimonial-controls .dot');
    const prevBtn = document.querySelector('.testimonial-controls .prev-btn');
    const nextBtn = document.querySelector('.testimonial-controls .next-btn');
    let currentIndex = 0;
    let isAnimating = false;
    let testimonialInterval;

    // Function to show a specific testimonial
    function showTestimonial(index) {
        if (isAnimating) return;
        isAnimating = true;
        
        // Hide current testimonial
        testimonialItems[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        
        // Show new testimonial
        currentIndex = index;
        testimonialItems[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        
        // Release animation lock after transition completes
        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }

    // Auto slide functionality
    function startAutoSlide() {
        testimonialInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % testimonialItems.length;
            showTestimonial(nextIndex);
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(testimonialInterval);
    }

    // Set up event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (currentIndex !== index) {
                showTestimonial(index);
                stopAutoSlide();
                startAutoSlide();
            }
        });
    });

    // Set up navigation buttons
    prevBtn.addEventListener('click', () => {
        let prevIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(prevIndex);
        stopAutoSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        let nextIndex = (currentIndex + 1) % testimonialItems.length;
        showTestimonial(nextIndex);
        stopAutoSlide();
        startAutoSlide();
    });

    // Touch support for mobile devices
    const testimonialSlider = document.querySelector('.testimonials-slider');
    let startX, endX;
    
    testimonialSlider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopAutoSlide();
    }, {passive: true});
    
    testimonialSlider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        
        const threshold = 50; // Minimum swipe distance
        
        if (startX - endX > threshold) { // Swipe left
            let nextIndex = (currentIndex + 1) % testimonialItems.length;
            showTestimonial(nextIndex);
        } else if (endX - startX > threshold) { // Swipe right
            let prevIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
            showTestimonial(prevIndex);
        }
        
        startAutoSlide();
    }, {passive: true});

    // Pause on hover
    testimonialSlider.addEventListener('mouseenter', stopAutoSlide);
    testimonialSlider.addEventListener('mouseleave', startAutoSlide);

    // Start auto sliding
    startAutoSlide();
});
