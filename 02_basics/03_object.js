// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "harsh",
    "full name": "harsh joshi",
    [mySym]: "myKey1",
    age: 20,
    location: "delhi",
    email: "harsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "harsh@openai.com"

// Object.freeze(JsUser)

// JsUser.email = "harsh@mail.com"

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("hello js user");
}

JsUser.greetingTwo = function() {
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());