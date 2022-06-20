function init() {
    var firstName = "Abhishek";
    console.log("I am init");

    function sayFirstName() {
        console.log(firstName);
    }

    return sayFirstName;
}

var value = init();

value();

// *******************

// Being able to use the var "value" as a function is what closure imply
// When we assign a function to a variable then hte scope og the function does not end s there
// It's kind of reference, so memory cannot free it completely due to which we are able to access it by using value();

// Being able to do all the above the things is what closure as a property is.

// ********************


function doAddition(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = doAddition(4);
console.log(add5(5));

// The above thing can be done in the following way also :

console.log(doAddition(4)(5));

// reason for above code to be working is closure and the memory behaviour in javascript
// Memory behaviour means if any reference of a function is there, it will stay in the memory

// And writing code like function()()()().. is called "curring"