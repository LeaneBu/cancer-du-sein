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


// --- DATA DES ÉVÈNEMENTS ---
const events = [
    {
        title: "Gala Caritatif",
        date: "12 Décembre 2025",
        img: "img/event1.jpg",
        desc: "Un gala exceptionnel visant à récolter des fonds pour nos actions solidaires. Concerts, animations, invités spéciaux..."
    },
    {
        title: "Conférence Bien-Être",
        date: "Octobre 2025",
        img: "img/event2.jpg",
        desc: "Une conférence destinée à sensibiliser au bien-être mental et physique, avec des professionnels du domaine."
    },
    {
        title: "Atelier Prévention",
        date: "Mai 2025",
        img: "img/event3.jpg",
        desc: "Atelier de sensibilisation ouvert à tous : alimentation, sommeil, gestion du stress, activités pratiques..."
    }
];

// --- POPUP ---
function openEvent(i) {
    document.getElementById("popup-title").innerText = events[i].title;
    document.getElementById("popup-date").innerText = events[i].date;
    document.getElementById("popup-desc").innerText = events[i].desc;
    document.getElementById("popup-img").src = events[i].img;

    document.getElementById("event-popup").style.display = "flex";
}

function closeEvent() {
    document.getElementById("event-popup").style.display = "none";
}
