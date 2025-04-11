console.log("Hello world");

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);

  if (compChoice === 0) {
    return "Rock";
  } else if (compChoice === 1) {
    return "Paper";
  } else if (compChoice === 2) {
    return "Scissors";
  }
}

let humanScore = 0;
let computerScore = 0;
let numTie = 0;

function getHumanChoice() {
  let userInput = prompt("Please select from rock, paper and scissors.");
  return userInput;
}

function lose(humanChoice, computerChoice) {
  // console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  computerScore++;
  computerScoreDisplay.textContent = computerScore;
  resultMessageDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
}

function win(humanChoice, computerChoice) {
  // console.log(`You win! ${humanChoice} beat ${computerChoice}.`);
  humanScore++;
  humanScoreDisplay.textContent = humanScore;
  resultMessageDisplay.textContent = `You win! ${humanChoice} beat ${computerChoice}.`;
}

function showResetButton() {
  document.querySelector("#reset-btn").style.display = "inline-block";
}

function disableButtons() {
  btns.forEach((btn) => (btn.disabled = true));
}

function checkForWinner() {
  if (humanScore === 5) {
    resultMessageDisplay.textContent = "🎉 You win the game! First to 5!";
    disableButtons();
    showResetButton();
  } else if (computerScore === 5) {
    resultMessageDisplay.textContent =
      "😢 Computer wins the game! Better luck next time.";
    disableButtons();
    showResetButton();
  }
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    // console.log("It's a tie!");
    resultMessageDisplay.textContent = "It's a tie!";
    numTie++;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    win(humanChoice, computerChoice);
  } else {
    lose(humanChoice, computerChoice);
  }

  checkForWinner();
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  numTie = 0;

  humanScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  resultMessageDisplay.textContent =
    "Rock crushes, paper smothers, scissors slice. What's your weapon? ⚔️";

  btns.forEach((btn) => (btn.disabled = false));
  resetBtn.style.display = "none";
}

/*
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let numTie = 0;
  function lose(humanChoice, computerChoice) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }
  function win(humanChoice, computerChoice) {
    console.log(`You win! ${humanChoice} beat ${computerChoice}.`);
    humanScore++;
  }
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      numTie++;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      win(humanChoice, computerChoice);
    } else {
      lose(humanChoice, computerChoice);
    }
  }
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(
    `Your score: ${humanScore}, Computer score: ${computerScore}, Number of Ties: ${numTie}`
  );
}

// playGame();
*/

const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const resultMessageDisplay = document.querySelector(".message");
const startBtn = document.querySelector(".start-btn");
const startScreen = document.querySelector("#start-screen");
const gameArea = document.querySelector("#game-area");
const resetBtn = document.querySelector("#reset-btn");

const btns = document.querySelectorAll(".choice");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const humanChoice = btn.textContent;
    playRound(humanChoice);
  });
});

// Start game
startBtn.addEventListener("click", () => {
  startScreen.style.display = "none"; // Hide intro screen
  gameArea.style.display = "block"; // Show game area
});

// Restt Game
resetBtn.addEventListener("click", resetGame);
