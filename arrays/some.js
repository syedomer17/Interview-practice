const myNegitiveArray  = [1,-2,4,-5];

const hasNegivateNum = myNegitiveArray.some( n => n < 0);
console.log(hasNegivateNum);

// Task:

// Check if this array contains any string:
// [1, 2, "hello", 4]

const arr = [1, 2, "hello", 4, ];

const findString = arr.some((str) => {
 if(typeof str === "string"){
  console.log(str)
}
})