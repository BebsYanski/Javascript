// different datatypes in Javascript are:
// numbers
// strings
// objects :this is a data structure which is a collection of multiple data types. It takes in a key then a value.
// booleans : datatype with only two possible values --> true/false
// arrays : this is a data structure(Object) which is a collection of multiple data types.
// null : This is one which has been intentionally left empty
// undefined : This is one which has no value

let age = 23; // number
let name = "Yanski"; // strings
let name2 = 'Yanski';// strings
let name3 = `Yanski`;// strings

var names = ["Yannick", "Yanski", 24, ["yan", "Paul"]];

let person = {name: "Yannick", age: 12, height: "1.34m", name: "Yanski"}

console.log(typeof names);
console.log(names[3][1]);

//object.freeze(person): It prevents an object from being reassigned.

person.age = 26;

let isAdult = true;//boolean
isAdult = "Yan";


let me = null ;//null datatype;
let me2 =  undefined;// undefined datatype

let isNum = typeof isAdult === "number";

console.log(person.name);
console.log(person["age"]);
console.log(isNum);