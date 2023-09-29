// :: DOM in JavaScript ::
// Document Object Model

// Defination:
/* The DOM defines a standard for accessing documents: "The
 Document Object Model (DOM) is a platform and language-neutral
 interface that allows programs and scripts to dynamically access
 and update the content, structure, and style of a document."*/

// DOM represent content of html document as tree ::

// We can easily read, acces, update the content of HTML document

// Every web browser uses document object model to make web pages
// accessible  

// DOM is a technology with the help of this we completely  
// controll the html document with JavaScript

// jitne ne bhi chize document. se hoti hai wo sabhi dom hai

// document. sy jo cheex strt ho wo DOM HE 

// Five ways we acces html document ::

// getElementById();
// getElementByClassName();
// getElementByTagName();
// querySelector();
// querySelectorAll();


// let elem = document;      // whole html file called document
// console.log(elem);





// // ID


// let element = document.getElementById("head").innerHTML = "Ayesha Cute Girl" ;
// console.log(element);


// ClassName

// let element = document.getElementsByClassName("heads")[1].innerHTML;   // index no isliye lika q k wo confuse hora tha undefined dera tha bcx ids bhi di hui h html me humny isliye to ids different h is wjha sy humny usko bola index 1 wala do ya zero wala to heading or para respectively dega 
// console.log(element);




// TagName :: 


let element = document.getElementsByTagName("p")[0].innerHTML;
console.log(element);




