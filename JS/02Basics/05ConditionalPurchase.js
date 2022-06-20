var isLoggedIn = true;

var isEmailVerified = true;

var isCardVerified = false;

if(isLoggedIn && isEmailVerified && isCardVerified){
    console.log("You can make a purchase");
}
else{
    console.log("You are not allowed to make a purchase");
}