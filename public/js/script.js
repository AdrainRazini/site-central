function toggleModo() {
    document.body.classList.toggle("dark-mode");
    let icon = document.querySelector(".modo-escuro");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
}

function openModal(title, description, img, link) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-link").href = link;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
