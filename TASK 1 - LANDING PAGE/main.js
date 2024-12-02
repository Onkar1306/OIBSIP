const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.innerHTML = navLinks.classList.contains("open")
        ? '<i class="ri-close-line"></i>'
        : '<i class="ri-menu-line"></i>';
});


const revealConfig = {
    distance: "50px",
    duration: 1000,
    easing: "ease-out",
    origin: "bottom",
    reset: false,
};

ScrollReveal().reveal(".header__content h2", { delay: 300, ...revealConfig });
ScrollReveal().reveal(".header__content h1", { delay: 600, ...revealConfig });
ScrollReveal().reveal(".header__content p", { delay: 900, ...revealConfig });
ScrollReveal().reveal(".btn", { delay: 1200, ...revealConfig });
ScrollReveal().reveal(".socials", { delay: 1500, ...revealConfig });
ScrollReveal().reveal(".header__img img", { origin: "right", delay: 800, ...revealConfig });
