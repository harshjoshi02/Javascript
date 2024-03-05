class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        
        super(username)

        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
chai.addCourse()

const masalaChai = new User("masala chai")

masalaChai.logMe()

console.log(chai instanceof User);