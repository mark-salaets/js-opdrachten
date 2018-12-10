let n1;
let n2;

let submit = function() {
  n1 = document.getElementById("form").elements.namedItem("firstNumber").value;
  n2 = document.getElementById("form").elements.namedItem("secondNumber").value;

  console.log(n1);
  window.alert(n1 * n2);
}


/*
let n1 = parseFloat(prompt("first number?"));
let n2 = parseFloat(prompt("second number?"));
let math = prompt("+, -, *, /");
let result;

if(math == "+") {
  result = n1 + n2;
  window.alert("the result is " + result);
} else if(math == "-") {
  result = n1 - n2;
  window.alert("the result is " + result);
} else if(math == "*") {
  result = n1 * n2;
  window.alert("the result is " + result);
} else if(math == "/") {
  result = n1 / n2;
  window.alert("the result is " + result);
} else {
  window.alert("error!");
}
*/
