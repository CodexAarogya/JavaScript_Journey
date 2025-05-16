/* Primarily, You need to review the concepts of Public, Private and protected.
also the concepts of objects, class, constructors, overloading, overriding (generally studied in C/C++).
Here, We are focusing additional methods and syntax in the JavaScript*/

class Person {
    constructor(name) {
        this.name = name;
    }
    greetingsPerson() {
        console.log(`Hey ${this.name}!`)
    }
}
class teacher extends Person {
    constructor(name, faculty) {
        super(name, faculty);
        this.name = name;
        this.faculty = faculty
    }
    greetings() {
        console.log(`You are a teacher of ${this.faculty}.`)
    }
}
class student extends Person {
    constructor(name, faculty) {
        super(name, faculty);
        this.name = name;
        this.faculty = faculty
    }
    greetings() {
        console.log(`You are a student of ${this.faculty}.`);
    }
}

let David = new teacher("David", "BCT")
let Ramesh = new student("Ramesh", "BEI")

// Since we want to set teaches when a new Professor is created, we define a constructor, which takes the name and teaches as arguments. The first thing this constructor does is call the superclass constructor using super(), passing up the name parameter. The superclass constructor takes care of setting name. After that, the Professor constructor sets the teaches property.

David.greetingsPerson()
David.greetings()
Ramesh.greetingsPerson()
Ramesh.greetings()