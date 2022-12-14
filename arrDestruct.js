let ages = [1,2,3,4,5];

let [age1,age2,age3,age4,age5] = ages;

let [ag1,,,ag4] = ages;

let [a, ...b]= ages;

console.log(age1,age2,age3,age4,age5);
console.log(ag1,ag4);
console.log(a,b);
// let val1 = ages[0];
// let val2 = ages[1];
// let val3 = ages[2];
// let val4 = ages[3];
// let val5 = ages[4];