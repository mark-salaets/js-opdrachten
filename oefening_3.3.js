let keyDown = function(e) {
  let key = event.keyCode;
  window.alert(key);
}

let x = document.getElementById("name");
x.addEventListener("keydown", keyDown);
