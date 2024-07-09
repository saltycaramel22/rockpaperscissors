function getComputerChoice() {
    let randNum = Math.random() * 3;
    if (randNum >=0 && randNum < 1) {
        return "rock";
    } else if (randNum >=1 && randNum < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Do you choose rock, paper, or scissors?");
    return humanChoice.toLocaleLowerCase();
}

let humanScore = 0
let computerScore = 0 

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "paper") || 
    (humanChoice === "scissors" && computerChoice === "rock") || 
    (humanChoice === "paper" && computerChoice === "scissors")) {
        console.log("You lose! Unfortunately, " + computerChoice + " beats " + humanChoice + "!") 
        computerScore += 1
    }
    else if (humanChoice === computerChoice) {
        console.log("It's a tie! You both chose " + humanChoice + "!");
    }
    else {
        console.log("You win! Fortunately, " + humanChoice + " beats " + computerChoice + "!") 
        humanScore += 1
    }
    console.log("Scores\nYour Score: " + humanScore + "\nComputer Score: " + computerScore)
}

function playGame() {
    for (let round = 0; round < 6; round++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    if (humanScore > computerScore) {
        console.log("You win!")
    }
    else if (humanScore < computerScore) {
        console.log("You lose!")
    }
    else {
        console.log("You tied!")
    }
    console.log("Scores\nYour Score: " + humanScore + "\nComputer Score: " + computerScore)
}

playGame()