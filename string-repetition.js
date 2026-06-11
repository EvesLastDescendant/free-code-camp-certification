function repeatStringNumTimes(str, num) {
    let result = ''
    if (num <= 0) {
        return result;
    }
    // repeat string num number of times without using repeat()
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

console.log(repeatStringNumTimes("*", 3));