// In JavaScript, a prototype is a fundamental concept that allows objects to inherit properties and methods from other objects. It's part of JavaScript's prototype-based inheritance system.

// method is simply a funciton that is inside any object
// properties of an object are basically a key-value of an object
// Hence, the definition mentioned above seems understandable.

// The standard way to access an object's prototype is the Object.getPrototypeOf() method.
// But in practice all browsers use __proto__. 

//------------------------------------ METHOD 1 --------------------------------------------

const myObject1 = {
    name:"Aarogya",
    greet: ()=>{
        console.log('Hello !')
    }
}

const myObject2 = {
    surname: "Parajuli",
    sayHi: ()=>{
        console.log('Hi !')
    }
}

console.log(myObject1.greet())
console.log(myObject2.sayHi())

// use case of pototypes ..
// console.log(myObject1.sayHi())  // throws error. cause this object donot have a prototype named "sayHi"

myObject1.__proto__ = myObject2
console.log(myObject1.sayHi())   // got the property of myobject2

// we can also set the prototype of ant object explicitly ...

myObject1.__proto__ = {
    id: 1234
}

console.log(myObject1.id)


//-------------------------------------------- METHOD 2 ---------------------------------------------
// const test = myObject1;
const test = Object.create(myObject1)  // This will create test as an object and all the methods and properties of the myObject1 is inherited by test
console.log(typeof test);

test.__proto__ = myObject2
console.log(test.id)
console.log(test.surname)


// Note: When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.


