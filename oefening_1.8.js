let age;

let validate = function() {
  age = document.getElementById("age").value;

  if(age<18) {
    window.alert("u bent minderjarig");
  } else {
    window.alert("u bent meerderjarig");
  }
}
