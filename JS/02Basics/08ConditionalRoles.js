var user = "testprep";

switch (user){
    case "admin":
        console.log("You get full access");
        break;

    case "subAdmin":
        console.log("Access to create and delete courses");
        break;

    case "testprep":
        console.log("Access to create and delete tests");
        break;

    case "user":
        console.log("Access to consume the content");
        break;

    default :
        console.log("Trial user")

}