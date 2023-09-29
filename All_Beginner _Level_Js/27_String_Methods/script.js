// String Methods in Javascript

// Slice :
// In slice method we give index no and it return string .In
// slice we have two parameter "start index", "end index"

// let str = "AYSH GHAZIYAN";
// let add = str.slice(0,4)   //AYSH MILEGA 0 TO LEKIN LENGTH WISE 4 MILEGAY CHARACTERS
// console.log(add);
//space is also giny jyngy

// let str = "AYSH GHAZIYAN";
// let add = str.slice(0,-3)
// console.log(add);

//remember 
// G   H   A     Z       I 
// 0   1   2     3        4


// G   H   A     Z       I 
// -5 -4  -3    -2      -1





















// SubString
// subString method is similar to slice but it cannot accept
// negative number

// let str = "AYSH GHAZIYAN";
// let add = str.substring(0,3)        
// console.log(add);        //work krega


// let str = "AYSH GHAZIYAN";
// let add = str.substring(0,-3)
// console.log(add);        // not work bcx -ve str














// subStr
// subStr is also similar to slice it also not accept negative
// no . if we have to access string from end we use -ve

// let str = "AYSH GHAZIYAN";
// let add = str.substr(0,3)
// console.log(add);


// let str = "AYSH GHAZIYAN";
// let add = str.substr(-4)
// console.log(add);






















// Replace :
// The replace method replace a specified value with another 
// value in a string
// let str = "AYSH hello";
// let add = str.replace("hello" , "Ghaziyan");   //hello ki jaga Ghaziyan ajyngy :)
// console.log(add);























// CharAt :
// In this method we write index no theb it give character 
// of those number
// let str = "AYSH GHAZIYAN";
// let add = str.charAt(5)
// console.log(add);















// charCodeAt
// Each character have unicode, charCodeAt method give unicode
// of any character (unicode har char ka different no hota ha)
// let str = "AYSH GHAZIYAN";
// let add = str.charCodeAt(3)
// console.log(add);


























// Trim method
// Trim method remove the unneccesary space
// let str = "    AYSH GHAZIYAN";
// let add = str.trim();
// console.log(add);
// console.log(str);


















// Split :
// split method convert string into array 
// let str = "AYSH GHAZIYAN";
// let add = str.split()
// console.log(add);


















// toUpperCase :
// It convert the string into capital letter
// let str = "Aysh Ghazi";
// let add = str.toUpperCase()
// console.log(add);



















// toLowerCase :
// It convert the string into small letter
// let str = "Aysh Ghazi";
// let add = str.toLowerCase()
// console.log(add);













// concat method
// let str = "Aysh Ghazi";
// let str2 = " Love Forever"
// let add = str.concat(str2)
// console.log(add);


























// String Challenge :

// use for loop to print string
let name = "Aysh"
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
    
}