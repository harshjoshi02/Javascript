const user = {
    username: "harsh",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function() {
        // console.log("got user datails from database");
        // console.log(`Username: ${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`welcome ${this.username}`);
    }

    return this
}

const userOne = new User("harsh", 5, true)
const userTwo = new User("chai", 10, false)

console.log(userOne.constructor);
// console.log(userTwo);