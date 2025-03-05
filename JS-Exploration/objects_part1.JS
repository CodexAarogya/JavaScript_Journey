// let's understand about symbols first...
/*

Symbols add an extra layer of flexibility and security to object properties in JavaScript! 

- Every Symbol is unique, even if it has the same description.

-Symbols prevent accidental overwrites in objects.

-Symbol properties do not appear in for...in loops or Object.keys(), making them useful for private properties.

*/


// ------------------------------------------ Objects in JavaScript ------------------------------------------

// const data = new Object()
// const data = {}

// Object declaration using object literals

const sym = Symbol("key1")
const data = {
    name: "Aarogya",
    age: 19,
    [sym]: "here contain hidden information.",

    // [Symbol("key1")]: "here contain hidden information",

    "profession": "Student",

}
console.log(Object.keys(data)) // symbol is hidden 

console.log(data[sym])  // To access the symbol

console.log(data.name)

console.log(data['profession']) // recommended
// console.log(data.profession) // Not recommended



// ------------------------------------------- To modify object values -----------------------------------

data.name = "David";
console.log(data.name)
// console.log(data)
// value is changed


// ------ to lock object ---
// Object.freeze(data)
// data.name = "william"
// console.log(data.name) // no change in name ....

// ---------------------------------------------- Functions inside object literals ------------------------
// In JavaScript, Functions can be treated as variables .....

data.greeting = function () {
    console.log(`Hello ${this.name} !`)
}
console.log(data.greeting())
// console.log(data.greeting)  // function is anonymous [It doesnot have explicitly defined name.]