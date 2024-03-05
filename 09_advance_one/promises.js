const promiseOne = new Promise(function(resolve, reject) {
    // do an async task
    // db calls, cryptography , network
    setTimeout(function() {
        console.log('async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function() {
    console.log("promise consumed");
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function() {
    console.log("async 2 resoled");
})


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "chai", email: "username@mail.com"})
    }, 1000)
}) 

promiseThree.then(function(user) {
    console.log(user);
})


promiseFour = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: "harsh", password: "1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => {console.log("the promise is either resolved or rejected")})


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "1234"})
        }
        else {
            reject('ERROR : JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    // const response = await promiseFive
    // console.log(response);

    try {
        const response = await promiseFive
        console.log(promiseFive);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response) {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))

 