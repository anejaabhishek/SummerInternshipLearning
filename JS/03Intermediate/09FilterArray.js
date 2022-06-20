// FILL

var testArray = [2, 3, 5, 7, 11, 15];

// console.log(testArray.fill("filled", 2, 5));

// Generally when range is used, the initial value is inclusive and the final is exclusive.


// FILTER

const numberArray = [23, 24, 35, 55, 75, 100]

const result = numberArray.filter((num) => (num < 55));

// console.log(result);


// SLICING

var users = ["Ram", "Rohan", "Yash", "Pulkit", "Arnav", "Abhishek"];

// console.log(users.slice(1,4));
// console.log(users.slice(1));
// console.log(users);

// While slicing range is passed


// SPLICING

users.splice(1, 4, "Chetan", "Raman");
console.log(users);

// In spicing the starting index and how many elements from the start i.e. count is passed.
// Also any number of elements to replace them can be passed





