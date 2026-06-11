function chunkArrayInGroups(arr, num) {
    const copyArray = [...arr];
    const result = [];
    while (copyArray.length > 0) {
        result.push(copyArray.splice(0, num));
    }
    return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);