const allImages = document.querySelectorAll(".small_img");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector("#modal_image");
const buttonCloseModal = document.querySelector("#button_close");

// Set up the event to all images.
allImages.forEach(image => {
  image.addEventListener("click", () => {
    modalImage.setAttribute("src", image.getAttribute('src'));
    modal.classList.toggle("modal_active");
  })
});

//to close the modal when click on the X button
buttonCloseModal.addEventListener("click", () => {
  modal.classList.toggle("modal_active");
})

//to close the modal when click outside of the modal.
modal.addEventListener("click", (e) => {
  if (e.target.classList.value === "modal_content") {
    modal.classList.toggle("modal_active");
  }
})