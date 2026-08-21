/*
* Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Your function diffArray should return an array.
Your function should take two arguments, both of which are arrays.
Your function should make use of the filter method.
Your function should return the symmetric difference of the two arrays.
Your function should return an empty array if there is no symmetric difference.
Tests:
Waiting:1. You should have a function named diffArray.
Waiting:2. The diffArray function should use the filter method to filter out items that are present in both arrays.
Waiting:3. diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["pink wool"].
Waiting:4. diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) should return ["diorite", "pink wool"].
Waiting:5. diffArray should return an empty array when called with two identical arrays.
Waiting:6. diffArray(["pen", "book"], ["book", "pencil", "notebook"]) should return ["pen", "pencil", "notebook"].
Waiting:7. diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]) should return ["car", "train", "plane"].
Waiting:8. diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]) should return ["banana", "grape"].
Waiting:9. diffArray([], ["apple", "banana"]) should return ["apple", "banana"].
Waiting:10. diffArray(["apple", "banana"], []) should return ["apple", "banana"].
Waiting:11. diffArray([], []) should return [].
* */

const diffArray = (arr1, arr2) => {
    const uniqueToArray1 = arr1.filter(item => !arr2.includes(item));
    const uniqueToArray2 = arr2.filter(item => !arr1.includes(item));
    return uniqueToArray1.length === 0 && uniqueToArray2.length === 0 ? [] : [...uniqueToArray1, ...uniqueToArray2];
}
