const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");

openModalButton.addEventListener("click", () => {
    modal.showModal();
});

closeModalButton.addEventListener("click", () => {
    modal.close();
});