let name;
let firstName;
let city;

let validate = function() {
  name = document.getElementById("formName").elements.namedItem("name").value;
  firstName = document.getElementById("formName").elements.namedItem("firstName").value;
  city = document.getElementById("formName").elements.namedItem("city").value;

  window.alert("name: " + name + "\nfirst name: " + firstName + "\ncity: " + city);
}


/*
let name;
let firstName;
let city;

name = prompt("What is your name?");

while(name == null || name == "") {
  name = prompt("try again! \nWhat is your name?");
}

firstName = prompt("What is your first name?");

while(firstName == null || firstName == "") {
  firstName = prompt("try again! \nWhat is your first name?");
}

city = prompt("In what city do you live?");

while(city == null || city == "") {
  city = prompt("try again! \nIn what city do you live?");
}

window.alert("name: " + name + "\nfirst name: " + firstName + "\ncity: " + city);
*/
