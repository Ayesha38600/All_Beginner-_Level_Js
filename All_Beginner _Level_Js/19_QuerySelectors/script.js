// QuerySelector in JavaScript ::

// querySelector :
// querySelector sy hamay sirf first wala tag miljy ga agr bht sary p tags hongs etc to jo phly milega just usko le lega
//  let element = document.querySelector("p").innerHTML;
//  let element = document.querySelector(".heads").innerHTML;
//  let element = document.querySelector("#para").innerHTML;
//  let element = document.querySelector(".container").innerHTML;

//  console.log(element);


// querySelectorAll :
// querySelectorAll sy hamay all tags milengy

// let element = document.querySelectorAll("p")[1].innerHTML;
let element = document.querySelectorAll("#para")[0].innerHTML;
console.log(element);