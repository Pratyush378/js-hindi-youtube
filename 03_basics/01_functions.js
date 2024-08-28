function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName()

// 1-> function addTwoNumbers(number1, number2){
//      console.log(number1 + number2);
//     }
// console.log(addTwoNumbers(3,5));

// 2-> function addTwoNumbers(number1, number2){

//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(3, 5)
// console.log("Result:",result);


function loginUserMessage(username="sam"){
    if(username!="sam"){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage());
//console.log(loginUserMessage("Hitesh"));


function calculator(...num1){
    return num1
}
//console.log(calculator(200,400,800,100));



const user = {
    username: "hitesh",  // object
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)




