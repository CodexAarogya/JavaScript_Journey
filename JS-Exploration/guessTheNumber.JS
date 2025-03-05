// NOTE: TRY TO RUN THIS CODE IN A BROWSER IF YOU ENCOUNTER ANY ERROR !

const number = Math.round(Math.random() * 100)
let score = 100, guess
let end
let count = 0
console.log("Press 'e' to end program ! ")
while (end != 'e' || score > 0) {
    guess = prompt("Guess the number: ")
    guess = parseInt(guess)
    if (guess < number) {
        console.log("Guessed Lower Number !")
        count++;
        score = 100 - count
    }
    if (guess > number) {
        console.log("Guessed Higher Number !")
        count++;
        score = 100 - count
    }
    if (guess === number) {
        console.log("You made a correct guess !")
        count++;
        console.log(`Score: ${score}`)
        console.log(`Total guesses: ${count}`)
        break;
    }

}
console.log(`Score: ${score}`)
console.log(`Total guesses: ${count}`)