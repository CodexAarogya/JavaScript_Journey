/*
Qn1: Create an array of numbers and take input from the user to add numbers to this array
*/

let myArr = [1, 2, 3, 4, 5]
{

    function input(data) {
        myArr.push(data);
    }
    for (let i = 0; i < 5; i++) {
        let x = prompt("Enter the number: ")
        x = Number.parseInt(x);
        input(x);
    }
    console.log(myArr)
}

/**
 Qn2: keep adding numbers to this array until zero is added to the array
 */
{
    let myArr = [1, 2, 3, 4, 5]
    function input(data) {
        myArr.push(data);
    }
    let x;
    do {
        x = prompt("Enter the number: ");
        x = Number.parseInt(x);
        input(x);
    } while (x != 0);

    console.log(myArr);
}

/**
 Qn3: Filter for the numbers divisible by 10 from a given array.
 */

let array = [10, 90, 24, 55, 78, 100, 1010, 982]
let fil = array.filter(
    (value) => (value % 10 == 0)
)
console.log(fil)

/*
Qn4: Create an array of square of given numbers
*/

let given = [2, 4, 6, 8, 10]
let mapped = given.map(
    (value) => (value ** 2)
)
console.log(mapped)

/*
Qn5: Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated)
*/

let myNum = [1, 2, 3, 4, 5]
let fact = myNum.reduce(
    (prev, curr) => (prev * curr)
)
console.log(`Given array = [${myNum}]`)
console.log("Factorial = ", fact);