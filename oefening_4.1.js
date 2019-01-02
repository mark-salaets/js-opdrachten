let redBorder = function() {
  let x = document.getElementById("image1");
  x.style.border = "solid red 3px";
}

let noBorder = function() {
  let x = document.getElementById("image1");
  x.style.border = "";
}

document.getElementById("image1").addEventListener("mouseenter", redBorder);
document.getElementById("image1").addEventListener("mouseleave", noBorder);
