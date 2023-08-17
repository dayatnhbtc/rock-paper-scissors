const choices = ["rock", "paper", "scissors"];
const button = document.querySelector(".content");
const result = document.querySelector(".result");
const gameMaxLength = 5;
const playerLog = document.querySelector(".log-player");
const computerLog = document.querySelector(".log-computer");
const playerScoreClass = document.querySelector("#player-score");
const computerScoreClass = document.querySelector("#computer-score");
const reset = document.querySelector(".reset");
let gameLength = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function makeLog(playerSelection, computerSelection) {
  const playerSelectionLog = document.createElement("div");
  const computerSelectionLog = document.createElement("div");
  playerSelectionLog.textContent = playerSelection;
  computerSelectionLog.textContent = computerSelection;
  playerLog.appendChild(playerSelectionLog);
  computerLog.appendChild(computerSelectionLog);
}

function updateScore() {
  playerScoreClass.innerHTML = playerScore;
  computerScoreClass.innerHTML = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameLength = 0;
  result.innerHTML = "";
}

function removeLog() {
  let children1 = document.querySelectorAll(".log-player div");
  let children2 = document.querySelectorAll(".log-computer div");
  for (child of children1) {
    playerLog.removeChild(child);
  }
  for (child of children2) {
    computerLog.removeChild(child);
  }
}

reset.addEventListener("click", () => {
  resetGame();
  updateScore();
  removeLog();
});

button.addEventListener("click", (e) => {
  if (gameLength < 5) {
    playerSelection = e.target.className.toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore();
    makeLog(playerSelection, computerSelection);
    gameLength++;
  }
  if (gameLength === gameMaxLength) {
    if (computerScore < playerScore) {
      result.innerHTML = "Player is the Winner";
      result.style.color = "green";
    } else if (computerScore > playerScore) {
      result.innerHTML = "Computer is the Winner";
      result.style.color = "red";
    } else {
      result.innerHTML = "It's a tie game";
      result.style.color = "grey";
    }
  }
});
