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

function round(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        winner.innerHTML = 'We Draw, we both picked ' + playerSelection;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        winner.innerHTML = 'You won. You choose rock I choose scissors';
        updatePlayer();
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        winner.innerHTML = 'You won. You choose paper I choose rock';
        updatePlayer();
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        winner.innerHTML = 'You won. You choose scissors I choose paper';
        updatePlayer();
    } else {
        winner.innerHTML = 'I won. you choose ' + playerSelection + ' I chose ' + computerSelection
        computerScore += 1;
        scoreBoardComputer.innerHTML = computerScore;
    }
    


}

let buttonR = document.getElementById('rockButton');
if (buttonR.onclick == true) {
    round('rock',computerPlay());
}
