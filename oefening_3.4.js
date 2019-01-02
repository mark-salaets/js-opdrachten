let reset = function() {
  let x = document.getElementsByTagName("input");

  for(i=0;0<x.length;i++) {
    x[i].value = "";
  }
}

let x = document.getElementById("resetBtn");
x.addEventListener("click", reset);
