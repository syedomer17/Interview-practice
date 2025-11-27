 console.log(a)
const a = {x:1};
console.log(a)
const b = a;
console.log(b)
console.log(a.x)
b.x = 5;
console.log(b)
console.log(a.x)// the value of a.x is change because b is reference to a
console.log(omer)
var omer = "ali"

if(true){
    let omer = "veli"
    console.log(omer)
}

function test() {
  console.log(x);
  var x = 5;
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}
test();

const arr = [1,2,3];
const newArr = arr;
newArr.push(4);
console.log(arr);
console.log(newArr);