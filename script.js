let player = 0;
let computer = 0;

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomNumber = getRandomInt();
    const computerChoice = choice[randomNumber]
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie`
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        player += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        computer += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}


const container = document.body;

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('button')) {
        const buttonText = e.target.textContent;
        const playerMove = buttonText.toLowerCase();
        const computerMove = getComputerChoice();
        const result = playRound(playerMove, computerMove)
    }
})

