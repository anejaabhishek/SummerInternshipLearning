const abhi = {
    firstName : "Abhishek",
    lastName : "Aneja",
    role : "Admin",
    courseCount : 4,
    getInfo : function () {
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        Role is ${this.role}
        And Course count is  ${this.courseCount}
        `);
    },
};

const john = {
    firstName : "John",
    lastName : "Sebastian",
    role : "User",
    courseCount : 7,
};

abhi.getInfo();

// As above we annot call john.getInfo because that function is not defined in the scope of john
// But all the variables required for that function are present in john also
// I such case we can borrow a function defined elsewhere and it is called binding.

abhi.getInfo.bind(john)();

// By writing the above code we made the reference of this used in getInfo func. to point to john

// "bind" always return the reference of the function, it needs to be called seperately


abhi.getInfo.call(john);

// Whereas "call" directly calls it

