/*
* Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a pairElement function that takes a string of any length as an argument.
The pairElement function should return a 2d array, where each inner array has two strings inside, the first string is one base from the input, and the second string the paired base.
When given A, the function should pair it with T.
When given T, the function should pair it with A.
When given C, the function should pair it with G.
When given G, the function should pair it with C.
Tests:
Waiting:1. You should create a function named pairElement.
Waiting:2. pairElement should take a single argument.
Waiting:3. pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
Waiting:4. pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
Waiting:5. pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
* */

function pairElement(str) {
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
        const base = str[i];
        let pairedBase;
        switch (base) {
            case 'A':
                pairedBase = 'T';
                break;
            case 'T':
                pairedBase = 'A';
                break;
            case 'C':
                pairedBase = 'G';
                break;
            case 'G':
                pairedBase = 'C';
                break;
        }
        pairs.push([base, pairedBase]);
    }
    return pairs;
}
