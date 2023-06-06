const moves = ["Rock", "Paper", "Scissor"];
const gamePoint = 5;
const playerMove = document.querySelector("#playermove");
const computerMove = document.querySelector("#pcmove");
const rpschoices = document.querySelectorAll(".choice");
const gamescreen = document.querySelector("#gamescreen");
const body = document.querySelector('body');

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const pScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#computerScore");

let playerChoice = null;
let computerChoice = null;
let announcement = document.querySelector("#announce");

let playerScore = 0;
let computerScore = 0;

function initialize(){
    playerScore = 0;
    computerScore = 0;
    announcement.textContent = "Choose your move!!"
    pScore.innerHTML = `${playerScore}`;
    cScore.innerHTML = `${computerScore}`;
    gamescreen.style.display = 'block';
    endscreen.style.display = 'none';
}

playerMove.innerHTML =
    '<img src="img/qmark.png" style="width: 70%; height: 70%; border-radius: 10px;">';
computerMove.innerHTML =
    '<img src="img/qmark.png" style="width: 70%; height: 70%; border-radius: 10px;">';

rpschoices.forEach((choice) => {
    choice.addEventListener("click", function getPlayerChoice(e) {
        console.log(e.target.parentElement.id);
        playerMove.innerHTML = choice.innerHTML;
        if (e.target.parentElement.id == "rock") playerChoice = 0;
        else if (e.target.parentElement.id == "paper") playerChoice = 1;
        else if (e.target.parentElement.id == "scissor") playerChoice = 2;
        getComputerChoice();
        playRound();
    });
});

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0)
        computerMove.innerHTML =
            '<img src="img/crock.jpg" style="width: 100%; height: 100%; border-radius: 10px"/>';
    if (computerChoice == 1)
        computerMove.innerHTML =
            '<img src="img/cpaper.jpg" style="width: 100%; height: 100%; border-radius: 10px"/>';
    if (computerChoice == 2)
        computerMove.innerHTML =
            '<img src="img/cscissor.jpg" style="width: 100%; height: 100%; border-radius: 10px"/>';
}

function playRound() {
    if ((playerChoice + 1) % 3 == computerChoice) {
        announcement.innerHTML = "You lose!";
        computerScore++;
        cScore.innerHTML = `${computerScore}`;
    } else if (playerChoice == computerChoice) {
        announcement.innerHTML = "It's a draw!";
    } else {
        announcement.innerHTML = "You win!";
        playerScore++;
        pScore.innerHTML = `${playerScore}`;
    }
    if (playerScore == gamePoint || computerScore == gamePoint) endgame();
}

const endscreen = document.querySelector("#ends");
const restart = document.querySelector(".restart");
const result = document.querySelector("#result");
endscreen.style.display = 'none';
restart.onclick = () => initialize();


function endgame() {
    result.textContent = "You won the game!"
    gamescreen.style.display = 'none';
    endscreen.style.display = 'block';
    endscreen.style.display = 'flex';
}
