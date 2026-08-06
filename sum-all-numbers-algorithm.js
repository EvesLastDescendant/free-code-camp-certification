/*
* Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named sumAll that accepts an array of two numbers.
sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them. The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
Tests:
Waiting:1. You should have a function named sumAll.
Waiting:2. sumAll([1, 4]) should return a number.
Waiting:3. sumAll([1, 4]) should return 10.
Waiting:4. sumAll([4, 1]) should return 10.
Waiting:5. sumAll([5, 10]) should return 45.
Waiting:6. sumAll([10, 5]) should return 45.
* */

 function sumAll(arr) {
    const [a, b] = arr;
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
