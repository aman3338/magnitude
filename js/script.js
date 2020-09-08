const navSlide = () => {
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.links');
    const link = document.querySelectorAll('.link');

    lines.addEventListener('click', () => {
        
        nav.classList.toggle('active');
        link.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 1}s`;
            }
        });
        lines.classList.toggle('toggle');
    });

};

navSlide();