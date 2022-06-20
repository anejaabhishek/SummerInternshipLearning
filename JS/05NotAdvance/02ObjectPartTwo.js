var User = {
    name = "",
    getUserName: function(){
        console.log(`User name is : ${this.name}`);
    }, 
};

var abhi = Object.create(User);

console.log(abhi);
abhi.name = "Abhishek Aneja";
abhi.getUserName();

// The different thing in the above code is that although the object has been created and console shows it to be empty, still it's members and methods can be accessed.

// var sam = Object.create(User, {
//     name: { value: "sammy" },
//     // courseCount: { value: 3 },
// });

// sam.getUserName();