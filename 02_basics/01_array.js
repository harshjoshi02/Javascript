// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", 'naagraj']

const myArr2 = new Array(1,2,3,4)

// console.log(myArr);
// console.log(myHeros);
// console.log(myArr2);

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// console.log(myArr);

// myArr.unshift(9)

// myArr.shift() 

// console.log(myArr.includes(9));   // checks if there is 9 in array
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // changes array to string
// console.log(newArr);


// slice, splice
// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3)  // new array myn1 with value from index 1 to 2
// console.log(myn1);
// console.log(myArr);

const myn2 = myArr.splice(1,3) // new array with values extracted from index 1 to 3 and changed the myArray.
console.log(myn2);
console.log(myArr); // myArr now contains values but not the spliced values
