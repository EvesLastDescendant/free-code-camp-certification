/*
In this lab you will create a function that converts a string to title case. Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.

"Web Development Is Awesome" is an example of a title cased string.

    Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

    User Stories:

    You should have a titleCase function that takes a string as an argument.
    The titleCase function should return a string with the first letter of each word capitalized and the rest of the word in lower case.
titleCase("I like to code") should return "I Like To Code".
titleCase("javaScript is fun") should return "Javascript Is Fun".
    Tests:
Waiting:1. You should create a function named titleCase.
    Waiting:2. titleCase should take a single argument.
    Waiting:3. titleCase("I'm a little tea pot") should return a string.
    Waiting:4. titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
Waiting:5. titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
    Waiting:6. titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
*/

function titleCase(str) {
    const strSplit = str.split(" ");
    for (let i = 0; i < strSplit.length; i++) {
        strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1).toLowerCase();
    }
    return strSplit.join(" ");
}
