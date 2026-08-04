document.addEventListener("DOMContentLoaded", function () {
    // 1. Animasi Angka Statistik (Counter)
    const counters = document.querySelectorAll('.counter');
    let speed = 200;

    const runCounter = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target + (counter.parentElement.querySelector('p').innerText.includes('%') ? '%' : '+');
                }
            };
            updateCount();
        });
    };

    // Observer agar counter berjalan saat elemen masuk ke dalam layar
    const achievementsSection = document.querySelector('#achievements');
    if (achievementsSection) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(achievementsSection);
    }
});
