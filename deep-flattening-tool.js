const steamrollArray = (arr) => {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
    }, []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));