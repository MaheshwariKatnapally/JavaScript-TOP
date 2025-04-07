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

function getHumanChoice() {
  let userInput = prompt("Please select from rock, paper and scissors.");
  return userInput;
}

let count = 0;

function playGame(num = 5) {
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

  for (let i = 0; i < num; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log(
    `Your score: ${humanScore}, Computer score: ${computerScore}, Number of Ties: ${numTie}`
  );
}

playGame();
