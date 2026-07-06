/*
* In this lab, you will create a function that looks through an array and returns the first element that passes a test function (also known as a "truth test").

The function would iterate through the array and test each element using the provided test function. At the end, it would return the first element where the test function returns true.

Example:

findElement([1, 3, 5, 8], num => num % 2 === 0) // returns 8
findElement([1, 3, 5], num => num % 2 === 0)    // returns undefined
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named findElement that accepts an array and a function as arguments.
The function should return the first item in the array that passes a truth test. This means that, calling the passed in function func, given an element x, the truth test is passed if func(x) is true.
If no element passes the test, the function should return undefined.
Tests:
Waiting:1. You should have a findElement function.
Waiting:2. findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
Waiting:3. findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
Waiting:4. findElement([1, 2, 3, 4], function(num) { return num > 2; }) should return 3.
Waiting:5. findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; }) should return "javascript".
Waiting:6. findElement(["cat", "dog", "bird"], function(str) { return str.length > 10; }) should return undefined.
Waiting:7. findElement([2, 4, 6, 8], function(num) { return num % 2 === 0; }) should return 2.
Waiting:8. findElement([], function(num) { return num > 0; }) should return undefined.
* */

function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

console.log(findElement([1, 3, 5, 8], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));