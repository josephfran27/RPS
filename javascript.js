
// REIMAGINED VERSION (DOM)
// const buttonsContainer = document.createElement('div');
// buttonsContainer.id = 'btnContainer';
// buttonsContainer.classList.add('container');
// buttonsContainer.textContent = 'This is where the buttons will be held';
// document.body.appendChild(buttonsContainer);

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.textContent = '🪨';
paperBtn.textContent = '📄';
scissorsBtn.textContent = '✂️'

document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);

//button event listeners
rockBtn.addEventListener('click', () => {
    playRound('rock');
});

paperBtn.addEventListener('click', () => {
    playRound('paper');
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    //Math.random(): generates random decimal bet. 0 and 1
    //Math.random() * max: scales random number to max
    //Math.floor(): rounds down to the nearest whole num, link rolling a ball down a hill
}

function getComputerChoice() {
    randNum = getRandomInt(3);
    if(randNum == 0) {
        return "rock";
    }
    else if(randNum == 1) {
        return "paper";
    }
    else if(randNum == 2) {
        return "scissors";
    }
    else {
        return "";
    }
}

function round(playerChoice, computerChoice, playerScore, computerScore) {
    //same choices
    if(playerChoice == computerChoice) {
        console.log("There was a tie! Nobody gets a point.");
    }

    //rock vs paper
    if(playerChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if(computerChoice == "rock" && playerChoice == "paper") {
        console.log("You win! Paper beats Rock!");
        playerScore++;
    }

    //rock vs scissors
    else if(playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");
        playerScore++;
    }
    else if(computerChoice == "rock" && playerChoice == "scissors") {
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
    }

    //paper vs scissors
    else if(playerChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }
    else if(computerChoice == "paper" && playerChoice == "scissors") {
        console.log("You win! Scissors beats paper.");
        playerScore++;
    }
    return [playerScore, computerScore];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    [playerScore, computerScore] = round(playerChoice, computerChoice, playerScore, computerScore);
    console.log(`Player: ${playerScore} --- Computer: ${computerScore}`);
}
