// almost same to C/ C++
// Review from C/C++ tutorial
let a = 10
let b = 20

function sum(a, b) {
    // console.log(a+b)
    return a+b;
}
sum(100,1)
console.log("The sum of ", a, " & ", b, " is ", sum(a,b));

let s = sum(10,1);
console.log(s)

const show = function(){
    console.log('hello world !')

}
show();

//----------------- this and arrow functions -------------------

// Using Explicit Return

{
let sum = (num1,num2) =>{
    return num1 + num2;
 }
 console.log(sum(1,2))
}


//  Using Implicit Return


{
    let sum = (num1, num2) => (num1 + num2) //←[Direct Return];
    //let sum = (num1, num2) => {num1 + num2} ← [Inappropriate way, using {} we need to include 'return' ];
    
    console.log(sum(1, 2));
}
