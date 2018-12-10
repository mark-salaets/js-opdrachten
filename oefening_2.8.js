let date = new Date().getDay();
console.log(date);


let weekday = function() {



  switch( date ) {
    case 0:
      window.alert("zondag");
      break;
    case 1:
      window.alert("maandag");
      break;
    case 2:
      window.alert("dinsdag");
      break;
    case 3:
      window.alert("woensdag");
      break;
    case 4:
      window.alert("donderdag");
      break;
    case 5:
      window.alert("vrijdag");
      break;
    case 6:
      window.alert("zaterdag");
      break;
  }
}
