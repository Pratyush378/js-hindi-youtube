let score ="33a" //even though it is integer due to "" it is treated as string
console.log(typeof score)   // to get type
console.log(typeof (score)) // to get type

let valueInNumber=Number(score) // Number makes score integer ;write with capital N
console.log(typeof valueInNumber);
console.log(valueInNumber); // check for score=33


/*
"33"->33
"33abc"->NaN
true->1 ; false->0
*/

let isLoggedIn =1 // check for "hello"
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);// gives 1 value in bool as true
/*
1->true; 0->false
""->false
"hitesh"->true
*/

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // 33 is string