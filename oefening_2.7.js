let makeChoice = function() {
  userChoice = prompt("choose 1, 2 or 3.");

/*
  if(userChoice == 1) {
    window.alert("1. Thank you");
  } else if(userChoice == 2) {
    window.alert("2. Hello");
  } else if(userChoice == 3) {
    window.alert("3. Good bye");
  } else {
    window.alert("Excuse me, what do you want?");
  }
*/

  switch(userChoice) {
    case "1":
      window.alert("1. Thank you");
      break;
    case "2":
      window.alert("2. Hello");
      break;
    case "3":
      window.alert("3. Good bye");
      break;
    default:
      window.alert("Excuse me, what do you want?");
  }
}
