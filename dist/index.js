const tates = document.querySelectorAll('.container');

tates.forEach(tate => {
    tate.addEventListener('click', () => {
        const tetesSaufCliquee = Array.from(tates).filter(element => element !== tate);

        if (tate.classList.contains('cliqué')) {
            tate.classList.remove('cliqué');
            tetesSaufCliquee.forEach(tout => {
                tout.classList.remove('sombre');
            });
        } else {
            tetesSaufCliquee.forEach(tout => {
                tout.classList.add('sombre');
                tout.classList.remove('cliqué');
            });
            tate.classList.remove('sombre');
            tate.classList.add('cliqué');
        }
    });
});
