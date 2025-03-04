// Let's explore some loops in JS
/**
 * for
 * for in : loop through items of an object
 * for of: loop through value of object which is iterable
 * while
 * do while
 */

/*

let sum = 0;

for (let i = 0; i<10; i++){
    sum += i
}

console.log(sum);

*/

/*
---------------------- for in loop ----------------
let price = {
    apple: 20,
    banana: 30,
    mango: 40,
    kiwi: 50
}

for(let a in price){
    console.log("price of ", a , " is $", price[a],);
}

*/

/*
---------------------- for of loop ----------------


let name = "David"
for (let b of name){
    console.log(b);
}

*/

/*
---------------------- while loop ----------------

{ <------ review of block scope 
                     ↓
    let a = 10; <----
    while (a>0){
        console.log(a)
        a--   // setting terminating condition (else, may crash the runtime)
    }
}

*/