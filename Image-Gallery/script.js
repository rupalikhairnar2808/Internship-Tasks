// Filter images based on category
function filterImages(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Open modal
function openModal(imgElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    caption.innerHTML = imgElement.alt;
}

// Close modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
