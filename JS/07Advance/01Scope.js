// Difference between "var" and "let" keyword

console.log(name);

var name = "Abhishek";


// *****

// if above code runs, it will print "undefined"
// but if we do the same thing with "let" keyword as below, it gives an error

// *****

console.log(anotherName);

var anotherName = "Vishu";


// *****

// in javascript socpe is not defined by {}
// but is defined by function()

// *****

if(true){
    var firstName = "John";
}

console.log(firstName);


// *****

// the above code will run completely fine as the scope of var is not defined by {}
// but if we use "let" instead of "var" inside {} like below, then it's scope will be limited to {}

// *****



if(true) {
    let lastName = "Miller";
}

console.log(lastName);



// *****

// Now the above code will give us an error
// many times we want the code to give error rather than undefined
// that's where we use let
// and if we want the scope of something to be limited to {}, then "let" is used

// *****




