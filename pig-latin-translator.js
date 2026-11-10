function translatePigLatin(str) {
    const firstVowel = str.search(/[aeiou]/);

    if (firstVowel === -1) {
        return str + "ay";
    }

    if (firstVowel === 0) {
        return str + "way";
    }

    return str.slice(firstVowel) + str.slice(0, firstVowel) + "ay";
}
