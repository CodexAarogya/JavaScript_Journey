// There are some other looping techniques in JavaScript

let prime = [1, 2, 3, 5, 7]

// ------------ foreach loop-----------
// Performs the specified action for each element in an array.

prime.forEach(
    (arg1) => {
        console.log(arg1)
    }
    // (value, Index, Array) => {
    //     console.log(Value, Index, Array)
    // }
)

// ------------------- Arrar.from --------------
let myname = "Aarogya"
const newArr = Array.from(myname); // Creates an array from an iterable object.
console.log(newArr)

// some other loops such as for in , for of, etc are discussed in file: loop.JS