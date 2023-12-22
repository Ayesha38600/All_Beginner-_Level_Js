// immutable ..see pics
let a=1;
let b=a;
b= b+2;
console.log(a);
console.log(b);


// mutable 
// array
let x=[1 , 2 , 3]
let y=x;
y.pop();
console.log(x);
console.log(y);

// object
let s={
    name: "aysh" ,
    passion:"development"
}
let t=s;
t.birth = "sept";  
console.log(s);
console.log(t);

