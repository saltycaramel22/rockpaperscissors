// Create and add the title
const title = document.createElement('h1');
title.textContent = 'Rock, Paper, Scissors';
document.body.appendChild(title);

// Create and add the buttons
const buttonsDiv = document.createElement('div');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');

rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';

buttonsDiv.appendChild(rockButton);
buttonsDiv.appendChild(paperButton);
buttonsDiv.appendChild(scissorsButton);
document.body.appendChild(buttonsDiv);

// Create and add the results display
const resultsDiv = document.createElement('div');
const scoreDisplay = document.createElement('p');
const humanScoreDisplay = document.createElement('p');
const computerScoreDisplay = document.createElement('p');
const roundResultDisplay = document.createElement('p');

scoreDisplay.textContent = 'Scores:';
humanScoreDisplay.textContent = 'Your Score: 0';
computerScoreDisplay.textContent = 'Computer Score: 0';

resultsDiv.appendChild(scoreDisplay);
resultsDiv.appendChild(humanScoreDisplay);
resultsDiv.appendChild(computerScoreDisplay);
resultsDiv.appendChild(roundResultDisplay);
document.body.appendChild(resultsDiv);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randNum = Math.random() * 3;
    if (randNum >= 0 && randNum < 1) {
        return "rock";
    } else if (randNum >= 1 && randNum < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if ((humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "scissors" && computerChoice === "rock") || 
        (humanChoice === "paper" && computerChoice === "scissors")) {
        computerScore += 1;
        roundResultDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else if (humanChoice === computerChoice) {
        roundResultDisplay.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else {
        humanScore += 1;
        roundResultDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    }

    humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if (humanScore === 5) {
        roundResultDisplay.textContent = "Congratulations! You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        roundResultDisplay.textContent = "Sorry, you lost the game!";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = `Your Score: 0`;
    computerScoreDisplay.textContent = `Computer Score: 0`;
}

// Adding event listeners to the buttons
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
