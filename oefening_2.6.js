let tab = [-2, 1, 4];

let subtract = function(x) {
  n = x - tab[0];

  if(x < 0) {
    window.alert("negatief getal");
  } else {
    window.alert("positief getal");
  }
}

let display = function() {
  for(i=0;i<tab.length;i++) {
    subtract(tab[i]);
  }
}
