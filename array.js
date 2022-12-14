let age = [1,6,8,2];
let length = age.length;
console.log(age);
// age.push(5,6)
// age.pop();//end of array

// age.unshift()//beginning of array
// age.shift()
age.splice(2,1,5,3)//used to manipulate middle of array
console.log(age);
age.slice(2,-1)
age.forEach((age,index,ary) =>{
  console.log(age,index,ary);
});

console.log(length);


// let names = ["Yannick", "Yanski", 24, ["yan", "Paul"]];
// let person = {name : "Yannick", age: 42, school: "UB", height: "1.34m"}

// for (x in names){
//   console.log(names[x]);
// }
// console.log("\n\n");
// for (x in person){
//   console.log(person.x);
// }
