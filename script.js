document.addEventListener("DOMContentLoaded", () => {
    
    const navbar = document.querySelector(".navbar");
    const parallaxBg = document.querySelector(".parallax-bg");
    const revealElements = document.querySelectorAll(".reveal");

    // 1. Efecto Parallax y Scroll del Navbar
    window.addEventListener("scroll", () => {
        let scrollValue = window.scrollY;

        // Navbar dinámico
        if (scrollValue > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Movimiento Parallax (la imagen se mueve al 40% de la velocidad del scroll)
        parallaxBg.style.transform = `translateY(${scrollValue * 0.4}px)`;
    });

    // 2. Reveal de elementos (Intersection Observer)
    const observerOptions = {
        threshold: 0.2
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Se ejecuta una sola vez
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
});
