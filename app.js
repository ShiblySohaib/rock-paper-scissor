const moves = ["Rock", "Paper", "Scissor"];
const playerMove = document.querySelector("#playermove");
const computerMove = document.querySelector("#pcmove");
const rpschoices = document.querySelectorAll(".choice");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

let playerChoice = null;
let computerChoice = null;
let announcement = document.querySelector("#announce");

rpschoices.forEach((choice) => {
  choice.addEventListener("click", function getPlayerChoice(e) {
    playerMove.innerHTML = choice.innerHTML;
    if(e.target == '#rock') playerChoice = 0;
    else if(e.target == "#paper") playerChoice = 1;
    else if(e.target == "#scissor") playerChoice = 2;
    getComputerChoice();
    playRound();
  });
});


function getComputerChoice(){
  let computerChoice =  Math.floor(Math.random() * 3);
  if(computerChoice == 0) computerMove.innerHTML = rock.innerHTML;
  if(computerChoice == 1) computerMove.innerHTML = paper.innerHTML;
  if(computerChoice == 2) computerMove.innerHTML = scissor.innerHTML;
}

function playRound() {

  if ((playerChoice + 1) % 3 == computerChoice) {
    announcement.innerHTML = "You lose!"
    alert(`${playerChoice}, ${computerChoice}`);
  } else if (playerChoice == computerChoice) {
    announcement.innerHTML = "It's a draw!"
  } else {
    announcement.innerHTML = "You win!"
  }
}