const contactModalX = document.querySelector(".modal-x");
const contactModal = document.querySelector(".contact-modal")
const contactButton = document.querySelector(".contact-button")
const blur = document.querySelector(".blur-wrapper")

contactModalX.addEventListener("click", (e) => {
    contactModal.classList.toggle("hide-window");
    blur.classList.toggle("blur")
});

contactButton.addEventListener("click", (e) => {
    contactModal.classList.toggle("hide-window");
    blur.classList.toggle("blur")
});

//