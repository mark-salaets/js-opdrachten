let b = 2;

let a=b++;
console.log("a=b++");
console.log("a = " + a);
console.log("b = " + b);
b = 2;
a = 0;
console.log(" ");


a=++b;
console.log("a=++b");
console.log("a = " + a);
console.log("b = " + b);
b = 2;
a = 0;
console.log(" ");

a=b--;
console.log("a=b--");
console.log("a = " + a);
console.log("b = " + b);
b = 2;
a = 0;
console.log(" ");

a=--b;
console.log("a=--b");
console.log("a = " + a);
console.log("b = " + b);
b = 2;
a = 0;
console.log(" ");

a+=b++;
console.log("a+=b++");
console.log("a = " + a);
console.log("b = " + b);
b = 2;
a = 0;
console.log(" ");

a=1; a+=++b;
console.log("a=1; a+=++b");
console.log("a = " + a);
console.log("b = " + b);
b = 2;
a = 0;
console.log(" ");

a=1; a-=b++;
console.log("a=1; a-=b++");
console.log("a = " + a);
console.log("b = " + b);
b = 2;
a = 0;
console.log(" ");

a=1; a-=++b;
console.log("a=1; a-=++b");
console.log("a = " + a);
console.log("b = " + b);
b = 2;
a = 0;
console.log(" ");

a=1; a+=b--;
console.log("a=1; a+=b--");
console.log("a = " + a);
console.log("b = " + b);
b = 2;
a = 0;
console.log(" ");

a=1; a+=--b;
console.log("a=1; a+=--b");
console.log("a = " + a);
console.log("b = " + b);
b = 2;
a = 0;
console.log(" ");
