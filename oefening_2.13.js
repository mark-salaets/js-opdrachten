let calcBMI = function() {
  let weight = parseFloat(prompt("geef uw gewicht(kg)"));
  let height = parseFloat(prompt("geef uw lengte(cm)"));
  let BMI = weight / ((height / 100) * (height / 100));

  if(BMI < 16.5) {
    window.alert("Uw BMI is " + BMI.toFixed(2) + ".\nU bent ondervoed.");
  } else if(BMI < 18.5) {
    window.alert("Uw BMI is " + BMI.toFixed(2) + ".\nU bent te dun.");
  } else if(BMI < 25) {
    window.alert("Uw BMI is " + BMI.toFixed(2) + ".\nU bent normaal gebouwd");
  } else if(BMI < 30) {
    window.alert("Uw BMI is " + BMI.toFixed(2) + ".\nU heeft overgewicht");
  } else if(BMI < 35) {
    window.alert("Uw BMI is " + BMI.toFixed(2) + ".\nU heeft matig overgewicht");
  } else if(BMI < 40) {
    window.alert("Uw BMI is " + BMI.toFixed(2) + ".\nU heeft ernstig overgewicht");
  } else {
    window.alert("Uw BMI is " + BMI.toFixed(2) + ".\nU heeft morbide obesitas");
  }
}
