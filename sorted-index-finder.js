/*
* Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a getIndexToIns function that takes two arguments: an array and a number.
You should use the sort method to sort the array in ascending order.
Your getIndexToIns function should return the lowest index at which the number should be inserted by using the findIndex method.
Your getIndexToIns function should always return a number.
Hint:
The findIndex method is a built-in array method in JavaScript. It takes a callback function and returns the index of the first element that satisfies the condition. Both findIndex and sort are higher-order functions.

Examples:

getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because 1.5 is greater than 1 (index 0) and less than 2 (index 1).
getIndexToIns([20, 3, 5], 19) should return 2 because after sorting to [3, 5, 20], 19 is less than 20 (index 2) and greater than 5 (index 1).
Tests:
Waiting:1. You should have a getIndexToIns function.
Waiting:2. getIndexToIns should always return a number.
Waiting:3. Your function should use the sort method.
Waiting:4. Your function should make use of the findIndex method.
Waiting:5. getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
Waiting:6. getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
Waiting:7. getIndexToIns([40, 60], 50) should return 1.
Waiting:8. getIndexToIns([3, 10, 5], 3) should return 0.
Waiting:9. getIndexToIns([5, 3, 20, 3], 5) should return 2.
Waiting:10. getIndexToIns([2, 20, 10], 19) should return 2.
Waiting:11. getIndexToIns([3, 10, 5], 11) should return 3
Waiting:12. getIndexToIns([], 5) should return 0
* */

const getIndexToIns = (arr, num) => {
    if (!Array.isArray(arr)) {
        return 0;
    }
    const sortedArr = arr.sort((a, b) => a - b);
    const index = sortedArr.findIndex(element => element >= num);
    return index === -1 ? sortedArr.length : index;
}
