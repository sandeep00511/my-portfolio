document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        // Hero section animations
        gsap.from('.greeting', {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: 'power3.out'
        });

        gsap.from('.name', {
            duration: 1,
            x: -50,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out'
        });

        gsap.from('.title', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.6,
            ease: 'power3.out'
        });

        gsap.from('.hero-text', {
            duration: 1,
            y: 20,
            opacity: 0,
            delay: 0.9,
            ease: 'power3.out'
        });

        gsap.from('.hero-buttons', {
            duration: 1,
            y: 20,
            opacity: 0,
            delay: 1.2,
            ease: 'power3.out'
        });

        // Floating elements animation
        gsap.to('.floating', {
            y: 10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        // Project card hover effect
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
});