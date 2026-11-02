const checkBtn = document.querySelector("#check-btn");
const inputText = document.querySelector("#text-input");
const paraEl = document.querySelector("#result");

const regexp = /[^a-zA-Z0-9]/g;

checkBtn.addEventListener("click", () => {
    const text = inputText.value;

    if (text === "") {
        paraEl.textContent = "Please input a value";
    }
    if (text.length === 1) {
    paraEl.textContent = `${text} is a palindrome`;
    }
    if(text.length > 1) {
        const cleaned = text.replace(regexp, '').toLowerCase();
        if (cleaned === [...cleaned].reverse().join('')) {
            paraEl.textContent = `${text} is a palindrome`;
        } else {
            paraEl.textContent = `${text} is not a palindrome`;
        }
    }
    
});