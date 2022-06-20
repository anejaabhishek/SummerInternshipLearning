// const user = ["Abhishek", 3, "admin"];
// var role = user[2];
// var name = user[0];

// var [name, courseCount, role] = user;

// console.log(role);

const myUser = {
    name : "Abhishek",
    courseCount : 5,
    role : "admin",
};

console.log(myUser.role);

// const {name, courseCount, role} = myUser;

// The above code will work

const {name, myCourseCount, role} = myUser;


console.log(myCourseCount);

// in the above code myCourseCount will be undefined as variable name is not same with the assigned one..

// So, for destructuring, type and member name both needs to be same