// Functional approach of defining object

var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course Count is ${this.courseCount}`);
  };
};

var abhi = new User("Abhi", 2);

console.log(abhi);

abhi.getCourseCount();

// by using the "new" keyword: reference of "this" keyword is also taken care of.
// if we don;t use "new" keyword then the function call in line 11 becomes a normal function call
// And this keyword inside that points to the global.

User.prototype.getFirstName = function () {
  console.log(`Your first name is ${this.firstName}`);
};

// By using the prototype we can a define a method on the object outside the function where the object has been created.
// But it beed to be defined earlier means before calling.

// abhi.getFirstName();

// Instead of using the above command directly, we can check it in the following way

if (abhi.hasOwnProperty("firstName")) {
  abhi.getFirstName();
}

// the above testing will prevent the code from crashing if the key doesnot exist in the object function.
