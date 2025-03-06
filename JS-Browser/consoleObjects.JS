
// TRY THE CONSOLE OBJECTS IN BROWSER'S CONSOLE FOR BETTER UNDERSTANDING 

console.log("hello world !");
console.info("This is info message !")
console.error("This is error message")
console.warn("This is warning message")
console.assert(0 > 10)

// -----------------------------------------------------------------------------------------


let data = {
    name: "David",
    age: 40,
    profession: "Student"
}
console.table(data)


// ------------------------------------------------------------------------------------------


console.time("start");  // get info regarding total time for executing any task

for(let i =0 ; i<100; i++)
{
    console.log(i)
}
console.timeEnd("start")


// console.clear()