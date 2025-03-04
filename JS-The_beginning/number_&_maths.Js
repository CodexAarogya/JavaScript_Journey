const num = 100
console.log(num);
const val = new Number(num)
console.log(val)
// [Number: 100]

console.log(val.toPrecision(2))
// 1.0e+2

console.log(val.toFixed(2))
// 100.00

console.log(val.toExponential(2))
// 1.00e+2

console.log(val.toString())
// 100

// --------------------------Maths-----------------

console.log(Math.abs(-4));
console.log(Math.random()*10);
console.log(Math.min(0,1,3,-5))
console.log(Math.max(0,1,3,-5))

// explore some other Math function through MDN reference..