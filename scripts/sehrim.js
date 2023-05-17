let activeSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

function switchSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === activeSlide) {
            slide.classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    switchSlide();
});

nextButton.addEventListener('click', () => {
    activeSlide = (activeSlide + 1) % slides.length;
    switchSlide();
});

setInterval(() => {
    activeSlide = (activeSlide + 1) % slides.length;
    switchSlide();
}, 10000);