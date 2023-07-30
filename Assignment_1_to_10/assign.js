"use strict";
// Assigment 01 :  
//  part 1 :
// Ive install the VS code , Node js  Completely : 
// Part 02  :
var x = "Ahmad ";
let m = "Hello " + x + "Hope you are fine , lets go outside.";
console.log("output of part 1 : ");
console.log(m, "\n");
// Part 03 : 
console.log("Output of part 2 : ", "\n", x.toLowerCase(), "\n", x.toUpperCase());
// title case:
var x = "aHmad";
// string indexing :
var y = x[0].toUpperCase() + x.slice(1).toLowerCase();
console.log("Output of part 3 : ", "\n", y, "\n");
// Part 04 :
let n = "Albert Einstein";
let quote = `"A person who never made a mistake never tried anything new."`;
console.log("Output of part 4 : ", "\n", n, "once said, ", quote, "\n");
// part 05 :
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "A person who never made a mistake never tried anything new."`;
console.log("Output of part 5 : ", "\n", message, "\n");
// part 06 :
let person = "   Albert Einstein  \t \n";
console.log("Output of part 6 : ", "\n spaces :Start:", person, ":End:Spaces");
console.log("Output of part 6 : ", "\n spaces removed : start:", person.trim(), ":End:Spaces removed", "\n");
// part 07 & 8 :
// Some Operations : 
let x1 = 5 + 3;
let x2 = 11 - 3;
let x3 = 4 * 2;
let x4 = 16 / 2;
console.log("Output of part 7 : ", "\n Add : ", x1, "\n Subtract:", x2, "\n Multiply:", x3, "\n Divide :", x4, "\n");
// part 09 :
let fav_num = 22;
function message1(n) {
    console.log("Output of part 8 : ", "\n", `My favorite number is ${n}`, "\n");
}
message1(fav_num);
// part 10 :
// comments :
// Basically my program here is a simple function that takes two numbers and return the sum of them.
let num1 = 5;
let num2 = 10;
function message2(n, n1) {
    console.log("Output of part 10 : ", "\n", `The sum of ${n} and ${n1} is ${n + n1}`, "\n");
}
message2(num1, num2);
