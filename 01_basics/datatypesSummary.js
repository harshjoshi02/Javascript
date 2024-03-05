// primitive

// 7 types: string, number, boolean, null, undefined, symbol, bintInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id === anotherId)

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// arrays, objects, functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "harsh",
    age: 21,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);