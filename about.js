document.addEventListener('DOMContentLoaded', function() {

    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: '#e94560' },
            shape: { type: 'circle' },
            opacity: { value: 0.6, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#e94560', opacity: 0.3, width: 1 },
            move: { enable: true, speed: 3, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { 
                onhover: { enable: true, mode: 'grab' }, 
                onclick: { enable: true, mode: 'push' }, 
                resize: true 
            },
            modes: { 
                grab: { distance: 140, line_linked: { opacity: 0.8 } },
                push: { particles_nb: 4 } 
            }
        },
        retina_detect: true
    });

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    animateElements.forEach(element => {
        observer.observe(element);
    });
