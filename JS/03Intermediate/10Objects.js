var user = {
    firstName : "Abhishek",
    lastName : "Aneja",
    role : "Admin",
    loginCount : 12,
    signedIn : true,
    courseList : [],
    buyCourse : function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    },
    getInfo : function() {
        return `${this.firstName} ${this.lastName} is ${this.role} and is enrolled in ${this.courseList.length} courses with a login count of ${this.loginCount}`;
    }
};

console.log(user.firstName);

// another way

console.log(user["lastName"]);

console.log(user.getCourseCount());

user.buyCourse("React JS Course");

console.log(user.getCourseCount());

user.buyCourse("Node JS Course");

console.log(user.getCourseCount());

console.log(user.getInfo());