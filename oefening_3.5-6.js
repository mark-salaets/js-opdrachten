let changePic = function(e) {
    let x = document.getElementById(e.target.id);

    switch (e.target.id) {
      case "image1":
        x.src = "images/image1_2.jpg";
        break;
      case "image2":
        x.src = "images/image2_2.jpg";
        break;
      case "image3":
        x.src = "images/image3_2.jpg";
        break;
      case "image4":
        x.src = "images/image4_2.jpg";
        break;
      case "image5":
        x.src = "images/image5_2.jpg";
        break;
    }
}

let changePicAgain = function(e) {
    let x = document.getElementById(e.target.id);

    switch (e.target.id) {
      case "image1":
        x.src = "images/image1.jpg";
        break;
      case "image2":
        x.src = "images/image2.jpg";
        break;
      case "image3":
        x.src = "images/image3.jpg";
        break;
      case "image4":
        x.src = "images/image4.jpg";
        break;
      case "image5":
        x.src = "images/image5.jpg";
        break;
    }
}

document.getElementsByClassName("container")[0].addEventListener("mouseenter", changePic, true);
document.getElementsByClassName("container")[0].addEventListener("mouseleave", changePicAgain, true);
