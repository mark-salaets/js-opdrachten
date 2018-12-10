let tab = [-2, 1, 4];

let add = function(x) {
  return x + 2;
}

let display = function() {
  for(i=0;i<tab.length;i++) {
    window.alert(tab[i] + " + " + 2 + " = " + add(tab[i]));
  }
}
