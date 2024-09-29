function toggleFullScreen(image) {
    if (image.classList.contains('fullscreen')) {
        image.classList.remove('fullscreen');
    } else {
        image.classList.add('fullscreen');
    }
}
