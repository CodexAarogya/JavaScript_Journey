/**
 * Arrays are mutable and it can be changed
 * strings are immutable and strings cannot be changed
 */

{
let arr = [1,2,3,4]
let name = ['david', 'williams']
console.log(arr[2]);
console.log(name[0]);
}

// ------------- Array methods ---------------

let numbers = [1, 2, 3, 4, 5]

console.log(numbers.length) // 5
console.log(numbers.indexOf(4)) // 3
console.log(numbers.includes(7)) // false --- to search something inside array
console.log(numbers.includes(4)) // true

// ------ Array in JS Keeps Shallow Copy -----
{
    let numbers = [1, 2, 3, 4, 5]

    const copy = numbers
    copy[0] = 0
    console.log(copy)
    console.log(numbers)

}

// --------- working of stack ---------
{

    let numbers = [1, 2, 3, 4, 5]
    // Array is resizable
    console.log(numbers.push(6, 7))// mutable
    //console.log(numbers.concat(10)) // non-mutable
    console.log(numbers) // [1, 2, 3, 4, 5, 6, 7]
    console.log(numbers.pop()) // 7
    console.log(numbers.pop()) // 6
    console.log(numbers.pop()) // 5

    console.log(numbers) // [ 1, 2, 3, 4 ]

    console.log(numbers.unshift(0)) // add element to beginning of an array and returns new array length
    console.log(numbers.shift()) // removes forst element and returns it

}


// ------- See some interesting differences ---------
{
    let numbers = [1, 2, 3, 4, 5]
    console.log(numbers.slice(1, 2))
    console.log(numbers) //[ 1, 2, 3, 4, 5 ] 
    console.log(numbers.splice(1, 2))
    // console.log(numbers.toSpliced()) // non-mutable
    console.log(numbers) // [ 1, 4, 5 ]
}


{

    const newArr = numbers.join()
    console.log(newArr)
    console.log(typeof (newArr))

}


{
    let numbers = [1, 2, 3, 4, 5]
    let test = [6, 7, 8]
    let myArr = [...numbers, ...test] //spread method
    console.log(myArr)

    // console.log(numbers.reverse()) // mutable 

    console.log(numbers.toReversed()) // non-mutable

    console.log(numbers)


}

{
    const price = [600, 234, 984, 11]
    //console.log(price.sort()) // mutable
    console.log(price.toSorted()) // non-mutable
    console.log(price)
}

// see some Mutating and non-mutating for array methods ..

// mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects