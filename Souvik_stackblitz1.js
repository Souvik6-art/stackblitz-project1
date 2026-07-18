 const buttons =document.querySelectorAll('.button')
//console.log(buttons);
const body= document.querySelector("body")
//const canvas =document.querySelector("canvas")
buttons.forEach(function(button){
  console.log(button);
button.addEventListener('click',function(e){
  console.log(e);
console.log(e.target);
/*
if(e.target.id== 'grey'){
  body.style.backgroundColor =e.target.id;
 // canvas.style.backgroundColor=e.target.id
}
else if(e.target.id== "green"){
  body.style.backgroundColor= e.target.id;
}
else if(e.target.id== "blue"){
  body.style.backgroundColor=e.target.id;
}
else if(e.target.id== "yellow"){
body.style.backgroundColor=e.target.id;
}*/


switch (e.target.id) {
  case 'grey':
    body.style.backgroundColor = e.target.id;
        break;

  case 'green':
    body.style.backgroundColor = e.target.id;
    break;

  case 'blue':
    body.style.backgroundColor = e.target.id;
    break;

  case 'yellow':
    body.style.backgroundColor = e.target.id;
    break;

  default:
    
    break;
}

})
})

