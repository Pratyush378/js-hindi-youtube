//object  literals
const jsuser = {
    name: "Hitesh",
    age: 18,
    location: "Bihar",
    email: "hitesh@google.com",
    isLoggedIn:  false, // false not in " "  bcoz it is boolean not string
    lastLoginDays: ["Monday","Saturday"]
}
//console.log(jsuser);
//console.log(jsuser["email"]);  // search datatypes js mdn
//console.log(typeof jsuser["email"]);

jsuser.email="hello@google.com"
Object.freeze(jsuser) // freeze makes jsuser fixed now no any changes can be made to it
jsuser.email="pratyush"  // this will not be updated
//console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greeting2 = function(){
    console.log(`hellp js User,${this.name}`); // not  running
    
}
console.log(jsuser.greeting);
console.log(jsuser.greeting2());

