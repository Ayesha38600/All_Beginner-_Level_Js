//Nested loop 
// it means loop k andr loop 
// we take any loop inside another loop

let i = 0;
while (i<3) {
    console.log("Number is " + i);
for (let a = 0; a < 3; a++) {
    console.log("New Number is " + a);
    
}
    i++;
    
}

//jab ye nested loop mai jy ga to jab tk uski condition false ni hojaty whin rhy ga phir jab condition false hogy us sy bahir ay ga and big loop py jy ga phir again nested jab tk uski cond false ni hoty whin rhy ga etc