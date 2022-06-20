console.log(this);

var user = {
    firstName : "Abhi",
    courseCount : 4,
    getCourseCount : function() {
        console.log("Line 7 ", this);

        function sayHello() {
            console.log("Hi!");
            console.log("Line 11 : ", this);        
        }
        // in the above function "this" will point to global context because it is normally not an object call.

        sayHello();

    } ,
};

user.getCourseCount();





// IMPORTANT NOTE:
// FOR ALL REGULAR FUNCTION CALLS, "this" POINTS TO WINDOW OBJECT