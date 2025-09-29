document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

 let currentIndex = 0;
    const images = Array.from(galleryItems).map(item => item.getAttribute('data-src'));

    function openLightbox(index) {
        currentIndex = index;
        lightboxImage.src = images[currentIndex];
        lightbox.style.display = 'flex';
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openLightbox(index);
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

prevBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents lightbox from closing
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentIndex];
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents lightbox from closing
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImage.src = images[currentIndex];
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImage && e.target !== closeBtn) {
            lightbox.style.display = 'none';
        }
    });

  document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            } else if (e.key === 'Escape') {
                closeBtn.click();
            }
        }
    });
});