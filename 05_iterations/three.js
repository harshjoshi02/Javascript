// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "hello world!"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'nfs',
    game2: 'spiderman'
}
// doesn't work for object
// for (const [key, value] of myObject) {
//     console.log(key, '-:', value);
// }

