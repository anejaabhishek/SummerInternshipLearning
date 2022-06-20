const uno = () => {
    console.log("I am one");
};

const dos = () => {

    setTimeout( () => {
        console.log("I was loading, so got late");
    }, 3000)
    console.log("I am two");
};

const tres = () => {
    console.log("I am three");
};

uno();
dos();
tres();

// In the above code dos() contains a part of code which is of timeout type..
// So when we run the above code after dos(), tres() will execute and then the timeout part of dos()
// This is Asynchronous way of running the code
// And this is the way the javascript code executes usually.
