const whatIsInAName = (collection, source) => {
    const arrayResult = [];
    collection.filter(obj => {
        if  (Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key])) {
            arrayResult.push(obj)
        }
    })
    return arrayResult;
}

console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
