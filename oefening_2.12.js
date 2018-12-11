let temperatureConversion = function() {
  let choice = prompt("\
  Menu \n\
  0.End of the program.\n\
  1.Celsius to Fahrenheit.\n\
  2.Celsius to Kelvin.\n\
  3.Fahrenheit to Celsius.\n\
  4.Fahrenheit to Kelvin.\n\
  5.Kelvin to Celsius.\n\
  6.Kelvin to Fahrenheit.\
  ");
  let c;
  let k;
  let f;


  switch (choice) {
    case "0":

      break;
    case "1":
      c = parseFloat(prompt("geef een temperatuur (celsius) in."));
      f = (c * 9/5) + 32;
      window.alert(f + " fahrenheit");
      break;
    case "2":
      c = parseFloat(prompt("geef een temperatuur (celsius) in."));
      k = c + 273.15;
      window.alert(k + " kelvin");
      break;
    case "3":
      f = parseFloat(prompt("geef een temperatuur (fahrenheit) in."));
      c = (f - 32) / (9/5);
      window.alert(c + " celsius");
      break;
    case "4":
      f = parseFloat(prompt("geef een temperatuur (fahrenheit) in."));
      k = ((f - 32) * (5/9)) + 273.15;
      window.alert(k + " kelvin");
      break;
    case "5":
      k = parseFloat(prompt("geef een temperatuur (kelvin) in."));
      c = k - 273.15;
      window.alert(c + " celsius");
      break;
    case "6":
      k = parseFloat(prompt("geef een temperatuur (kelvin) in."));
      f = (k * 9/5) - 459.67;
      window.alert(f + " fahrenheit");
      break;
    default:
      window.alert("incorrect cijfer");
      break;
  }
}
