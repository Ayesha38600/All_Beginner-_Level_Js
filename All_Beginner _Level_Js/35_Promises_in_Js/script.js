// Promise in JavaScript ::
//diagram dekho 

// If any one promise then they compelete promise or reject 
// promise or pending promise

// Mostly We use promise for fetching API
// value get karne ke liye promise ki .then & catch() method use karte hai


// in promise we have  ::
// resolve, reject, pending






//jab API MILEGY YANI TRUE HOGY TO RESOLV MILEGA OTHERWISE reject
let prom = new Promise(function (resolve,reject) {
    let API =true ;
    setTimeout(function() {
        if (API) {
            console.log("mjhy Resolve mila!");
            
        }
        else{
            console.log("mjhy Reject mila!");
        }
        
    },3000)
    
   
});
let data = prom;        //pending
console.log(data);

prom.then(function (resolve) {
    console.log(resolve);
    
}).catch(function (reject) {
    console.log(reject);
})
 
 



















































 