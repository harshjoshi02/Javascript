const name = "harsh"
const repoCount = 50

// console.log(name + repoCount + " Value"); // avoid

console.log(`hi my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('harsh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  harsh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harsh.com//harsh%20joshi"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))