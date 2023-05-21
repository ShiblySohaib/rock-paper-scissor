const moves = ["rock", "paper", "scissor"];
getComputerChoice = () => Math.floor(Math.random() * 3);

function playerChoice() {
  let x = prompt("Enter your choice").toLowerCase();
  if (x == "rock") return 0;
  else if (x == "paper") return 1;
  else return 2;
}

function playRound(p = playerChoice(), c = getComputerChoice()) {
  if ((p + 1) % 3 == c) {
    console.log(moves[c] + " beats " + moves[p] + ". You lose");
    return "l";
  } else if (p == c) {
    console.log(moves[p] + " cannot beat " + moves[c] + ". It's a draw.");
    return "d";
  } else {
    console.log(moves[p] + " beats " + moves[c] + ". You win");
    return "w";
  }
}

function game() {
  let user = 0,
    pc = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound();
    if (result == "w") user++;
    else if (result == "l") pc++;
  }
  console.log(`You : ${user}, Computer: ${pc}, Draws: ${5 - user - pc}`);
  if (user > pc) console.log("Game finished. You win.");
  else if (pc > user) console.log("Game finished. Computer wins.");
  else console.log("Game finished. It's a draw.");
}
game();
