const computerChoiceDisplay = document.getElementById("computer");
const playerChoiceDisplay = document.getElementById("player");
const possibleChoices = document.querySelectorAll(".btn");
console.log({ possibleChoices });
p1Display = document.querySelector("#p1");
let playerChoice;
let computerChoice;
let result;

// let p1Score = 0;
// let playerScore = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = "Player's Choice:  " + playerChoice;
    getComputerChoice();
    getScore();
  })
);

const choices = ["PAPER", "SCISSORS", "ROCK"];
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  console.table({ randomNumber });
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = "Computer's Choice: " + computerChoice;
}

function getScore() {
  if(computerChoice > playerChoice) {
   result = "You Loose";
   console.log(result)
  }
  if(computerChoice === playerChoice) {
    result = "Draw";
    console.log(result)
   }
   if(computerChoice < playerChoice) {
    result = "You Win";
    console.log(result)
   }
  }




  // if (computerChoice === "rock" && playerChoice === "paper") {
  //   p1 = ++p1Score;
    // p1.textContent = p1Score;
 
  //  if(computerChoice === "paper" && playerChoice === "scissors") {
  //   playerScore++;
  //  }
  //  if(computerChoice === "paper" && playerChoice === "rock") {
  //    computerScore++;
  //  }
  //  if(computerChoice === "scissors" && playerChoice === "rock") {
  //  playerScore++;
  //  }
  //  if(computerChoice === "scissors" && playerChoice === "paper") {
  //   computerScore++;
  //  }
  //  if(computerChoice === "rock" && playerChoice === "scissors") {
  //   computerScore++;
  //  }

