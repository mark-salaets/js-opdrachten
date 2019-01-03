/**
 * Opdracht over Functiechaning
 * There are multiple ways to solve this so find the most
 * effecient one.
 */

// Give the size of the string
var CountString = function (text) {
  return text.length;
}

// Replace the first word in the chain to a C
var ReplaceThis = function (text) {
  var x = text.replace("This", "C");
  return x;
}

// Concatenate the two strings
var ConcatString = function (text1, text2) {
  var x = text1.concat(text2);
  return x;
}

// Display the fifth character of the string
var DisplayChar5 = function (text) {
  var x = text.charAt(4);
  return x;
}

// Display the first 9 characters
var DisplayChar9 = function (text) {
  var x = text.slice(0,9);
  return x;
}

// Capitalize the string
var CapitalString = function (text) {
  var x = text.toUpperCase();
  return x;
}

// Put the string in lowercase
var MinimalizeString = function (text) {
  var x = text.toLowerCase();
  return x;
}

// Delete spaces before and after the chain
var SupprEspaceString = function (text) {
  var x = text.trim();
  return x;
}

// Show true if the input parameter of the function is of type string
var IsString = function (text) {
  var x = typeof text;

  if (x == "string") {
    return true;
  }
}

// Display the file extension
var ExtensionString = function (text) {
  return text.split('.').pop();
}

// Count the number of spaces in the chain
var NumberEspaceString = function (text) {
  var x = (text.split(" ").length - 1);
  return x;
}

// Reverse a string of characters
var InverseString = function (text) {
  var x = text.split("").reverse().join("");
  return x;
}

/**
 * Oefeningen over getallen en wiskundige berekeningen
 */

 // Calculate the power of one number in relation to another (x to the power y)
var CalculationPower = function (x, y) {
  return Math.pow(x, y);
}

// Display the absolute value of a number
var ValueAbsolute = function (number) {
  return Math.abs(number);
}

// Display the absolute values of several numbers
var ValueAbsoluteArray = function (array) {
  var x = [];

  for(i=0;i<array.length;i++) {
    x.push(Math.abs(array[i]));
  }

  return x;
}

// Calculate the surface area of a circle according to its radius. Round it up to the nearest integer
var SufaceCircle = function (radius) {
  var x = (radius * radius * Math.PI);
  return Math.round(x);
}

// Calculate the hypothenuse of a rectangular triangle
var Hypothenuse = function (ab, ac) {
  return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}

// Calculate the BMI (Weight / (height x height). Keep only two digits after the decimal point.
var CalcIBM = function (weight, height) {
  var x = (weight / (height * height))
  return parseFloat(x.toFixed(2));
}
