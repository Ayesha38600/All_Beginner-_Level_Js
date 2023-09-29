// Get & Set Method DOM in JavaScript
// html sy kuch lena called GET
// html mai kuch dena called SET

// DOM Get Method ::

// innerText:  
// It change the text of tag

// let element = document.querySelector("#prs").innerText;
// console.log(element);












// innerHTML:
// It change the html tag
// let element = document.querySelector(".heads").innerHTML;
// console.log(element);     //remember get method me innertext and innerhtml same kaam krta














// getAttribute:
//class , id , event are called attributes
// It give the attribute value 
// let element = document.querySelector("#prs").getAttribute("class");
// let element = document.querySelector("#prs").getAttribute("onclick");
// console.log(element); 
















// getAttributeNode:
// It give full attribute like : class="header"
// getattribute is better than node q k yhn khud value nikalni parh ry wo khud deta
// let element = document.querySelector("#prs").getAttributeNode("class"); 
// let element = document.querySelector("#prs").getAttributeNode("onclick"); 
// let element = document.querySelector("#prs").getAttributeNode("onclick").value; 
// console.log(element); 

















// attribute:
// It return all attribute which are present

// let element = document.querySelector("#prs").attributes; 
// console.log(element); 










// ...................................................................... 


// DOM Set Method ::

// innetText:
// let element = document.querySelector("#prs").innerText = "AYESH IS HANDSOME:) GIRL"; 
// console.log(element); 








// innerHTML:
// console.log(document.body.innerHTML); 
// let element = document.querySelector("#prs").innerHTML = "<h1> New Heading </h1>";     // ye html hi badal di using DOM 
// console.log(element);





















// setAttribute:
// The setAttribute() method sets a new value to an attribute.
// If the attribute does not exist, it is created first.
// It take to parameter attribute name and value

// let element = document.querySelector("#prs1").setAttribute("class" , "newattribute");    
// console.log(document.body.innerHTML); 














// attribute:
// in this we change the attribute value using array index no.
// yhn hum tag ka index no deky uski vlues chng krty h prs1 mai 0 index py id = prs1 h and 1st INDEX PY onclick h
// let element = document.querySelector("#prs1").attributes[1].value = "Click Here()";    
// console.log(document.body.innerHTML); 








// removeAttribute:
// It remove the attribute , we give attribute name 

let element = document.querySelector("#prs1").removeAttribute("onclick");    
console.log(document.body.innerHTML); 





