const form =document.querySelector('form');

form.addEventListener('submit', function (e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmi_type = document.querySelector('#bmi-weight');

  if(height === "" || height <0 || isNaN(height)){
    results.innerHTML = `please enter a valid height ${height}`;
  } else if(weight === "" || weight <0 || isNaN(weight)){
    results.innerHTML = `please enter a valid weight ${weight}`;} else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);

      results.innerHTML = `<span>${bmi}</span>`;
    }

    const bmi_weight = (weight / ((height * height) / 10000)).toFixed(2);
  
    if (bmi_weight < 18.6){
      bmi_type.innerHTML = `<span> You're Underweight</span>`;
    }else if (bmi_weight <= 18.6 && bmi_weight >= 24.9){
      bmi_type.innerHTML = `<span> Your weight is Normal</span>`;
    } else {
      bmi_type.innerHTML = `<span> You're Over Weight</span>`;
    };
    
  });
  
  