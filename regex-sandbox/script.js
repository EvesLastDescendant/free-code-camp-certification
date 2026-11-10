const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");
let flags = "";

caseInsensitiveFlag.addEventListener("click", () => {
    !caseInsensitiveFlag.checked;
    flags = getFlags();
});
globalFlag.addEventListener("click", () => {
    !globalFlag.checked;
    flags = getFlags();
})

function getFlags() {
    let string = "";
    if(caseInsensitiveFlag.checked) {
        string += "i"; 
    }
    if(globalFlag.checked) {
        string += "g"
    }
    return string === "" ? "" : string;
}

testButton.addEventListener("click", () => {
    const regex = new RegExp(regexPattern.value, getFlags());
    const testString = stringToTest.textContent;
    const matchResult = testString.match(regex);
    if (matchResult) {
        stringToTest.innerHTML = testString.replace(regex, (match) =>
            `<span class="highlight">${match}</span>`
        );
        testResult.innerHTML = matchResult.join(", ");
    } else {
        testResult.innerHTML = "no match";
    }
})
