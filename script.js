function getComputerChoice() {
  let randomRPS = Math.floor(Math.random() * 100) % 3;
  if (randomRPS === 0) {
    return "rock";
  } else if (randomRPS === 1) {
    return "paper";
  } else {
    return "scrissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("Computer win");
    return computerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Player win");
    return playerScore++;
  } else if (playerSelection == "rock" && computerSelection == "scrissors") {
    console.log("Player win");
    return playerScore++;
  } else if (playerSelection == "scrissors" && computerSelection == "rock") {
    console.log("Computer win");
    return computerScore++;
  } else if (playerSelection == "scrissors" && computerSelection == "paper") {
    console.log("Player win");
    return playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "scrissors") {
    console.log("Computer win");
    return computerScore++;
  }
}

function game() {
  let userInput = prompt("rock, paper, scrissors?");
  const playerSelection = userInput.toLowerCase();
  const computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
  console.log(playerScore, computerScore);
}

game();
game();
game();
game();
game();
game();
