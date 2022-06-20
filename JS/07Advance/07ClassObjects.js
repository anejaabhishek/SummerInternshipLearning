const User = require("./06Class.js")
const abhi = new User("Abhishek", "abhishekaneja2@gmail.com");

console.log(abhi.getInfo());

abhi.enrollInCourse("React Course");
abhi.enrollInCourse("React Native Course");
abhi.enrollInCourse("Node JS Course");

console.log(abhi.getCourseInfo());

let enrolledCourses = abhi.getCourseInfo();

count = 0;

enrolledCourses.forEach(course => {
    console.log(course);
    count++;
});

console.log(count);