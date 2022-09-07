const computerChoiceDisplay = document.getElementById("computer");
const playerChoiceDisplay = document.getElementById("player");
const possibleChoices = document.querySelectorAll(".btn");
console.log({ possibleChoices });
let playerChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = " Player's Choice:  " + playerChoice;
    getComputerChoice();
  })
);

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  console.table({ randomNumber });
//this could also work for practice at biginners level
  // if (randomNumber === 1) {
  //   computerChoice = "paper";
  // }

  // if (randomNumber === 2) {
  //   computerChoice = "scissors";
  // }

  // if (randomNumber === 3) {
  //   computerChoice = "rock";
  // }
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = "Computer's Choice: " + computerChoice;
}

const choices = ["PAPER", "SCISSORS", "ROCK"];

function getResult() {
  if(computerChoice === playerChoice) {
   result = "Draw";
  }
  if(computerChoice === "rock" && playerChoice === "paper") {
    result = "You Win";
   }
   if(computerChoice === "paper" && playerChoice === "scissors") {
    result = "You Win";
   }
   if(computerChoice === "paper" && playerChoice === "rock") {
    result = "You Lost";
   }
   if(computerChoice === "scissors" && playerChoice === "rock") {
    result = "You Win";
   }
   if(computerChoice === "scissors" && playerChoice === "paper") {
    result = "You Lost";
   }
   if(computerChoice === "rock" && playerChoice === "scissors") {
    result = "You Lost";
   }
}
