function myReplace(string, replacement, replacer) {
    if (string.includes(replacement)) {
        if (replacement[0] === replacement[0].toUpperCase()) {
            replacer = replacer[0].toUpperCase() + replacer.slice(1);
            return string.replace(replacement, replacer);
        } else {
            return string.replace(replacement, replacer.toLowerCase());
        }
    } else {
        return `${replacement} cannot be found in ${string}`;
    }
}

console.log(myReplace("Hello, World!", "World", "earth"));

console.log(myReplace("Let us go to the store", "store", "mall"));

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

console.log(myReplace("I think we should look up there", "up", "Down"));

console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));

console.log(myReplace("His name is Tom", "Tom", "john"));

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));