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
    ) return `You win! ${playerSelection} beats ${computerSelection}`
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const play = document.getElementById('play')

play.addEventListener('click', function () {
    const computerMove = getComputerChoice();
    const playerMove = prompt('Enter you move: ').toLocaleLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(playerMove)) {
        alert('Invalid choice. Please choose rock, paper, or scissors.');
        return;
    }
    const result = playRound(playerMove, computerMove);
    alert(result)
})