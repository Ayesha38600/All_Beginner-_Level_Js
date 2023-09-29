// SetTimeOut & setInterval & ClearInterval in JavaScript

// setTimeOut ::
// If we have to show something after delay of time second then we
// use setTimeOut

// setTimeout(function() {
//     console.log("setTimeOut is Running!");

    
// },2000)            // after 2 sec dikhega o/p





















// setInterval ::
//Digital Clock bnali :)
// It show something after certain time in repeatedly
let getTime = setInterval(curnTime , 1000);
function curnTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();      //toLocaleTimeString()sy laptop time milega.
    document.getElementById("heads").innerHTML = time;
    console.log(time);
    
}




























// clearInterval ::
// we clear the time of function or stop  // zyada tar setInterval k msg ko end krwany k liye use krty h

function stop(params) {
    clearInterval(getTime);
    
}
stop();      // upr ji getTime  ta wo ruk gya 