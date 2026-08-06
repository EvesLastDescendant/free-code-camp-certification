/*
* Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a dropElements function that accepts an array (arr) and a function (func) as arguments.
The dropElements function should iterate through the array and remove elements starting from the first one until func returns true for an element.
The dropElements function should return the remaining elements in the array if the condition is met.
If the condition is never satisfied, it should return an empty array.
Tests:
Waiting:1. You should have a dropElements function.
Waiting:2. dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
Waiting:3. dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
Waiting:4. dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
Waiting:5. dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
Waiting:6. dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
Waiting:7. dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
* */

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
