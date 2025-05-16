// Encapsulation ......
class Person {
    constructor(name) {
        this.name = name;
    }
    greetingsPerson() {
        console.log(`Hey ${this.name}!`)
    }
}
class teacher extends Person {
    #teacherId
    constructor(name, faculty, id) {
        super(name, faculty);
        this.name = name;
        this.faculty = faculty
        this.#teacherId = id
    }
    greetings() {
        console.log(`You are a teacher of ${this.faculty}.`)
    }
}
class student extends Person {
    #studentId
    constructor(name, faculty, id) {
        super(name, faculty);
        this.name = name;
        this.faculty = faculty
        this.#studentId = id;
    }
    greetings() {
        console.log(`You are a student of ${this.faculty}.`);
    }
}

let David = new teacher("David", "BCT", 10)
let Ramesh = new student("Ramesh", "BEI", 100)

console.log(David.name)
console.log(Ramesh.name)

// console.log(David.#teacherId)  // This throws an Error .. Since id is private for class teacher.
