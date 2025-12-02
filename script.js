// --- Gestion des descriptions d'évènement ---
document.querySelectorAll(".event-header").forEach(header => {
    header.addEventListener("click", () => {
        const desc = header.nextElementSibling;
        const arrow = header.querySelector(".arrow");

        desc.style.display = desc.style.display === "block" ? "none" : "block";
        arrow.classList.toggle("open");
    });
});
