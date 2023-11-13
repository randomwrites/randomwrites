document.addEventListener('DOMContentLoaded', function () {
    let layers = document.querySelectorAll('.parallax-layer');

    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;

        layers.forEach(function (layer, index) {
            let speed = index + 1;
            let yPos = -(scrollPosition * speed / 5);
            layer.style.transform = 'translate3d(0px, ' + yPos + 'px, 0)';
        });
    });
});
