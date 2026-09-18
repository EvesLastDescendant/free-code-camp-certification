const textarea = document.querySelector("textarea");
const para = document.querySelector("#char-count");

textarea.addEventListener("input", (e) => {
    let textareaValue = e.target.value;
    const isAtLimit = textareaValue.length >= 50;

    para.classList.toggle("red", isAtLimit);

    if (isAtLimit) {
        const characters = textareaValue.split("");
        characters.splice(50);
        textareaValue = characters.join("");
        e.target.value = textareaValue;
    }

    const characterCount = textareaValue.length;
    para.textContent = `Character Count:  ${characterCount}/50`;
});