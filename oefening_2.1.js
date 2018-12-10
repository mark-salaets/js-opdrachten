let surfaceRectangle = function() {
  let width = prompt("width?");
  let length = prompt("length?");

  window.alert("the surface of the rectangle is " + width * length);
}

let perimeterRectangle = function() {
  let width = prompt("width?");
  let length = prompt("length?");
  let perimeter = (width * 2) + (length * 2);

  window.alert("the perimeter of the rectangle is " + perimeter);
}
