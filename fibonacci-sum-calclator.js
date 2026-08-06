/*
* Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a sumFibs function that accepts a number as an argument.
The sumFibs function should return the sum of all odd Fibonacci numbers that are less than or equal to the given number.
The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous ones.
Only the odd Fibonacci numbers should be added to the sum.
Tests:
Waiting:1. You should have a sumFibs function.
Waiting:2. sumFibs(1) should return a number.
Waiting:3. sumFibs(1000) should return 1785.
Waiting:4. sumFibs(4000000) should return 4613732.
Waiting:5. sumFibs(4) should return 5.
Waiting:6. sumFibs(75024) should return 60696.
Waiting:7. sumFibs(75025) should return 135721.
* */

function sumFibs(num) {
    let a = 0;
    let b = 1;
    let sum = 0;

    while (b <= num) {
        if (b % 2 !== 0) {
            sum += b;
        }
        [a, b] = [b, a + b];
    }

    return sum;
}

console.log(sumFibs(75025));
