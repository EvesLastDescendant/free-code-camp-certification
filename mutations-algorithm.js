function mutation(arr) {
    // Check whether all letters in arr[1] exist in arr[0], case-insensitive
    const first = arr[0].toLowerCase();
    const second = arr[1].toLowerCase();

    for (let i = 0; i < second.length; i++) {
        if (first.indexOf(second[i]) === -1) {
            return false;
        }
    }
    return true;
}
