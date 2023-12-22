//array..spread operator sy new loc assign krdi to y variable jis sy only y py work hoga 
let x=[1 , 2 , 3];
let y=[...x];
y.pop();
console.log(x);
console.log(y);




// object
let s={
    name: "aysh" ,
    passion:"development"
}
let t={...s}
t.birth = "sept";  
console.log(s);
console.log(t);