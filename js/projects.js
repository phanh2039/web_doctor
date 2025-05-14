document.addEventListener('DOMContentLoaded', function() {
    // Project filtering functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filter = button.getAttribute('data-category');
            
            // Filter projects
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || filter === category) {
                    item.classList.remove('hide');
                    
                    // Add a slight delay for a staggered animation effect
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 100 * Array.from(projectItems).indexOf(item));
                    
                } else {
                    item.style.opacity = '0';
                    
                    setTimeout(() => {
                        item.classList.add('hide');
                    }, 300);
                }
            });
        });
    });
    
    // Initialize translation for project elements
    if (typeof changeLanguage === 'function') {
        const currentLang = localStorage.getItem('preferredLanguage') || 'vi';
        changeLanguage(currentLang);
    }
});
