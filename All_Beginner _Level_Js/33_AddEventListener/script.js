// addEventListner

// This is new way

// previous we write event in html and apply on javascript file
// so lot time consume .so using addEventLister we give event
// and function in one file 
 

// document.getElementById("btn").addEventListener("click" ,myfun);
// function myfun(params) {
// document.body.style.backgroundColor = "red";
    
// }














// 2nd method 
// document.getElementById("btn").addEventListener("click" ,function func(params) {
//     document.querySelector("h1").style.backgroundColor = "pink"
//     document.querySelector("h1").style.border = "2px solid pink"
    
// });




















// 3rd method 
document.getElementById("btn").addEventListener("click" ,function func(params) {
    document.querySelector("h1").innerHTML = "We Learn Add EventListener !"
    
});



