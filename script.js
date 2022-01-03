const contactModalX = document.querySelector(".modal-x");
const contactModal = document.querySelector(".contact-modal");
const contactButton = document.querySelector(".contact-button");

const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");
const skillsCarousel = document.querySelector('.skills-carousel');
const slideContainer = document.querySelector(".slide-container");

const readMoreButton = document.querySelector(".read-more-btn");
const readMoreButtonText = document.querySelector(".read-more-btn-text");
const moreAboutText = document.querySelector(".more-text");
const aboutTextStyles = window.getComputedStyle(moreAboutText);

const blur = document.querySelector(".blur-wrapper")
const parallax = document.querySelector(".parallax")

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

readMoreButton.addEventListener("click", (e) => {
    moreAboutText.classList.toggle("toggle-more-text")
    
    if (aboutTextStyles.display === 'none') {
        readMoreButtonText.innerHTML = 'Read More';
    } else {
        readMoreButtonText.innerHTML = 'Read Less';
    }
})

window.addEventListener("scroll", (e) => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.4 + "px";
  })