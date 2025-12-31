    
    document.querySelectorAll('.auto-reload-video').forEach(video => {
        video.addEventListener('ended', function() {
            this.load();
        });
    });

    const carousel = document.getElementById('projectCarousel');
    const dynamicLink = document.getElementById('dynamicLink');

    carousel.addEventListener('slid.bs.carousel', function (e) {
        const activeItem = e.relatedTarget;
        const newLink = activeItem.getAttribute('data-link');
        dynamicLink.href = newLink;
    });
