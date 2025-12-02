// --- Gestion des descriptions d'évènement ---
document.querySelectorAll(".event-header").forEach(header => {
    header.addEventListener("click", () => {
        const desc = header.nextElementSibling;
        const arrow = header.querySelector(".arrow");

        desc.style.display = desc.style.display === "block" ? "none" : "block";
        arrow.classList.toggle("open");
    });
});

// --- CARROUSEL ---
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
}

// défilement automatique
setInterval(() => {
    changeSlide(1);
}, 5000);

// afficher le premier slide
showSlide(currentSlide);
