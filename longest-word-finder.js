function findLongestWordLength(str) {
    const copyString = str.split(" ");
    const lengthArr = [];

    for (const str of copyString) {
        const len = str.length;
        lengthArr.push(len);
    }
    return Math.max(...lengthArr);
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));