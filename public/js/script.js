
        AOS.init();
        function toggleModo() {
            document.body.classList.toggle("dark-mode");
            let icon = document.querySelector(".modo-escuro");
            icon.classList.toggle("fa-sun");
            icon.classList.toggle("fa-moon");
        }

        function toggleMenu() {
            document.querySelector(".nav-links").classList.toggle("active");
        }

        gsap.from(".menu ul li", { opacity: 0, y: -50, duration: 1, stagger: 0.2 });
        gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 1, stagger: 0.3 });
  