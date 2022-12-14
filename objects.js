const car = {color : "blue", numOfTyres: 5, model: "Toyota"}
let names = ['yan', 'bebs']
const myNewCar = {...car, speed: '25km/s', ...names}

car.age = 20;

const {color: hello , numOfTyres} = car;
console.log(hello)
// console.log(car);
// delete car.color;
// console.log(car["color"]);
myNewCar.carOwners = [...names]

console.log(car , myNewCar)

//To get the keys in an object
console.log(Object.keys(car));