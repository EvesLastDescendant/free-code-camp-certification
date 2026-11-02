const messageInput = document.querySelector("#message-input");
const result = document.querySelector("#result-message");
const checkMessageButton = document.querySelector("#check-message-btn");

const helpRegexp = /please help|assist me/i;
const dollarRegexp = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegexp = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/;
const stockRegexp = /(?:\s|^)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:\s|$)/i;
const dearRegexp = /(?:\s|^)d[e3][a@4]r fr[i1|][e3]nd(?:\s|$)/i;

const denyList = [
    helpRegexp, dollarRegexp, freeRegexp, 
    stockRegexp, dearRegexp
];

function isSpam(msg) {
    return denyList.some(item => item.test(msg));
}

checkMessageButton.addEventListener("click", () => {
    if (messageInput.value === "") {
        result.textContent = "Please enter a message."
    } else {
        result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";
        messageInput = "";
    }
});
