const imageGallery = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

imageGallery.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImage.src = image.src.split("-thumbnail").join("");
    })
})

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
})

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
})