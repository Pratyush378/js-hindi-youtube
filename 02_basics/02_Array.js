// how to link two arrays

const marvel=["Spiderman","Iron Man"]
const dc =["batman","joker"]
const hindi=["shaktiman","bheem"]

const allheros=marvel.concat(dc)
//console.log(allheros);

const allhero=[...marvel,...dc,...hindi]  // ... -> spread operator used to link arrays and objects
//console.log(allhero);


// some more properties of array

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));
