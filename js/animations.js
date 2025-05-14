/**
 * Advanced animation system with enhanced color scheme
 * Colors: Rich navy blue, gold, teal palette with complementary accents
 */
document.addEventListener('DOMContentLoaded', function() {
    // Add color pulse animations to certain elements
    addColorPulseEffects();
    
    // Add smooth color transitions to expertise cards
    addExpertiseColorTransitions();
    
    // Add 3D parallax effect to hero section
    add3DParallaxEffect();
    
    // Add 3D background with blue gradient to hero section
    add3DMedicalGlobe();
});

/**
 * Add subtle color pulse animations to key elements
 */
function addColorPulseEffects() {
    // Hero section special elements
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        heroTitle.style.textShadow = '0 0 1px rgba(15, 44, 82, 0.2)';
        heroTitle.style.animation = 'titlePulse 3s infinite alternate';
    }
    
    // Add glowing effect to buttons
    const mainButtons = document.querySelectorAll('.btn:not(.btn-small)');
    mainButtons.forEach((btn, index) => {
        // Alternate button glow colors
        const colorClass = index % 4 === 0 ? 'primary-glow' : 
                           index % 4 === 1 ? 'teal-glow' : 
                           index % 4 === 2 ? 'gold-glow' : 'burgundy-glow';
        btn.classList.add(colorClass);
    });
    
    // Add shine effect to stats
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)';
            this.style.background = 'linear-gradient(120deg, #ffffff, #f8f9fa, #ffffff)';
            this.style.backgroundSize = '200% 100%';
            this.style.animation = 'shine 1.5s ease-in-out';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.animation = '';
            this.style.background = '#ffffff';
        });
    });
}

/**
 * Add smooth color transitions to expertise cards
 */
function addExpertiseColorTransitions() {
    const expertiseCards = document.querySelectorAll('.expertise-card');
    
    expertiseCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            const iconElement = this.querySelector('.icon i');
            if (!iconElement) return;
            
            // Add rotating icon effect
            iconElement.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
            iconElement.style.transform = 'rotateY(360deg)';
            
            // Change icon color based on card index
            if (index === 0) {
                iconElement.style.color = '#ffffff';
            } else if (index === 1) {
                iconElement.style.color = '#ffffff';
            } else if (index === 2) {
                iconElement.style.color = '#0F2C52';
            } else {
                iconElement.style.color = '#ffffff';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const iconElement = this.querySelector('.icon i');
            if (iconElement) {
                iconElement.style.transform = 'rotateY(0deg)';
            }
        });
    });
}

/**
 * Add 3D parallax effect to the hero section
 */
function add3DParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create the 3D layers for the background if they don't exist
    if (!document.querySelector('.hero-bg-3d-layer-1')) {
        const layer1 = document.createElement('div');
        layer1.className = 'hero-bg-3d-layer-1';
        hero.appendChild(layer1);
        
        const layer2 = document.createElement('div');
        layer2.className = 'hero-bg-3d-layer-2';
        hero.appendChild(layer2);
        
        const layer3 = document.createElement('div');
        layer3.className = 'hero-bg-3d-layer-3';
        hero.appendChild(layer3);
        
        const layer4 = document.createElement('div');
        layer4.className = 'hero-bg-3d-layer-4';
        hero.appendChild(layer4);
        
        const pattern = document.createElement('div');
        pattern.className = 'hero-bg-pattern';
        hero.appendChild(pattern);
    }
    
    // Add mouse move parallax effect
    hero.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const moveX = (mouseX - width / 2) / width * 20; // Movement magnitude
        const moveY = (mouseY - height / 2) / height * 20; // Movement magnitude
        
        // Animate the text and image with 3D transform
        const heroText = document.querySelector('.hero-text');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroText) {
            heroText.style.transform = `translateZ(40px) translate(${moveX * -0.5}px, ${moveY * -0.5}px)`;
        }
        
        if (heroImage) {
            heroImage.style.transform = `translateZ(60px) translate(${moveX * 0.8}px, ${moveY * 0.8}px) rotateY(${moveX * 0.05}deg) rotateX(${moveY * -0.05}deg)`;
        }
        
        // Move the background layers at different speeds for parallax
        const layer1 = document.querySelector('.hero-bg-3d-layer-1');
        const layer2 = document.querySelector('.hero-bg-3d-layer-2');
        const layer3 = document.querySelector('.hero-bg-3d-layer-3');
        const layer4 = document.querySelector('.hero-bg-3d-layer-4');
        
        if (layer1) layer1.style.transform = `translateZ(10px) translate(${moveX * 0.3}px, ${moveY * 0.3}px)`;
        if (layer2) layer2.style.transform = `translateZ(20px) translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
        if (layer3) layer3.style.transform = `translateZ(15px) translate(${moveX * 0.4}px, ${moveY * 0.4}px)`;
        if (layer4) layer4.style.transform = `translateZ(25px) translate(${moveX * 0.6}px, ${moveY * 0.6}px)`;
    });
    
    // Reset transforms when mouse leaves
    hero.addEventListener('mouseleave', function() {
        const heroText = document.querySelector('.hero-text');
        const heroImage = document.querySelector('.hero-image');
        const layer1 = document.querySelector('.hero-bg-3d-layer-1');
        const layer2 = document.querySelector('.hero-bg-3d-layer-2');
        const layer3 = document.querySelector('.hero-bg-3d-layer-3');
        const layer4 = document.querySelector('.hero-bg-3d-layer-4');
        
        if (heroText) heroText.style.transform = 'translateZ(40px)';
        if (heroImage) heroImage.style.transform = 'translateZ(60px)';
        if (layer1) layer1.style.transform = 'translateZ(10px)';
        if (layer2) layer2.style.transform = 'translateZ(20px)';
        if (layer3) layer3.style.transform = 'translateZ(15px)';
        if (layer4) layer4.style.transform = 'translateZ(25px)';
    });
}

/**
 * Add beautiful 3D background with blue gradient to hero section
 * Replaces the previous 3D globe implementation
 */
function add3DMedicalGlobe() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create 3D background container
    const bg3dContainer = document.createElement('div');
    bg3dContainer.className = '3d-bg-container';
    bg3dContainer.style.position = 'absolute';
    bg3dContainer.style.top = '0';
    bg3dContainer.style.left = '0';
    bg3dContainer.style.width = '100%';
    bg3dContainer.style.height = '100%';
    bg3dContainer.style.overflow = 'hidden';
    bg3dContainer.style.zIndex = '0';
    bg3dContainer.style.pointerEvents = 'none';
    hero.appendChild(bg3dContainer);
    
    // Create blue gradient background
    const gradientBg = document.createElement('div');
    gradientBg.className = 'gradient-background';
    gradientBg.style.position = 'absolute';
    gradientBg.style.top = '0';
    gradientBg.style.left = '0';
    gradientBg.style.width = '100%';
    gradientBg.style.height = '100%';
    gradientBg.style.background = 'linear-gradient(135deg, rgba(10, 38, 71, 0.8) 0%, rgba(32, 82, 149, 0.6) 50%, rgba(10, 38, 71, 0.7) 100%)';
    gradientBg.style.opacity = '0.4';
    bg3dContainer.appendChild(gradientBg);
    
    // Create floating 3D layers with blue gradients
    const layers = [
        { zIndex: 20, opacity: 0.2, color: 'rgba(32, 82, 149, 0.4)' },
        { zIndex: 40, opacity: 0.15, color: 'rgba(130, 168, 219, 0.3)' },
        { zIndex: 60, opacity: 0.1, color: 'rgba(10, 38, 71, 0.2)' },
        { zIndex: 30, opacity: 0.12, color: 'rgba(0, 137, 139, 0.15)' }
    ];
    
    // Add geometric shapes and layers
    layers.forEach((layer, index) => {
        // Create a container for each layer
        const layerElement = document.createElement('div');
        layerElement.className = `3d-layer layer-${index}`;
        layerElement.style.position = 'absolute';
        layerElement.style.top = '0';
        layerElement.style.left = '0';
        layerElement.style.width = '100%';
        layerElement.style.height = '100%';
        layerElement.style.transform = `translateZ(${layer.zIndex}px)`;
        layerElement.style.opacity = layer.opacity;
        bg3dContainer.appendChild(layerElement);
        
        // Create abstract shapes for each layer
        for (let i = 0; i < 3; i++) {
            const shape = document.createElement('div');
            shape.className = 'abstract-shape';
            shape.style.position = 'absolute';
            shape.style.borderRadius = '50%';
            shape.style.background = `radial-gradient(circle at 30% 30%, ${layer.color}, transparent)`;
            shape.style.opacity = layer.opacity * 2;
            
            // Randomize shape positions and sizes
            const size = 200 + Math.random() * 300;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.top = `${top}%`;
            shape.style.left = `${left}%`;
            shape.style.transform = `translate(-50%, -50%) translateZ(${10 * i}px)`;
            shape.style.animation = `floatShape ${5 + i * 2}s infinite ease-in-out ${i}s`;
            
            layerElement.appendChild(shape);
        }
    });
    
    // Create wave effect
    const waveContainer = document.createElement('div');
    waveContainer.className = '3d-wave-container';
    waveContainer.style.position = 'absolute';
    waveContainer.style.bottom = '0';
    waveContainer.style.left = '0';
    waveContainer.style.width = '100%';
    waveContainer.style.height = '60%';
    waveContainer.style.transformStyle = 'preserve-3d';
    waveContainer.style.transform = 'translateZ(50px)';
    bg3dContainer.appendChild(waveContainer);
    
    // Create multiple wave layers
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.className = `3d-wave wave-${i}`;
        wave.style.position = 'absolute';
        wave.style.bottom = `${-20 + (i * 10)}px`;
        wave.style.left = '0';
        wave.style.width = '200%';
        wave.style.height = `${100 + (i * 50)}px`;
        wave.style.background = `linear-gradient(180deg, 
                                rgba(10, 38, 71, ${0.05 + (i * 0.03)}) 0%, 
                                rgba(32, 82, 149, ${0.08 + (i * 0.03)}) 50%, 
                                rgba(130, 168, 219, ${0.02 + (i * 0.01)}) 100%)`;
        wave.style.borderRadius = '48% 52% 68% 32% / 42% 28% 72% 58%';
        wave.style.transform = `translateZ(${10 * (3-i)}px)`;
        wave.style.animation = `wave ${12 + i * 3}s infinite ease-in-out ${i * 0.5}s`;
        waveContainer.appendChild(wave);
    }
    
    // Add floating medical symbols
    const symbols = [
        { icon: 'fa-heart-pulse', top: '20%', left: '80%', size: '32px', color: '#e74c3c', delay: '0s' },
        { icon: 'fa-stethoscope', top: '70%', left: '15%', size: '28px', color: '#3498db', delay: '1s' },
        { icon: 'fa-pills', top: '40%', left: '90%', size: '24px', color: '#f39c12', delay: '2s' },
        { icon: 'fa-user-doctor', top: '85%', left: '75%', size: '30px', color: '#2c3e50', delay: '0.5s' },
        { icon: 'fa-syringe', top: '15%', left: '10%', size: '22px', color: '#27ae60', delay: '1.5s' }
    ];
    
    symbols.forEach(item => {
        const symbol = document.createElement('div');
        symbol.className = 'medical-symbol';
        symbol.innerHTML = `<i class="fas ${item.icon}"></i>`;
        symbol.style.position = 'absolute';
        symbol.style.top = item.top;
        symbol.style.left = item.left;
        symbol.style.fontSize = item.size;
        symbol.style.color = item.color;
        symbol.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.7)';
        symbol.style.opacity = '0.7';
        symbol.style.transform = 'translateZ(80px)';
        symbol.style.animation = `floatSymbol 6s infinite ease-in-out ${item.delay}`;
        bg3dContainer.appendChild(symbol);
    });
    
    // Add parallax effect
    hero.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const moveX = (mouseX - width / 2) / width * 20;
        const moveY = (mouseY - height / 2) / height * 10;
        
        // Move each layer at different speeds for parallax
        const allLayers = document.querySelectorAll('.3d-layer');
        allLayers.forEach((layer, index) => {
            const depth = index + 1;
            const translateX = moveX * (depth * 0.5);
            const translateY = moveY * (depth * 0.5);
            layer.style.transform = `translateZ(${layers[index].zIndex}px) translate(${translateX}px, ${translateY}px)`;
        });
        
        // Move waves with parallax
        const waves = document.querySelectorAll('.3d-wave');
        waves.forEach((wave, index) => {
            const translateX = moveX * ((3-index) * 0.8);
            wave.style.transform = `translateZ(${10 * (3-index)}px) translateX(${-translateX}px)`;
        });
        
        // Move symbols with parallax
        const medicalSymbols = document.querySelectorAll('.medical-symbol');
        medicalSymbols.forEach((symbol) => {
            const symbolX = moveX * 1.2;
            const symbolY = moveY * 1.2;
            symbol.style.transform = `translateZ(80px) translate(${symbolX}px, ${symbolY}px)`;
        });
    });
    
    // Add animation keyframes
    const bgAnimations = document.createElement('style');
    bgAnimations.textContent = `
        @keyframes floatShape {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes wave {
            0% { transform: translateZ(30px) translateX(0) rotate(0deg); }
            50% { transform: translateZ(30px) translateX(-25%) rotate(2deg); }
            100% { transform: translateZ(30px) translateX(0) rotate(0deg); }
        }
        
        @keyframes floatSymbol {
            0%, 100% { transform: translateZ(80px) translateY(0) rotate(0deg); }
            50% { transform: translateZ(80px) translateY(-15px) rotate(5deg); }
        }
    `;
    document.head.appendChild(bgAnimations);
}

// Add these new keyframes to the DOM
const newStyles = document.createElement('style');
newStyles.textContent = `
@keyframes titlePulse {
    0% { color: #0A2647; }
    50% { color: #205295; }
    100% { color: #0A2647; }
}

@keyframes shine {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

.primary-glow {
    animation: primaryBtnGlow 2s infinite alternate;
}

.teal-glow {
    animation: tealBtnGlow 2s infinite alternate;
}

.gold-glow {
    animation: goldBtnGlow 2s infinite alternate;
}

.burgundy-glow {
    animation: burgundyBtnGlow 2s infinite alternate;
}

.royal-glow {
    animation: royalBtnGlow 2s infinite alternate;
}

@keyframes primaryBtnGlow {
    0% { box-shadow: 0 5px 15px rgba(10, 38, 71, 0.25); }
    100% { box-shadow: 0 5px 25px rgba(10, 38, 71, 0.45); }
}

@keyframes tealBtnGlow {
    0% { box-shadow: 0 5px 15px rgba(0, 137, 139, 0.25); }
    100% { box-shadow: 0 5px 25px rgba(0, 137, 139, 0.45); }
}

@keyframes goldBtnGlow {
    0% { box-shadow: 0 5px 15px rgba(212, 175, 55, 0.25); }
    100% { box-shadow: 0 5px 25px rgba(212, 175, 55, 0.45); }
}

@keyframes burgundyBtnGlow {
    0% { box-shadow: 0 5px 15px rgba(120, 47, 64, 0.25); }
    100% { box-shadow: 0 5px 25px rgba(120, 47, 64, 0.45); }
}

@keyframes royalBtnGlow {
    0% { box-shadow: 0 5px 15px rgba(32, 82, 149, 0.25); }
    100% { box-shadow: 0 5px 25px rgba(32, 82, 149, 0.45); }
}
`;
document.head.appendChild(newStyles);