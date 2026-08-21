/*
* Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a destroyer function that accepts an array and one or more additional arguments.
The destroyer function should return a new array excluding all elements from the first argument that match any of the subsequent arguments.
The function must accept an indeterminate number of arguments.
Tests:
Waiting:1. You should have a destroyer function.
Waiting:2. destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
Waiting:3. destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
Waiting:4. destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
Waiting:5. destroyer([2, 3, 2, 3], 2, 3) should return [].
Waiting:6. destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
Waiting:7. destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" ) should return [12, 92, 65].
* */

const destroyer = (arr, ...args) => {
    return arr.filter(item => !args.includes(item));
}
