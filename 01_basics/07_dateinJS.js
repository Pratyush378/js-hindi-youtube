let mydate = new Date()  // object
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());

let mycreatedate= new Date(2023,0,23)  // 0 is treated as index so at 0 index january is present
//console.log(mycreatedate.toDateString());
let mycreatedate2 = new Date("2023-01-14")
//console.log(mycreatedate2.toLocaleString());

let mytimestamp = Date.now()
//console.log(mytimestamp);  // gies time in milliseconds from a certain given time
//console.log(mycreatedate2.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);  // gives 7 for month 8 because indexing starts from 0 so +1 added
console.log(newDate.getDate());   // gives exact date

