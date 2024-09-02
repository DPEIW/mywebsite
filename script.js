// script.js

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-visible');
            }
        });
    });

    document.querySelectorAll('.slide-in').forEach(section => {
        observer.observe(section);
    });
});
