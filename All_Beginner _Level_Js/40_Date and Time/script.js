// Date & Time in JavaScript ::

// it show the current date and time
// We have "new Date() Method which complete Date & Time" deta h

/*
 What is Date and Time in JS?
 In JavaScript, date and time are represented by the Date object.
 The Date object provides the date and time information and also
 provides various methods. A JavaScript date defines the 
 EcmaScript epoch that represents milliseconds since 1 January 
 1970 UTC.(1 jan 1970 sy wqt strt hua to js ki ek property h jo ye date deti h)
 
 
 
 :JavaScript count month from 0 to 11
date: year,month,date
Time: hour, minute, second
*/



// Date & Time
//  new Date()::
// let date = new Date();
// console.log(date);


















// Date.now():
// It give millisecond from 1 January 1970 
console.log(Date.now());

















// getMethod()
// We get the Time, Hour, minute, second, milliSecond
let datee = new Date(); 
console.log(datee.getHours());
console.log(datee.getMinutes());
console.log(datee.getSeconds());
console.log(datee.getMilliseconds());


















// getMethod() Date :

// toLocaleString()
let dat = new Date(); 
console.log(dat.toLocaleString());

// toLocaleDateString()
console.log(dat.toLocaleDateString());

// toLocaleTimeString()
console.log(dat.toLocaleTimeString());











// getFullYear()
// getMonth()
// getDay()
// getDate()

// getFullYear() 
console.log(dat.getFullYear());

// getMonth()
console.log(dat.getMonth());


// getDay()
console.log(dat.getDay());

// getDate()
console.log(dat.getDate());







// Set Method ::
// setDate(27);
// setMonth(3);
// setHours(6);
// setMinutes(27);
// setSeconds(27);
// setFullYear(2027);




// Using set method we set time ourself 
console.log(dat.setDate(18));   //is method sy humny apni marzi sy 18 date daldi
console.log(dat);



console.log(dat.setMonth(2));//is method sy humny apni marzi sy march month daldi
console.log(dat);




console.log(dat.setFullYear(2026));//is method sy humny apni marzi sy  year daldi
console.log(dat);





