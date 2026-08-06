/*
You should have a function named uniteUnique.
    The uniteUnique function should accept two or more arrays as arguments.
    The function should return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments. For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].
    Tests:
Waiting:1. You should have a uniteUnique function.
Waiting:2. uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
    Waiting:3. uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
    Waiting:4. uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
    Waiting:5. uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
    Waiting:6. uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
*/

function uniteUnique(args1, args2, ...args) {
    const combined = [args1, args2, ...args].flat();
    return [...new Set(combined)];
}


console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
