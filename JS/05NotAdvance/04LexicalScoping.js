function init() {
    var firstName = "Abhishek";

    function sayFirstName() {
        console.log(firstName);
    }

    sayFirstName();
}

init();


// As the scope of variable "firstName" and function "sayFirstName" ends at line 9
// This is called Lexical Scoping, essentially a way of writing code