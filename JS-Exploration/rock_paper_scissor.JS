function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1
    if (x == 1) return "rock"
    if (x == 2) return "paper"
    if (x == 3) return "scissor"
}

function getHumanChoice() {
    let input = prompt("Enter Your Choice (rock, paper, scissor): ")
    return input.toLowerCase()
}

let humanScore = 0, computerScore = 0
let round = 5

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie !")
    }
    else if (
        humanChoice == 'rock' && computerChoice == 'scissor' ||
        humanChoice == 'scissor' && computerChoice ==='paper' ||
        humanChoice == 'paper' && computerChoice == 'rock'
    ) {
        console.log("You Win !")
        humanScore++
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++
    }
}

function playGame() {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    
    if (['rock', 'paper', 'scissor'].includes(humanChoice)){
        playRound(humanChoice, computerChoice)
    }
    else{
        console.log("Invalid Input !")
    }
}

// ----------------------------------------- Game Starts ----------------------------------------------


while (round > 0) {
    playGame()
    round--
}
console.log(`Your Score: ${humanScore}, Computer's Score: ${computerScore}`)