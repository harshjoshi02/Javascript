const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// printing keys for in loop

// for (const key in myObject) {
//     console.log(key);
// }


// printing keys with values for in loop

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for of loop print values but for in prints keys
// same for array as well

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// for in don't work for map as map is not iteratable

// for (const key in map) {
//     console.log(key);
// }

