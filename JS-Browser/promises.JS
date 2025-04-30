/* A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

then -> resolved
catch -> rejected
finally -> at last as response 

NOTE: PROMISE IS AN OBJECT !
*/

// ----------------------------------------METHOD 1 -------------------------------------------------
const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async Task-1 is complete');
        // ↓ after completion of promise 
        resolve();
    }, 1000)

})

promiseTwo.then(function () {
    console.log("promise 1 consumed !");

})

// ----------------------------------------METHOD 2 -------------------------------------------------

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task-2 is complete !");
        resolve();
    }, 1000)
}).then(() => (console.log("Promise 2 consumed !"))
)

// ----------------------------------------METHOD 3 -------------------------------------------------

const promiseThree = new Promise(function (resolve, reject) {
    const test = true;
    if (true) {

        setTimeout(function () {
            console.log("TimeOut has been executed !");
            resolve({ userName: "David", pass: "@123" })
        }, 1000)

    }
    else{
        console.log();
        
    }
    
})

promiseThree
    .then(function (user) {
        console.log(user);   // object is propagated ! but to get keys from object use .then again ...
        return user.userName
    })
    .then(function (name) {
        console.log(name.userName);
    })
    .finally(()=> (console.log("Completed !"))
    )