let score ="33a" //even though it is integer due to "" it is treated as string
//console.log(typeof score)   // to get type
//console.log(typeof (score)) // to get type

let valueInNumber=Number(score) // Number makes score integer ;write with capital N
//console.log(typeof valueInNumber);
//console.log(valueInNumber); // check for score=33


/*
"33"->33
"33abc"->NaN
true->1 ; false->0
*/

let isLoggedIn =1 // check for "hello"
let booleanIsLoggedIn= Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);  // gives 1 value in bool as true

/*
1->true; 0->false
""->false
"hitesh"->true
*/

let someNumber=33
let stringNumber=String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);  // 33 is string

//********************************  Operations***********************/

let value=3
let negvalue=-value
//console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  // 2^3
// console.log(2/3);
// console.log(2%3);

let str1="hello"
let str2=" pratyush"
let str3=str1+str2
//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 +2);
// console.log(1 + 2 + "2");    just take idea not all operations works the way you think

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"