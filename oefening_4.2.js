let show = function() {
  let x = document.getElementById("text");
  x.style.visibility = "visible";
}

let hide = function() {
  let x = document.getElementById("text");
  x.style.visibility = "hidden";
}

document.getElementsByTagName("a")[0].addEventListener("click", show);
document.getElementsByTagName("a")[1].addEventListener("click", hide);
