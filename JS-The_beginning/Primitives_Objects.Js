/* primitive and non-primitive datatypes
primitive : are non-mutable (number, null, string, etc...)
non-primitive : are mutable (objects, array , function)
*/
/* In JavaScript there are basically 7 datatypes ( Remember: NN BB SS U)
Null -- null --(We need to define null EXPLICITLY)
Number -- number of any types --
BigInt --
Boolean  -- Logical ( True (1) False (0)) --
String -- Set of characters --
Symbol --
Undefined -- By default any variable is undefined is any value is not assigned ! --
*/

"use strict";   // runs according to newer version of JS (----->!compulsory though <-----)

let a = null
let b = 123
let c = BigInt("555")
let d = true
let e = "Aarogya"
let f = Symbol("Hey !")
let g = undefined // not mandetory to define as "undefined"

console.log(a, b, c, d, e, f, g)
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))

// Objects in JavaScript
// Objects are Non-Primitive Datatype
// Used for mapping
// Same like dict() in Python !!
const item = {
    "Aarogya" : true,
    "food": "apple",
    "price": 120
}
console.log(typeof item)
console.log(item["price"])
// or
// console.log(item.price)