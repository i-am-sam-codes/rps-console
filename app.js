const choices = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            console.log('It\'s a tie!');
            break;
        case playerSelection === 'ROCK' && computerSelection === 'SCISSORS':
        case playerSelection === 'PAPER' && computerSelection === 'ROCK':
        case playerSelection === 'SCISSORS' && computerSelection === 'PAPER':
            console.log('You won!');
            return playerScore++;
        case playerSelection === 'ROCK' && computerSelection === 'PAPER':
        case playerSelection === 'PAPER' && computerSelection === 'SCISSORS':
        case playerSelection === 'SCISSORS' && computerSelection === 'ROCK':
            console.log('Computer won!');
            return computerScore++;

        default:
            return window.prompt('Try again').toUpperCase();
    };
};

function game() {
    playerScore = 0;
    computerScore = 0;
    for (i = 0; i<5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = (window.prompt('Make a choice')).toUpperCase();
        playRound(playerSelection, computerSelection);
        console.log(playerScore, computerScore);
    };
    if(playerScore>computerScore) {
        console.log('You are the winner!');
    } else if(computerScore>playerScore){
        console.log('You fail!');
    }else {
        console.log('Its a tie! Go again!');
    }
};