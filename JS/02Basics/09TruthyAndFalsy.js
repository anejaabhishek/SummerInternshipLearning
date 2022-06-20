// Falsy Values : 

// null
// ""
// NaN


var user;

// "user" variable is undefined at this state

user = 2;

// "user" variable is defined at this state

if(2 == user){
    console.log("Success");
}
else{
    console.log("Failure");
}

// Now when we use " 2 == user" coercion happens and javascript assumes that we want to check loosely whether they are equal or not. But if we want to do strict checking, we can use "===". This will also check the variable type also.

