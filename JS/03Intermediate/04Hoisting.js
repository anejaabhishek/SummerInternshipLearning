tipper(55);

function tipper(a){
    console.log(a + 15);
}

// The above code is working as in the global context functions are scanned and made available

// anotherTipper(55);

var anotherTipper = function (a){
    console.log(a + 15);
}

// The above code is not working as in the global context variables declarations are scanned but are undefined.

// if we reference the variable now, it will work :

anotherTipper(55);


console.log(myName);                    //It will print "undefined" 

var myName = "Abhi";

console.log(myName);                    //It will work


function printName(){
    var myName = "John";

    console.log(myName);
}

printName();                            // This will print "John" due to the scope and execution context


console.log(myName);                //It will again print "Abhi" because this has a different execution context.


