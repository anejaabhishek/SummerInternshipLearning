var line1 = "Abhishek\'s words were \" I\'ll do it \"";
var line2 = 'Abhishek\'s words were \" I\'ll do it \"';
var line3 = `Abhishek's words were "I'll do it"`;

// ********

// all three (line1, line2, line3) have the same value, just method of assigning is different
// if we want to use ' , " " etc then, using `` will be a good choice

// strings in javascript contains many methods like some below :

// ********

console.log(line1);
console.log(line1.charAt(0));
console.log(line1.endsWith("?"));
console.log(line1.includes("Abhishek"));
console.log(line1.toUpperCase());

