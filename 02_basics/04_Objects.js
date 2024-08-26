//1->create object
const tinder = new Object()
//console.log(typeof tinder);

//2->another way

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

//3-> Nested Objects

const regularUse={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pratyush",
            lastname: "kum"
        }
    }
}
//console.log(regularUse.fullname);
//console.log(regularUse.fullname.userfullname.firstname);

//4-> Join two objects

const obj1 ={1: "a",2 : "b"}
const obj2 ={3: "a",4 : "b"}
const obj3 ={5: "a",6 : "b"}

const obj4={...obj1,...obj2,...obj3} // using spread operator just like array
//console.log(obj4);

//5->

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//6-> typedef type fubction 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course // to short a given term here courseInstructor to instructor

//console.log(instructor);