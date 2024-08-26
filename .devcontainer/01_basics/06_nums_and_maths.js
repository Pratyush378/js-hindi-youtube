const balance =new Number(100)  // object
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));  // output in 2 decimal places

const othernum= 23.7849534
//console.log(othernum.toPrecision(3)); // output in 3 digits

const hundreds = 1000000
//console.log(hundreds.toLocaleString("en-IN"));  // indian standard

// +++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++
/*
console.log(Math);
console.log(Math.abs(-4));  // gives absolute  value
console.log(Math.round(4.6));  // 5
console.log(Math.ceil(4.3));   // 5
console.log(Math.floor(4.8));  // 4
console.log(Math.min(4,6,3,8));// 3

console.log(Math.random());  // gives any random value b/w 0 & 1
console.log((Math.random()*10)+1); // to get value greater than 1
*/

const min=10
const max=20
console.log(Math.floor(Math.random() * (max - min +1)) + min);  // random value b/w 10 and 20

