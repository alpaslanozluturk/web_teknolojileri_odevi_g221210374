let activeSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

function switchSlide() {
    slides.forEach((slide, index) => {
        if (index === activeSlide) {
            slide.style.opacity = 1;
            slide.style.pointerEvents = 'auto';
        } else {
            slide.style.opacity = 0;
            slide.style.pointerEvents = 'none';
        }
    });
}

switchSlide(); // call this right after defining the function

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