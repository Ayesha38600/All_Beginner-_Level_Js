// Throw & Finaly in JavaScript

// throw() ::
// The throw statement allows you to create a custom error.
// throw me hum custom error bana sakte hai, for ex we check input
// only required num, or enter only value in inp b/w 5 to 20


// function myFun() {
//     let x = document.getElementById("inp").value;
//     try{
//         if (x == "") throw "Sorry! input is empty";
//         if (x>20)    throw "Value is Greater Than 20"
//         if(x<5)       throw "Value is less Than 5"
//         if(isNaN(x)) throw "NAN"


//         else{
//             document.querySelector("h1").innerHTML = x + "Aysh Your Number!"
//         }
//     }catch(error){
//         console.log(error);

//     }
  
    
// }























// finally :: always exute if try me error agya phir v chlega
// it run in both condition false, True 

function myFun() {
    let x = document.getElementById("inp").value;
    try{
        if (x == "") throw "Sorry! input is empty";
        if (x>20)    throw "Value is Greater Than 20"
        if(x<5)       throw "Value is less Than 5"
        if(isNaN(x)) throw "NAN"


        else{
            document.querySelector("h1").innerHTML = x + "Aysh Your Number!"
        }
    }catch(error){
        console.log(error);

    }finally{
        console.log("Program is .......");
    }
  
    
}















































