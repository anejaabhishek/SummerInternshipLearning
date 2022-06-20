
sayHello();

function sayHello(){
    console.log(`Hello, Welcome buddy!`);
}

// the above code is working even if function is being called before it is being defined due to CONTEXT.
// There is always a larger context in javascript.
//For example : When running in browser, one is "Window"

var myName = "Abhi";

if(myName === Window.myName){
    console.log("True");
}

// The above code will give an error, when ran on node but it will work on browser due to the CONTEXT.