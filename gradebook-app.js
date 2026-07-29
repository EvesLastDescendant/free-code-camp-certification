/*
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

    User Stories:

    You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.

    You should have a function named getGrade that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:

    Score Range	Grade
100	"A+"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"
You should have a function named hasPassingGrade that takes a score as a parameter and returns either true or false depending on if the score corresponds to a passing grade.

    The hasPassingGrade function should use the getGrade function to get the letter grade, and use it to determine if the grade is passing. A passing grade is anything different from "F".

    You should have a function named studentMsg that takes an array of scores and a student score as the parameters. The function should return a string with the format:

    "Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
"Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.
    Replace average-goes-here with the average of total scores and grade-goes-here with the student's grade. Use getAverage to get the average score and getGrade to get the student's grade.

    Tests:
Waiting:1. You should have a function named getAverage.
    Waiting:2. Your getAverage function should return a number.
    Waiting:3. getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]) should return 71.7.
    Waiting:4. getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]) should return 85.4.
    Waiting:5. getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]) should return 92.4.
    Waiting:6. getAverage([10, 20, 30, 40, 55, 65, 75, 83]) should return 47.25.
    Waiting:7. getAverage([10, 20, 30, 40, 50, 60, 70, 97]) should return 47.125.
    Waiting:8. Your getAverage function should return the average score of the test scores.
    Waiting:9. You should have a function named getGrade.
    Waiting:10. Your getGrade function should return "A+" if the score is 100.
Waiting:11. Your getGrade function should return "A" if the score is between 90 and 99.
Waiting:12. Your getGrade function should return "B" if the score is between 80 and 89.
Waiting:13. Your getGrade function should return "C" if the score is between 70 and 79.
Waiting:14. Your getGrade function should return "D" if the score is between 60 and 69.
Waiting:15. Your getGrade function should return "F" if the score is between 0 and 59.
Waiting:16. You should have a function named hasPassingGrade.
    Waiting:17. Your hasPassingGrade function should return a boolean value.
    Waiting:18. Your hasPassingGrade function should return true if the grade is an "A".
    Waiting:19. Your hasPassingGrade function should return false if the grade is an "F".
    Waiting:20. Your hasPassingGrade function should return true for all passing grades.
    Waiting:21. You should have a function named studentMsg.
    Waiting:22. studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37) should return the following message: "Class average: 71.7. Your grade: F. You failed the course.".
    Waiting:23. studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100) should return the following message: "Class average: 50.8. Your grade: A+. You passed the course.".
    Waiting:24. studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85) should return the following message: "Class average: 48.25. Your grade: B. You passed the course.".
    Waiting:25. studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75) should return the following message: "Class average: 45.625. Your grade: C. You passed the course.".
    Waiting:26. Your studentMsg function should return the correct message based on the student's score and the class average.
*/


function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90 && score <= 99) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else {
        return 'F';
    }
}

function hasPassingGrade(score) {
    const grade = getGrade(score);
    return grade === 'A+' || grade === 'A' || grade === 'B' || grade === 'C' || grade === 'D';
}

function studentMsg(scores, studentScore) {
    const average = getAverage(scores);
    const grade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);

    if (passed) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }
}



