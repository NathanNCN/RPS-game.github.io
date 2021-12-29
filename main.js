let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let choice = ['rock','paper','scissors'];
    let comupterChoice =  Math.floor(Math.random() * 3);
    return choice[comupterChoice];
}

function updatePlayer(){
    playerScore += 1;
    scoreBoardPlayer.innerHTML = playerScore;
}

function restGame(){
    if (computerScore===5 || playerScore===5){
        computerScore = 0;
        playerScore = 0;
        scoreBoardPlayer.innerHTML = playerScore;
        scoreBoardComputer.innerHTML = computerScore;
    }


}
function isWinner(){
    if (computerScore === 5){
        winner.innerHTML = 'I won';
    } else if (playerScore === 5){
        winner.innerHTML = 'You Win';
    }
}


function round(playerSelection, computerSelection){
    restGame();
    if (playerSelection === computerSelection) {
        winner.innerHTML = 'We Draw, we both picked ' + playerSelection;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        winner.innerHTML = 'You won. You choose rock I choose scissors';
        updatePlayer();
        isWinner()
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        winner.innerHTML = 'You won. You choose paper I choose rock';
        updatePlayer();
        isWinner()
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        winner.innerHTML = 'You won. You choose scissors I choose paper';
        updatePlayer();
        isWinner()
    } else {
        winner.innerHTML = 'I won. you choose ' + playerSelection + ' I chose ' + computerSelection
        computerScore += 1;
        scoreBoardComputer.innerHTML = computerScore;
        isWinner()
    }
}

let buttonR = document.getElementById('rockButton');
let buttonP = document.getElementById('paperButton');
let buttonS = document.getElementById('scissorsButton');
buttonR.addEventListener('click', () => round( 'rock',computerPlay()));
buttonP.addEventListener('click', () => round('paper',computerPlay()));
buttonS.addEventListener('click', () => round('scissors',computerPlay()));

