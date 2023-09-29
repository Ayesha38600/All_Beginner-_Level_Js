// Error Handling :
// :: try & catch in JavaScript ::

// The try statement allows you to define a block of code to be
//  tested for errors while it is being executed.
// The catch statement allows you to define a block of code to
//  be executed, if an error occurs in the try block.
 
 
/*

 In try we can give multiple code statement if any one 
 code statement come error then they not execute next line of 
 code catch() method  catch error and show error
*/ 
 
   
 
//  if we use settimeout inside try and give error inside try
// then it give own error and try, catch not work because try,catch
// is synchronous and setTimeout is Asynchronous
 





// catch us error ko catch krdega 
// red colour ka error ni ab nzr ay ga q k add() fn to tha hi nhi define so error agya and wo catch py chla gya  

// try{
// console.log("try is start");
// add();
// console.log("try is end");
// }catch{
// console.log("Error is Encountered");
// }





// abb is nichy waly code mai add() fn bahir h try so red error ay ga dekhna 

// add();
// try{
//     console.log("try is start");
   
//     console.log("try is end");
//     }catch{
//     console.log("Error is Encountered");
//     }








// setTimeout is async and try catch synchrous hota h 
// synchrous ka matlb hota h ek line of code execute hogy to hi 2nd execute hoskty h 

// is wjha sy hi try and catch me setTimeout work ni krega and wo catch wala error ni dega q k wo to ek line of code execute krny k baad hi dusri krega so wo red error hi dega
// try{
// setTimeout(function (params) {
//     add();
// },2000)
// }catch{
// console.log("Error is Encountered");
// }




















// but set timeout me try catch kam krta h 

// setTimeout(function (params) {
//     try{
//         add();
// console.log("try is start");
//     }catch{
//     console.log("Error is Encountered");
//     }
// },2000)






















// yhn py red error ni ay ga nichy wALY PRGRM ME 
try{
add();
}catch(error){
    // console.log(error); 
    // console.log(error.name);
    // console.log(error.message);
    console.log(error.stack);

}


