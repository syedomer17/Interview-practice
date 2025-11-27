const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc,curr) => acc + curr,0);
console.log(sum)

//task: Using reduce(), convert:
// ['a', 'b', 'c'] → "abc"

const given = ['a', 'b', 'c']

const string = given.reduce((acc,curr) => acc + curr, "");
console.log(string); 