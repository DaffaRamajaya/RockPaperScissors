/* Rock Paper Scissors Game 
Computer chooses betwen rock, paper, scissors randomly */
    
const choices = [
    'rock',
    'paper',
    'scissor'
    ];

//Game
    /* Play a single round of between player and computer. Ends in 5 rounds which then declares the winner
    */
    let playerScore = 0; 
    let computerScore = 0;
    let roundWinner = '';

function computerPlay() {
    return (choices)[Math.floor(Math.random()*choices.length)];
            //Computer chooses between rock, paper and scissor randomly
    }
console.log(computerPlay());


function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'paper') {
            playerScore++
            roundWinner = 'player';            
        }
        else if 
            (playerSelection === 'paper' && computerSelection === 'scissor') {
                playerScore++
                roundWinner = 'player';        }
        else if 
            (playerSelection === 'scissor' && computerSelection === 'rock') {
                playerScore++
                roundWinner = 'player';        }
        else if 
            (playerSelection === 'scissor' && computerSelection === 'paper') {
                computerScore++
                roundWinner = 'computer';        }
        else if 
            (playerSelection === 'paper' && computerSelection === 'rock') {
                computerScore++
                roundWinner = 'computer';        }
        else if 
            (playerSelection === 'rock' && computerSelection === 'scissor') {
                computerScore++
                roundWinner = 'computer';        }
        else {
            roundWinner = 'tie';
            /*if both player and computer input same choice the result is a tie. */
            }
    }


function isGameOver() {
    return playerScore === 5 || computerScore === 5
    }
// UI
const buttons = document.querySelectorAll('button');
const scoreInfo = document.getElementById('scoreInfo');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const rockButton = document.getElementById('rockButton');
const scissorButton = document.getElementById('scissorsButton');
const paperButton = document.getElementById('paperButton');
const endgameModal = document.getElementById('endgameModal');
const endgameMSG = document.getElementById('endgameMSG');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');

rockButton.addEventListener('click', () =>  handleClick('rock'));
paperButton.addEventListener('click', () =>  handleClick('paper'));
scissorButton.addEventListener('click', () =>  handleClick('scissor'));
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndgameModal);

function handleClick(playerSelection) {
    if (isGameOver ()) {
        openEndgameModal ();
        return
    }
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        updateChoices(playerSelection, computerSelection);
        updateScore();

    if (isGameOver()) {
        openEndgameModal();
        setFinalMessage()
    }
}

function updateChoices (playerSelection, computerSelection) {
    const playerSignClassName = `hand-${playerSelection.toLowerCase()}`;
    const computerSignClassName = `hand-${computerSelection.toLowerCase()}`;

    playerSign.classList = `fas ${playerSignClassName} active`;
    computerSign.classList = `fas ${computerSignClassName} active`;

}

function updateScore () {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a Tie!"
    } 
    else if (roundWinner === 'player') {
        scoreInfo.textContent = "You Won!"
    }
    else if (roundWinner === 'computer') {
        scoreInfo.textContent = "You Lost!"
    }
    playerScorePara.textContent = `Player : ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

function openEndgameModal () {
    endgameModal.classList.add('active');
    overlay.classList.add('active');
}

function closeEndgameModal () {
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}

function setFinalMessage () {
    if (playerScore > computerScore) {
        endgameMSG.textContent = 'Congrats! You have won against the computer!'
    }
    else {
        endgameMSG.textContent = 'Unfortunately, You have lost against the computer. Better luck next time!'
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreInfo.textContent = 'Score';
    playerScorePara.textContent = 'Player :0';
    computerScore.textContent = 'Computer: 0';
    playerSign.classList.remove('active');
    computerSign.classList.remove('active');
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}
