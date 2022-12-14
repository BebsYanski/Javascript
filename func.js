// A Function is a reusable block of code which solves a specific task.
function sum(num1 = 3, num2 = 5){
  console.log(num1,num2);
    return num1 + num2;
} 

function getAge(yearOfBirth){
  console.log(yearOfBirth);
  return 2022 - yearOfBirth;
}

console.log(getAge(2000,1928));

let ans = sum(4,6);
console.log(ans);
console.log(age);

//Self invoking functions
(function () {
  let x = "Hello!!";  // I will invoke myself
})();
//*******************************************************/
(function (name) {
  console.log('You are Welcome', name);
})('Yanski');
//*******************************************************/
(()=>{
  console.log('Hi me');
})();

//Arrow functions:
// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;

const x = (x, y) => { return x * y };