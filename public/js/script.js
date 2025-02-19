function openModal(title, description, img, link) {
    if (!title || !description || !img || !link) {
        console.error("Dados do modal não foram fornecidos corretamente.");
        return;
    }

    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-link").href = link;
    document.getElementById("modal").style.display = "flex";
}
