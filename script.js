const choices = ["✊", "✋", "✌️"];
let gameLength = 0;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    // console.log("it's a tie!");
  } else if (
    (playerSelection === "✊" && computerSelection === "✌️") ||
    (playerSelection === "✋" && computerSelection === "✊") ||
    (playerSelection === "✌️" && computerSelection === "✋")
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
}

// console.log(`playerScore : ${playerScore} , computerScore : ${computerScore}`);

// addEventListener
let playerSelection = "";
const button = document.querySelector(".content");

button.addEventListener("click", (e) => {
  if (gameLength < 5) {
    playerSelection = e.target.innerText;
    playRound(playerSelection, getComputerChoice());
    makeLog(playerSelection, getComputerChoice());
    updateScore();
    gameLength++;
  } else {
    const result = document.querySelector(".result");
    if (computerScore > playerScore) {
      result.innerHTML = "Computer is the Winner";
    } else if (computerScore < playerScore) {
      result.innerHTML = "Player is the Winner";
    } else {
      result.innerHTML = "It's a tie game";
    }
  }
});

// log
const playerLog = document.querySelector(".log-player");
const computerLog = document.querySelector(".log-computer");

function makeLog(i, j) {
  const element1 = document.createElement("div");
  const element2 = document.createElement("div");
  element1.textContent = i;
  element2.textContent = j;
  playerLog.appendChild(element1);
  computerLog.appendChild(element2);
}

// score
const playerScoreClass = document.querySelector("#player-score");
const computerScoreClass = document.querySelector("#computer-score");

function updateScore() {
  playerScoreClass.innerHTML = playerScore;
  computerScoreClass.innerHTML = computerScore;
}
