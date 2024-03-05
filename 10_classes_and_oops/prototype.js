let myName = "harsh     "
let myChannel = "chai    "

// console.log(myName.trim().length);

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

// console.log(heroPower.getSpiderPower());

Object.prototype.harsh = function() {
    console.log(`harsh is present in all objects`);
}

Array.prototype.heyHarsh = function() {
    console.log(`Harsh says hello`);
}

// heroPower.harsh()
// myHeros.harsh()
// myHeros.heyHarsh()
// heroPower.heyHarsh()


// inheritence

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode    "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length of the string is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"harsh".trueLength()
"icetea".trueLength()