let compare = function() {
  let pwd = document.getElementById("password");
  let confirm = document.getElementById("confirmation");

  if (pwd.value == confirm.value) {
    pwd.style.backgroundColor = "green";
    confirm.style.backgroundColor = "green";
  } else {
    pwd.style.backgroundColor = "red";
    confirm.style.backgroundColor = "red";
  }
}

document.getElementById("password").addEventListener("keyup", compare);
document.getElementById("confirmation").addEventListener("keyup", compare);
