const scrollRevealOptions = {
    duration: 800,
    distance: '50px',
    easing: 'ease-in-out',
    viewFactor: 0.3,
};

const animations = [
    { selector: '.top', origin: 'top', duration: 800 },
    { selector: '.right', origin: 'right', duration: 1000 },
    { selector: '.bottom', origin: 'bottom', duration: 800 },
    { selector: '.left', origin: 'left', duration: 1000 },
    { selector: '.top-1000', origin: 'top', duration: 1000 },
    { selector: '.top-1400', origin: 'top', duration: 1400 },
    { selector: '.top-1800', origin: 'top', duration: 1800 },
];

animations.forEach(({ selector, origin, duration }) => {
    ScrollReveal().reveal(selector, {
        ...scrollRevealOptions,
        origin,
        duration,
    });
});

//---------------- SCROLL DOWN ----------------\\

const minhaDiv = document.getElementById("scroll-down");

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        // Remove a classe "hide" quando o scroll está no topo
        minhaDiv.classList.remove("hide");
    } else {
        // Adiciona a classe "hide" quando o usuário rola para baixo
        minhaDiv.classList.add("hide");
    }
});