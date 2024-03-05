const user = {
    username: "harsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "harsh"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "harsh"
//     console.log(this.username);
// }



const chai = () => {
    let username = "harsh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "harsh"})

console.log(addTwo(3,4));

