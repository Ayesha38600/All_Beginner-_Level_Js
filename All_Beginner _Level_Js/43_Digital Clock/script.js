//Digital Clock bnali :)
// It show something after certain time in repeatedly


let GetTime = setInterval(curentTime ,1000);
function curentTime(params) {
    let datee = new Date();
    let timee = datee.toLocaleTimeString();
    document.querySelector("h1").innerHTML = timee ;
    let day = datee.toLocaleDateString();
    document.querySelector("h2").innerHTML = day + " Aysh !"  ;
   
    
}


