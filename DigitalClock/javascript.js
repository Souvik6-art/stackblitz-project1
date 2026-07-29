const clock = document.getElementById('Clock');

setInterval(function(){
    let date= new Date();

clock.innerHTML =date.toLocaleTimeString();
},1000) ;


const date= document.getElementById('Date');
let date1=new Date();
//date.innerHTML= date1.toLocaleDateString();
date.innerHTML=date1.toDateString();
