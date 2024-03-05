function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 5

console.log((multiplyBy5));
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, price) {
    this.username = username
    this.price = price
}

createUser.prototype.increment = function() {
    this.price++
}

createUser.prototype.printMe = function() {
    console.log(`price is ${this.price}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.increment()
chai.printMe()

tea.increment()
tea.printMe()


// function createUser(username, price): Declares a function named createUser that takes two parameters, username and price.

// this.username = username;: Inside the function, this refers to the instance of the object being created. This line sets the username property of the object to the value passed as the username parameter.

// this.price = price;: Similarly, this line sets the price property of the object to the value passed as the price parameter.

// You can use this constructor function to create instances of objects like this:


