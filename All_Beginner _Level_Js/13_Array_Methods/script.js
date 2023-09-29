// Array Methods in Javascript


// push :
// Add elements to the end of an Array. Using push() we can add
//  elements to the end of an array.

// let friends = ["Aman", "Karan", "Harman", "Haris"];
// friends.push(33);
// console.log(friends);




// pop :
//  Remove an element from end of an Array.

// let friends = ["Aman", "Karan", "Harman", "Haris"];
// friends.pop();
// console.log(friends);


// shift
// Remove an Element from the front of an Array.

// let friends = ["Aman", "Karan", "Harman", "Haris"];
// friends.shift();
// console.log(friends);


// unshift
// Add elements to the front of an Array.

// let friends = ["Aman", "Karan", "Harman", "Haris"];
// friends.unshift("Sahil");
// console.log(friends);



// splice :
// splice() method changes the contents of an array by deleting
//  or replacing existing elements and/or adding new elements 
//  in place



let fruits = ["Apple" , "mango", 1, 2,78];

// fruits.splice(1, 2);   // 1st index sy 2 values delete krdega (mango and 1 will be deleted )
// fruits.splice(1,1,"Grapes") //1st index sy 1 value delete krdega yani mango and uski jaga py Grapes likh dega ek traha sy updation hory 

fruits.splice(2, 2 , "Ayesh" , "Ghaziyan");   // ye 2nd index sy 2 values del krdega and 2 values hi add krdega  Ayesh and Ghaziyan

console.log(fruits);




// Challenges ::

// Make array and add John in array at last
let names = ["Smith" ,"jennifer" ," Mukesh " , "Fouzan" ];
names.push("john");
console.log(names);

// Make array and delete name and add new name splice()

let Name = ["syeda Hareem" , "Syeda fiza" , " Maria"];
Name.splice(2,1,"Water")
console.log(Name);

