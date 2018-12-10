let height;
let birthdate;
let validate = function() {
  height = document.getElementById("height").value;
  birthdate = document.getElementById("birthdate").value;

  window.alert(  ((((height * 2)+5)*50)-birthdate) +1766  );
}
