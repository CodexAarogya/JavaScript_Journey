class password {
    #lower = "abcdefghijklmnopqrstuvwxyz";
    #upper = "ABCDEFCHIJKLMNOPQRSTUVWXYZ";
    #specialCharacters = "+-*/?><,.':;}{][|)(&^%$#@!~`";
    #numbers = "0123456789";
    constructor(len) {
        this.length = len;
    }

    generatePassword() {
        let collection = [...this.#lower, ...this.#specialCharacters, ...this.#upper, ...this.#numbers]
        let len;
        let pass = ""
        for (let i= 0; i < this.length; i++) {
            len = Math.floor(Math.random() * collection.length)
            pass += collection[len]
        }
        console.log(pass)
    }

}

let mypass = new password(12)
mypass.generatePassword()
