/*
* In this lab, you will build a function that returns an array consisting of the largest number from each provided sub-array.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function largestOfAll that takes an array of arrays as an argument.
The function should return an array containing the largest number from each sub-array.
Tests:
Waiting:1. You should create a function named largestOfAll.
Waiting:2. largestOfAll should take a single parameter.
Waiting:3. largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
Waiting:4. largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
Waiting:5. largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
Waiting:6. largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].

* */
function largestOfAll(arr) {
    const largest = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i].sort((a, b) => b - a);
        largest.push(arr[i][0]);
    }
    return largest;
}
console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

/*
*  MORE VANILLA THAN USING ALREADY CREATED METHODS
*  function largestOfAll(arr) {
*      const largest = [];
*      for (let i = 0; i < arr.length; i++) {
*          let max = arr[i][0];
*          for (let j = 1; j < arr[i].length; j++) {
*              if (arr[i][j] > max) {
*                  max = arr[i][j];
*              }
*          }
*          largest.push(max);
*      }
*      return largest;
*  }
* */