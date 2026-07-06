/*
* In this lab, you will build a simple string inverter that reverses the characters of a given string.

For example, "hello" should become "olleh".

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named reverseString that takes a string as an argument.
The function should return the reversed string.
Tests:
Waiting:1. You should have a function named reverseString.
Waiting:2. reverseString should take a string as an argument.
Waiting:3. reverseString("hello") should return a string.
Waiting:4. reverseString("hello") should return the string olleh.
Waiting:5. reverseString("Howdy") should return the string ydwoH.
Waiting:6. reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
* */

function reverseString(str) {
    const strArr = str.split('');
    const reversedArr = [];
    for (const char of strArr) {
        reversedArr.unshift(char);
    }
    return reversedArr.join('');
}