//Returns true only if ALL elements pass the test.

const myarr = [2, 4, 6, 8, 10];

const positive = myarr.every((num) => num > 0);
console.log(positive);

// Task:

// Check if all numbers are even:
// [2, 4, 6, 9]

const given = [2, 4, 6, 9];

const checker = given.every(num => num % 2)
console.log(checker)
