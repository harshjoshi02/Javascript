function sayName() {
    console.log("h");
    console.log('a');
}

// sayName();

function addNum(num1, num2) {
    return num1+num2
}

const result = addNum(2,5)

// console.log(result);

function loginUserName(userName = "sam") {
    if(!userName) {
        console.log("please enter username");
    }
    return `${userName} just logged in`
}

// console.log(loginUserName("harsh"));

function calculateCartPrice(...number1) {
    return number1
}

// console.log(calculateCartPrice(100, 200, 300, 400));

const user = {
    username: "harsh",
    prices: 100
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and the price is ${anyObject.prices}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    prices: 399
})


const newArray = [200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(newArray));

console.log(returnSecondValue([200, 400, 500, 1000]));