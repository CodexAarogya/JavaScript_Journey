let prime = [1,2,3,5,7]

// map
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// Generates new array ..
// let a = prime.map(
//     (arg) =>{
//         return arg + 1
//     }
// )

// console.log(a)

// filter 
// Returns the elements of an array that meet the condition specified in a callback function.
let fil = prime.filter(
    (value /*, index, array */) => (value<5)
)
console.log(fil) // donot change the parent
console.log(prime) 

// Reduce
// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// callbackfn(previousValue: number, currentValue: number, currentIndex: number, array: number[]): number
let red = prime.reduce(
    (prev, curr) =>{
        return prev + curr
    }
)

console.log(red)