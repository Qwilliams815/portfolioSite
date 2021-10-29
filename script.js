const contactModalX = document.querySelector(".modal-x");
const contactModal = document.querySelector(".contact-modal");
const contactButton = document.querySelector(".contact-button");
const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");
const skillsCarousel = document.querySelector('.skills-carousel');
const slideContainer = document.querySelector(".slide-container")

const blur = document.querySelector(".blur-wrapper")

contactModalX.addEventListener("click", (e) => {
    contactModal.classList.toggle("hide-window");
    blur.classList.toggle("blur")
});

contactButton.addEventListener("click", (e) => {
    contactModal.classList.toggle("hide-window");
    blur.classList.toggle("blur")
});

leftButton.addEventListener("click", (e) => {
    slideContainer.style.transform = 'translateX(0%)';
})

rightButton.addEventListener("click", (e) => {
    slideContainer.style.transform = 'translateX(-' + (slideContainer.clientWidth - skillsCarousel.clientWidth) + 'px)';
})