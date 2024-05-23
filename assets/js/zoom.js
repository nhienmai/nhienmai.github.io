document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', function () {
        // Create overlay
        let overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);

        // Clone the image to overlay
        let clone = this.cloneNode();
        clone.classList.add('zoomed');
        overlay.appendChild(clone);

        // Show overlay
        overlay.style.display = 'flex';

        // Click on overlay to close
        overlay.addEventListener('click', function () {
            overlay.remove();
        });
    });
});
