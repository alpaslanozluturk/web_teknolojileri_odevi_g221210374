document.addEventListener('DOMContentLoaded', (event) => {



    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, index) => {

        slide.addEventListener("click", function() {
            console.log(`Slide ${index + 1} was clicked.`);
        });
    });
});