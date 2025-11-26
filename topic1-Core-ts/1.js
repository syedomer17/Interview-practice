const a = {x:1};
console.log(a)
const b = a;
console.log(b)
console.log(a.x)
b.x = 5;
console.log(b)
console.log(a.x)// the value of a.x is change because b is reference to a