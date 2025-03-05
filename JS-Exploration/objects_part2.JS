// -------------------------------------------- Nested Object Concept -------------------------------------
const data = {
    fullname: {
        firstname: "Michael",
        lastname: "Jackson"
    },
    age: 19,
    isLoggedIn: false,
    [Symbol("id")]: "user012"
}

// console.log(data)
// console.log(data.fullname)
console.log(data.fullname.firstname)
console.log(data.fullname.lastname)


// --------------------------------------------- Merging Objects ------------------------------------------
// Reviewing the concept of merging arrays ...
/*

let a = [1,2,3]
let b = [4,5,6]
// let c = a.concat(b)  // concat
let c = [...a, ...b]    // spread 

*/

const obj1 = {name: "donald", age: 50}
const obj2 = {gender: "male", "profession": "student"}
const obj3 = {isLoggedIn: false}     // REMEMBER ! OBJECTS MUST HAVE DIFFERENT KEY VALUES .... OTHERWISE WE WILL GET OVERRIDE VALUE IN TARGET OBJECT

// const obj4 = Object.assign({},obj1,obj2,obj3)   /// METHOD 1

const obj4 = {...obj1, ...obj2, ...obj3}        /// METHOD 2 : (RECOMMENDED !)

console.log(obj4)  // see output

 