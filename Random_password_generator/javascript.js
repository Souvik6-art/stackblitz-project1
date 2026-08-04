
const passwordbox = document.getElementById("password");
const button = document.getElementById("button");
const chars= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!";

 function generate_Password(){
    let password="" ;
    for (let  i=0; i<=7; i++){


 let randomIndex=  Math.floor(Math.random()*chars.length);

password =password + chars[randomIndex]
    }
return password ;}

    button.addEventListener("click",function(){
        passwordbox.innerText= generate_Password();
    })
