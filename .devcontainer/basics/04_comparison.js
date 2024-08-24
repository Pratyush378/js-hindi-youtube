// console.log(2 > 1);
// console.log(2 >=1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);  // dont write complex comparisons

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);  // reason is that equality check == and comparison > ,< ,>=
                         // works differently. comparisons conver null to 0 thats why null>=0 gives true
                         // while null>0 gives false

// console.log(undefined == 0);   //undefined means that a variable is created and no value is  assigned to it
// console.log(undefined > 0);      e.g-  arr[];
// console.log(undefined < 0);

//  ===  checks not only value data  type also
console.log("2" === 2);   // string compared with number
