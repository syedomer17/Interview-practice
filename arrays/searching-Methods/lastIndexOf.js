//Same as indexOf, but searches from the end.

const num = [1, 2, 3, 4, 5, 1, 2, 3];

const get5 = num.lastIndexOf(5);// 4
console.log(get5)

// Task:

// Find last index of 5 in [5,1,5,2,5]

const given = [5,1,5,2,5]

const find5 = given.lastIndexOf(5);
console.log(find5)//4

//the lastindexOf function will check the array from right to left and return the index of the last occurrence of the specified element.