function getUserRole(name, role){
    switch (role){
        case "admin":
            return `${name} is an admin and had access to everything`;

        case "subadmin":
            return `${name} is a sub-admin and had access to create and delete courses`;

        case "testprep":
            return `${name} is a test preparator and had access to create and remove tests`;

        case "user":
            return `${name} is a user and had access to cosnume content`;

        default:
            return `${name} is a trial user and had access to limited content`;
    }
}

console.log(getUserRole("Abhishek", "t"));

// here in the above function we can also assign a function to a variable..

// var getUserRole = function(name, role){
//    code 
// }

// And in the arrow format also

// var getUserRole = (name, role) => {
//     code
// }

