const btns = document.querySelectorAll(".emoji-btn");

function updateCount(btnElem) {
    const countEl = btnElem.querySelector(".count").textContent;
    const currCount = Number(countEl.split("/")[0]);

    if (currCount < 10) {
        const newCount = currCount + 1;
        btnElem.querySelector(".count").textContent = `${newCount}/10`;
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => updateCount(btn));
});
