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
        return `It's a tie! ${playerSelection} ties with ${computerSelection}`
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
        const result = playRound(playerMove, computerMove);
        const playerScore = document.querySelector('#player');
        const computerScore = document.querySelector('#computer');
        const displayOne = document.querySelector('#displayOne');
        const displayTwo = document.querySelector('#displayTwo');

        let displayString = result.split('! ');

        displayOne.textContent = displayString[0];
        displayTwo.textContent = displayString[1];

        playerScore.textContent = `Player ${player}`
        computerScore.textContent = `Computer ${computer}`

        if (player === 5 || computer === 5) {
            let finalResult = `Game Over ${player === 5 ? 'You win' : 'You Lose'}`;
            displayOne.textContent = finalResult;
            displayTwo.textContent = 'Play Again';
            playerScore.textContent = 'Player 0';
            computerScore.textContent = 'Computer 0';
            player = 0;
            computer = 0;
            return
        }
    }
})

