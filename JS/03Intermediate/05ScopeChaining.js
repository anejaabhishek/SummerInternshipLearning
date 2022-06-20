var myName = "Abhishek";

function printName(){
    console.log(myName);    // it will take value from it's parent (the main file)
}

function printMyName(){
    var myName = "Abhi";
    console.log(myName);            //  It prints its own variable available in the scope.

    printMyNameTwo();

    function printMyNameTwo(){
        var myName = "Mr. A";
        console.log(myName);        // It prints its own variable available in the scope.

        printMyNameThree();

        function printMyNameThree(){
            console.log(myName);        // it will take value from it's parent (printMyNameTwo)
        }
    }
}

printName();
printMyName();