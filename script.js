// --- Gestion des descriptions d'évènement ---
document.querySelectorAll(".event-header").forEach(header => {
    header.addEventListener("click", () => {
        const desc = header.nextElementSibling;
        const arrow = header.querySelector(".arrow");

        desc.style.display = desc.style.display === "block" ? "none" : "block";
        arrow.classList.toggle("open");
    });
});

// --- CARROUSEL (index.html) ---
const slides = document.querySelectorAll(".slide");
if (slides.length > 0) {
    let currentSlide = 0;

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

    setInterval(() => { changeSlide(1); }, 5000);
    showSlide(currentSlide);

    // Exposer changeSlide globalement pour flèches
    window.changeSlide = changeSlide;
}

// --- ÉVÉNEMENTS (evenement.html) ---
const eventsContainer = document.getElementById("events-container");
if (eventsContainer) {
    let events = [];

    fetch('events.json')
      .then(response => response.json())
      .then(data => {
        events = data;
        renderEvents();
      })
      .catch(err => console.error("Erreur chargement JSON:", err));

    function renderEvents() {
        eventsContainer.innerHTML = ""; // vide avant ajout
        events.forEach((event, i) => {
            const card = document.createElement("div");
            card.className = "event-card";
            card.onclick = () => openEvent(i);
            card.innerHTML = `
                <img src="${event.img}" class="event-poster">
                <h3>${event.title}</h3>
                <p class="event-date">${event.date}</p>
                <button class="card-btn">+ d'infos</button>
            `;
            eventsContainer.appendChild(card);
        });
    }

    // --- POPUP STYLE ALLOCINÉ ---
    function openEvent(i) {
        const event = events[i];
        document.getElementById("popup-title").innerText = event.title;
        document.getElementById("popup-date").innerText = event.date;
        document.getElementById("popup-category").innerText = event.category;
        document.getElementById("popup-duration").innerText = event.duration;
        document.getElementById("popup-stars").innerText = event.stars;
        document.getElementById("popup-desc").innerText = event.desc;
        document.getElementById("popup-img").src = event.img;

        document.getElementById("event-popup").style.display = "flex";
    }

    window.closeEvent = function() {
        document.getElementById("event-popup").style.display = "none";
    }
}


