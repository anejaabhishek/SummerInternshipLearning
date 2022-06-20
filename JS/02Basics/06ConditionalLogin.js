var email = true;
var facebook = false;
var google = false;

if(email || facebook || google){
    console.log("You are allowed to access the content");
}
else{
    console.log("You are not allowed to access the content");
}