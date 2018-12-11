let calcAverage = function() {
  let n = prompt("geef een geheel getal");
  let sum = 0;
  let counter = 0;



  while(n >= 0) {
    if(n % 1 != 0) {
      window.alert("geen geheel getal! \nprobeer opnieuw.");
      n = parseFloat(prompt("geef een geheel getal"));
    } else {
      sum = +sum + +n;
      n = parseFloat(prompt("geef nog een geheel getal"));
      counter++;
    }


  }

  window.alert("aantal nummers: " + counter + "\ngemiddelde: " + sum / counter);


}
