{
    const myArr = [1,2,[3,4,5],[6,[7,8,9]]]
    const final = myArr.flat(Infinity)
    console.log(myArr)
    console.log(final)
    delete final[0]
    console.log(final)
    console.log(final.length) // no change in length : 9
}

{
    let test = ['a','b','c']
    let name = "aarogya"
    console.log(Array.isArray(test))
    console.log(Array.from(name))
    console.log(Array.of(test,name))
}