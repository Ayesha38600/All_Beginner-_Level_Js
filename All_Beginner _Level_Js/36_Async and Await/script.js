// Async & Await in JavaScript
//async await ny .then catch ko replace krdya h ye bhi promise ki value ko get hi krta h
//  Async =>A synchronous fn h and iska matlb h jab isko data milega tab work krega otherwise koi aur work krega 
// await yani waite kr0 jab tak data na miljy promise sy  

// async await return promise
// async print also promise without using .then() and catch()
// Also using async for delaying time
 
 
// await wait for promise to return
// await not work without async

// EXAMPLE 1
  




let prom = new Promise(function (resolve,reject) {
    let API = true;
setTimeout(function (params) {
    if (API) {
        console.log("mjhy resolve mila");
        
    }
    else{
        console.log("mjhy reject mila");
    }
    
},3000)
    
})

async function check(resolve) {
    console.log("Executing");
let data = await prom;

console.log(data);
    
}

let b = check();
console.log(b);   //pending