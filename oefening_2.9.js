let testWhile = function() {
  let userInput = prompt("geef een string met de letter \"p\" in.");

  while(userInput.includes("p") != true) {
    userInput = prompt("probeer opnieuw! \ngeef een string met de letter \"p\" in.");
  }

  window.alert("dank u.");
}
