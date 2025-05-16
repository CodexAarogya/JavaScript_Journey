// getters -- to get any value 
// setters -- to set/modity the existing value
// instanceOf -- to check whether any element is an instance of any class or not.

class animal {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    introduce() {
        console.log(`hey! I am ${this.name}. I belongs to the class 'animal'.`)
    }
}

let cat = new animal('cat')
let dog = new animal('dog')
console.log(cat.introduce())
console.log(dog.introduce())
cat.name = 'oggy';
console.log(cat.introduce())

class domestic extends animal {
    constructor() {
        super()
        console.log('I belong to domestic animal.')
    }
}

let cow = new domestic();
let rabbit

console.log(dog instanceof animal) // TRUE
console.log(cat instanceof animal) // TRUE
console.log(cow instanceof animal)  // NOTE: This gives True Value !
console.log(rabbit instanceof animal) // FALSE

