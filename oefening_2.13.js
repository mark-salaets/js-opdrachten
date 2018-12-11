let calcBMI = function() {
  let weight = parseFloat(prompt("geef uw gewicht(kg)"));
  let height = parseFloat(prompt("geef uw lengte(cm)"));
  let BMI = weight / ((height / 100) * (height / 100));

  if(BMI < 16.5) {
    window.alert(BMI.toFixed(2) + " = ondervoeding");
  } else if(BMI < 18.5) {
    window.alert(BMI.toFixed(2) + " = dunheid");
  } else if(BMI < 25) {
    window.alert(BMI.toFixed(2) + " = normale bouw");
  } else if(BMI < 30) {
    window.alert(BMI.toFixed(2) + " = overgewicht");
  } else if(BMI < 35) {
    window.alert(BMI.toFixed(2) + " = matig overgewicht");
  } else if(BMI < 40) {
    window.alert(BMI.toFixed(2) + " = ernstig overgewicht");
  } else {
    window.alert(BMI.toFixed(2) + " = morbide obesitas");
  }
}
