

console.log("Welcome to Rock, Paper, Scissors!");
let playerScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Enter a choice (rock, paper, or scissors)");
    return choice.toLowerCase();
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

function game() {
    let rounds = 5;
    
    for(let i = 1; i < rounds + 1; i++) {
        let [updatedPlayerScore, updatedComputerScore] = round(getHumanChoice(), getComputerChoice(), playerScore, computerScore);
        playerScore = updatedPlayerScore;
        computerScore = updatedComputerScore;
        console.log("Round " + i + " finished.")
        console.log("Scores: Player: " + playerScore + " --- Computer: " + computerScore);
    }
}

game()