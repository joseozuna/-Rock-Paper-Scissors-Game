const body = document.body;
const toggleModeButton = document.getElementById('toggle-mode');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button:not(#toggle-mode)');
let userChoice;
let computerChoice;
let result;

toggleModeButton.addEventListener('click', () => {
    if (body.classList.contains('bg-gray-100')) {
        body.classList.remove('bg-gray-100', 'text-black');
        body.classList.add('bg-gray-800', 'text-white');
        toggleModeButton.innerHTML = '☀️';
    } else {
        body.classList.remove('bg-gray-800', 'text-white');
        body.classList.add('bg-gray-100', 'text-black');
        toggleModeButton.innerHTML = '🌚';
    }
});

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'scissors';
    } else {
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!';
    } else if (
        (computerChoice === 'rock' && userChoice === 'scissors') ||
        (computerChoice === 'scissors' && userChoice === 'paper') ||
        (computerChoice === 'paper' && userChoice === 'rock')
    ) {
        result = 'You lost!';
    } else {
        result = 'You win!';
    }
    resultDisplay.innerHTML = result;
}