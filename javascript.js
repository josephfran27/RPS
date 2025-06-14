
//UI 
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.textContent = '🪨';
paperBtn.textContent = '📄';
scissorsBtn.textContent = '✂️'

//create container for buttons
const buttonsContainer = document.createElement('div');
buttonsContainer.setAttribute("style", "background-color: #73a24e; border: solid #416a59 2px; padding: 5px;");
buttonsContainer.id = 'btnContainer';
buttonsContainer.classList.add('container');
document.body.appendChild(buttonsContainer);

//add buttons to container
buttonsContainer.appendChild(rockBtn);
buttonsContainer.appendChild(paperBtn);
buttonsContainer.appendChild(scissorsBtn);

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

//score div
const scoreBox = document.createElement('div');
scoreBox.setAttribute("style", "background-color: #73a24e; border: solid #416a59 2px; padding: 5px;");
scoreBox.textContent = 'Score Box'
scoreBox.id = 'scoreBox';
scoreBox.classList.add('container');
document.body.appendChild(scoreBox);

//result div
const resultsBox = document.createElement('div');
resultsBox.setAttribute("style", "background-color: #73a24e; border: solid #416a59 2px; padding: 5px;");
resultsBox.textContent = 'Results Box'
resultsBox.id = 'resultsBox';
resultsBox.classList.add('container');
document.body.appendChild(resultsBox);

//ACTUAL GAME LOGIC
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

function round(roundString, playerChoice, computerChoice, playerScore, computerScore) {
    if(playerChoice == computerChoice) {
        roundString = 'There was a tie!';
    }
    else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper") 
    ){
        roundString = `You win! ${playerChoice} beats ${computerChoice}!`;
        playerScore++;
    }
    else {
        roundString = `You lost! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }

    return [roundString, playerScore, computerScore];
}

function playRound(playerChoice) {
    let roundString = '';
    const computerChoice = getComputerChoice();
    [roundString, playerScore, computerScore] = round(roundString, playerChoice, computerChoice, playerScore, computerScore);
    resultsBox.textContent = roundString;
    scoreBox.textContent = `Player: ${playerScore} VS Computer: ${computerScore}`;
}
