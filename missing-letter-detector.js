function fearNotLetter(alphaString) {
    const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const alphaChars = alphaString.split('');
    const firstChar = alphaChars[0];
    const lastChar = alphaChars[alphaChars.length - 1];

    const selectedAlphabets = alphabets.slice(alphabets.indexOf(firstChar), alphabets.indexOf(lastChar) + 1);

    for (let i = 0; i < selectedAlphabets.length; i++) {
        if (!alphaChars.includes(selectedAlphabets[i])) {
            return selectedAlphabets[i];
        }
    }
    return undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));