document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.slide-in');

    function checkSlide() {
        elements.forEach(element => {
            const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
            const isHalfShown = slideInAt > element.offsetTop;
            if (isHalfShown) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    window.addEventListener('load', checkSlide);
});
