const accountId = 14453 // const -> to declare constants
let accountEmail ="Pratyush@gmail.com" // let and var to declare variables
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState
/*
Prefer not to use var
because of isuue in block scope and functional
*/
//accountId = 2 // constant value cant be changed

// Value Updation
accountEmail="hello@gmail.com"
accountPassword ="22112211"
accountCity = "patna"

//Print value
console.log(accountId);

//Print value in tabular Form
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])