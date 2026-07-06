/*
In this lab, you will need to create an algorithm to merge two arrays.

    Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

    User Stories:

    Create a frankenSplice function that accepts two arrays and an index.
    Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
    The input arrays should remain the same after the function runs.
Tests:
    Waiting:1. frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
    Waiting:2. frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
    Waiting:3. frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
    Waiting:4. All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
    Waiting:5. The first array should remain the same after the function runs.
Waiting:6. The second array should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, index) {
    const arr1Copy = arr1.slice();
    const arr2Copy = arr2.slice();
    arr2Copy.splice(index, 0, ...arr1Copy);
    return arr2Copy;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
