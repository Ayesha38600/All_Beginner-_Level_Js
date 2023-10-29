const ctx = document.getElementById("myChart").getContext("2d");
let delayed;
let gradient = ctx.createLinearGradient (0, 0 , 0 , 400);
// gradient.addColorStop(0,'rgba(88, 123, 213, 1)'),
gradient.addColorStop(0,'#fff'),
gradient.addColorStop(1,'transparent ');
const config = {
type : 'line', 
data: {
    labels:[2001, 2002 , 2003, 2004 , 2005 , 2023, 2070, 8090],
    
    datasets: [
{
    data:[600, 600, 550, 700, 800, 300],
    label: "finance data",
    borderColor : "#fff",
  
    backgroundColor : gradient,
    fill: true,
    tension : 0,
    PointBackgroundColor: "rgb(189, 195, 199 , 0.4)",
  

}

    ]

},
options:{
responsive: true ,
radius: 10,
hoverRadius: 12,
hitRadius : 30,
animation : {
    onComplete : ()=>{
        delayed = true
    },
    delay :(context) =>{
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
            delay = context.dataIndex * 300 + context.dataIndex* 300;

            alert("aysh")
        }
        return delay;
    }
}
}
}

const myChart = new Chart(ctx , config);