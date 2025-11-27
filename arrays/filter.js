//Returns a new array with elements passing the condition.
const arr = [1, 2, 3, 4, 5, 6];

const even = arr.filter((n) => n % 2 == 0);
console.log(even);

// task:Filter out numbers greater than 50 in:
// [10, 55, 80, 32, 5]

const given = [10, 55, 80, 32, 5];

const greatest = given.filter((n) => {
  if (n > 20) {
    console.log(n);
  }
});
