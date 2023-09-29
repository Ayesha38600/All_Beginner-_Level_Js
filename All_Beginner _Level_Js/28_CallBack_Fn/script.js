// Callback In JavaScript ::


// Defination ::
// A callback is a function passed as an argument to another 
// function. This technique allows a function to call another
// function. A callback function can run after another function
// has finished.

// Function inside another function is called callback function
// A callback function can run after another function has finished







// i . e : 1st fn k argument mai ek dusra fn and us fn ko as a parameter 1st fn mai deky whn call krdo 
// function a(b) {
//     console.log("fn a is Running !");
//     b();
// }
// a(function b() {
//     console.log("fn b is Running !");
// });




















// fn k andr hi sec fn h  
// function a() {
//     console.log("fn a is Running !");

//     function b() {
//         console.log("fn b is Running !");
        
//     }
//     b();
    
// }
// a();























// function a() {
//     setTimeout(function () {
//         console.log("fn a is Running !");
        
//     },2000)
    
// }
// function b() {
//     console.log("fn b is Running !");
    
// }
// a();
// b();

// setTimeout ko callBack ki help sy rok skty h jo above masla aya 
//simple b fn ko settimeout k andr call krdo
// function a() {
//     setTimeout(function () {
//         console.log("fn a is Running !");
//         b();
//     },2000)
    
// }
// function b() {
//     console.log("fn b is Running !");
    
// }
// a();






// OR 

function a(b) {
    setTimeout(function () {
        console.log("fn a is Running !");
        b();
    },2000)
    
}

a(function b() {
    console.log("fn b is Running !");
    
});