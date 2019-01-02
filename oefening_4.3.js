let changeToGreen = function() {
  let par = document.getElementById("text");
  par.classList.remove("red","blue");
  par.classList.add("green");
}

let changeToRed = function() {
  let par = document.getElementById("text");
  par.classList.remove("green","blue");
  par.classList.add("red");
}

let changeToBlue = function() {
  let par = document.getElementById("text");
  par.classList.remove("red","green");
  par.classList.add("blue");
}

let x = document.getElementById("green");
x.addEventListener("click", changeToGreen);

let y = document.getElementById("red");
y.addEventListener("click", changeToRed);

let z = document.getElementById("blue");
z.addEventListener("click", changeToBlue);
