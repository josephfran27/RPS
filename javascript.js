
//UI 
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.textContent = '🪨';
rockBtn.setAttribute("style", "font-size: 35px; border: solid #416a59 1px; background-color: #a9c25d; width: 75px; height: 65px; border-radius: 8px;");
paperBtn.textContent = '📄';
paperBtn.setAttribute("style", "font-size: 35px; border: solid #416a59 1px; background-color: #a9c25d; width: 75px; height: 65px; border-radius: 8px;");
scissorsBtn.textContent = '✂️';
scissorsBtn.setAttribute("style", "font-size: 35px; border: solid #416a59 1px; background-color: #a9c25d; width: 75px; height: 65px; border-radius: 8px;");

//score div
const scoreBox = document.createElement('div');
scoreBox.setAttribute("style", "font-size: 30px; background-color: #73a24e; border: solid #416a59 2px; padding: 5px;");
scoreBox.textContent = 'Score Box'
scoreBox.id = 'scoreBox';
scoreBox.classList.add('container');
document.body.appendChild(scoreBox);

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
    playRound('rock');
});

scissorsBtn.addEventListener('click', () => {
    playRound('rock');
});

//result div
const resultsBox = document.createElement('div');
resultsBox.setAttribute("style", "font-size: 20px; background-color: #73a24e; border: solid #416a59 2px; padding: 5px;");
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
    if(playerScore >= 5 || computerScore >= 5) {
        return;
    }
    let roundString = '';
    const computerChoice = getComputerChoice();
    [roundString, playerScore, computerScore] = round(roundString, playerChoice, computerChoice, playerScore, computerScore);
    resultsBox.textContent = roundString;
    scoreBox.textContent = `Player: ${playerScore} VS Computer: ${computerScore}`;

    if(playerScore === 5 || computerScore ===5) {
        if(playerScore === 5) {
            resultsBox.textContent = 'Congrats, you win the game!';
        }
        else {
            resultsBox.textContent = 'Sorry, you lost. Better luck next time!';
        }
    }
}

