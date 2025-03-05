// almost same to C/ C++
// Review from C/C++ tutorial
let a = 10
let b = 20

function sum(a, b) {
  // console.log(a+b)
  return a + b;
}
sum(100, 1)
console.log("The sum of ", a, " & ", b, " is ", sum(a, b));

let s = sum(10, 1);
console.log(s)

const show = function () {
  console.log('hello world !')

}
show();

//------------------------------------------ this and arrow functions -------------------------------------

// Using Explicit Return

{
  let sum = (num1, num2) => {
    return num1 + num2;
  }
  console.log(sum(1, 2))
}


//  Using Implicit Return


{
  let sum = (num1, num2) => (num1 + num2) //←[Direct Return];
  //let sum = (num1, num2) => {num1 + num2} ← [Inappropriate way, using {} we need to include 'return' ];

  console.log(sum(1, 2));
}


// --------------------------------------------- Rest operator --------------------------------------------
function display(...val) {
  return val
}
console.log(display(1, 2, 3, 4, 5))  //[ 1, 2, 3, 4, 5 ]

//-------------------------------------- Passing Array as function parameter ------------------------------
function arrayFunction(arrayParameter) {
  return arrayParameter[1]
}

console.log(arrayFunction([1, 2, 3, 4, 5])) // 2

//-------------------------------------- Passing object as function parameter ------------------------------
let obj = {
  name: "Devil",
  age: 20
}
function objFunction(myobj) {
  return myobj.name
}
console.log(objFunction(obj));

  // console.log(objFunction({name:"Kim-Jong-Un" , country: "N.Korea"}))

  //-------------------------------------- Immediately Invoked Function Expression (IIFE) ------------------------------

  // Sometime, we may face the pollution realated to global scope. So, to eliminate the pollution
  // created by global scope, We use IIFE ...

  // IIFE is an JavaScript function which is invoked immediately after being defined.

  // !!!!!!!!!!!!  This is one-time setup function. !!!!!!!!!!!!!!!

  (function () {
    console.log("hello world");
  })();

(() => {
  console.log("hello world !");
})();

((name)=> {
  console.log(name)
})('David');  // passing arguments ..

// See some applications and utilities of IIFEs