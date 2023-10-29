// javascript:void(0) is sy page reload ni hoga
let id="no";
selectData() 
localStorage.clear();
function manageData(params) {
    document.getElementById("msg").innerHTML ="";  //msg hataya plx enter name wala
    let name= document.getElementById("name").value;
    if (name == "") {
        document.getElementById("msg").innerHTML = "plz Enter Name!"
        
    }
    else{
        console.log(id);
        if (id=='no') {
// let arr = JSON.parse(localStorage.getItem('crud'));
let arr =getCrudData() ;
        //   console.log(arr); //bcx local storage is null thats why null dera
          if (arr==null) {
            let data=[name];
            setCrudData(data);
        }  
       
        else{
arr.push(name)

setCrudData(arr);

        }
        document.getElementById("name").value = "";
        document.getElementById("msg").innerHTML = "Data Added";
    }
    else{
        let arr =getCrudData() ;
        arr[id] = name;
        setCrudData(arr);
        document.getElementById("msg").innerHTML = "Data Updated";
    }
    document.getElementById("name").value = "";
    selectData() 
}

}


function selectData() {
    // let arr = JSON.parse(localStorage.getItem('crud'));
    let arr =getCrudData() ;
    if (arr!= null) {
        let html = "";
        let sno = 1;
        for (let k in arr) {
      html = html + `<tr><td>${sno}</td><td>${arr[k]}</td><td>
      
      <a href="javascript:void(0)" onclick="editData(${k})">Edit</a>
      
      
      <a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`
      sno++;
            
        }
        document.getElementById("root").innerHTML =html;

        console.log(html);
    }
    
}
function editData(recordId) {
    id = recordId;
    let arr =getCrudData() ;
     document.getElementById("name").value = arr[recordId];
}
function deleteData(recordId) {
    let arr =getCrudData() ;
    arr.splice(recordId , 1);
    setCrudData(arr);
    selectData();

    
}
function getCrudData() {
    let arr = JSON.parse(localStorage.getItem('crud'));

    return arr;
}
function setCrudData(arr) {
    localStorage.setItem('crud' , JSON.stringify(arr));

    
}