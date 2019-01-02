let changePic = function() {
  let x = document.getElementById("image1");
  x.src = "images/image1.jpg";
}

let changePicAgain = function() {
  let x = document.getElementById("image1");
  x.src = "images/image1_2.jpg";
}



let x = document.getElementById("image1");
x.addEventListener("mouseenter", changePic);
x.addEventListener("mouseleave", changePicAgain);
