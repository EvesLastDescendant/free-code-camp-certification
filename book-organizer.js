/*
* Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.

Your books array should have a minimum of three objects.

You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.

The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.

The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.

The sortByYear function should return 0 if both releaseYear values are equal.

You should filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks.

You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You learned in a prior lesson that the sort() method will sort the array in place. This means the filteredBooks array will be mutated.

Tests:
Waiting:1. You should have a function sortByYear in your code.
Waiting:2. Your sortByYear function should take two parameters.
Waiting:3. Your sortByYear function should return -1 if the releaseYear of book1 object is smaller than that of the book2 object, 1 if the releaseYear of book1 object is larger than that of the book2 object, and 0 in all other scenarios.
Waiting:4. You should have an array books in your code.
Waiting:5. Your books array should have at least three book objects.
Waiting:6. Your books array should contain objects each with a string title, another string authorName, and a number releaseYear.
Waiting:7. You should have an array filteredBooks in your code.
Waiting:8. The filteredBooks array should have some of the books filtered out from the books array and not be empty.
Waiting:9. The filteredBooks array should only contain books from the original books array.
Waiting:10. The filteredBooks array should include only books released on or before a specified year.
Waiting:11. You should call the sort higher order function by passing the sortByYear callback function on the filteredBooks array.
* */

const books = [
  { title: "Book 1", authorName: "Author 1", releaseYear: 1940 },
  { title: "Book 2", authorName: "Author 2", releaseYear: 1960 },
  { title: "Book 3", authorName: "Author 3", releaseYear: 1980 }
];

const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
};

const filteredBooks = books.filter(book => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);
