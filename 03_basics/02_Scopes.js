let a = 300
if (true) {
    let a = 10
    const b = 20  //scope generally refers to terms within "{   }"
    //console.log("INNER: ", a);  // for this scope a =10
}
//console.log(a);



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
     //console.log(website);
}

 //console.log(username);



//  INTERESING

console.log(addone(5))

function addone(num){
    return num + 1
}
