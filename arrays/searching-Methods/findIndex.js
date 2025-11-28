//Returns index of first matched element.

const arr = [5, 12, 8, 130, 44];

const findingIndex = arr.findIndex(n => n > 40);
console.log(findingIndex)

// Task:

// Find index of element "cat" in:
// ["dog", "rat", "cat", "bat"]

const given = ["dog", "rat", "cat", "bat"]

const findCat = given.findIndex( n => n === "cat");
console.log(findCat); 