class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];           // using "#" before a variable makes it private
                                // but we need to use "#" whenever we refer that variable 

    getInfo() {
        return {name: this.name, email : this.email};
    }

    enrollInCourse(courseName){
        this.#courseList.push(courseName);
    }

    getCourseInfo() {
        return this.#courseList;
    }


//    By making a method static :
//    Iy cannot be called on an object of that class or any extended class
//    It can only be called on the class itself not on an object


    static loginInfo(){
        return "You are logged in";
    }
}

// Inheritance

class SubAdmin extends User{

    constructor(name, email){
        super(name, email);
    }

    getAdminInfo() {
        return ("I am sub admin");
    }


}


module.exports = User;


const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo);
console.log(rock.getCourseInfo);
console.log(rock.courseList);
// console.log(rock.loginInfo()); // This will give error as the method is static

// As we have made courseList of private type, the above last line will return undefined


// creating a subAdmin object

const john = new SubAdmin("John", "john@john.com");

console.log(john.getAdminInfo());
console.log(john.getInfo());
// console.log(john.loginInfo()); // This will give error as the method is static