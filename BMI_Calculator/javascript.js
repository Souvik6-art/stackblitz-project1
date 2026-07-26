
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('.result'); // fixed selector

  let bmi ;

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height`;
  } 
  else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight`;
  } 
  else {
     bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  }
  
  const category = document.querySelector('.category');

if (bmi< 18.5) {
  category.innerHTML = "Under Weight";
  
} 
else if (bmi>= 18.5 && bmi< 24.9) {
  category.innerHTML = "Normal Healthy";

} 
else if (bmi>= 25 && bmi< 29.9) {
  category.innerHTML = "Overweight";
} 
else {
  category.innerHTML = "Obese";
}

});