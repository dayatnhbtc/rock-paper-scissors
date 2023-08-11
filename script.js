const choices = ["rock", "paper", "scrissors"];
const gameLength = 5;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  const input = parseInt(prompt("1: rock, 2:paper, 3:scrissors"));
  if (input > choices.length || input < 0) {
    console.log("please enter the correct input");
  } else {
    return choices[input];
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    console.log("it's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scrissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scrissors" && computerSelection === "paper")
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
}

for (let i = 0; i < gameLength; i++) {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  console.log(
    `playerScore : ${playerScore} , computerScore : ${computerScore}`
  );
}
