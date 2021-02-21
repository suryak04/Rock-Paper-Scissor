let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToWord(letter){
  if(letter === 'r') return "Rock";
  if(letter === 'p') return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!.`;
}

function lose(userChoice, computerChoice){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beaten by ${convertToWord(computerChoice)}. You Lose!.`;
}

function draw(userChoice, computerChoice){
  result_p.innerHTML = `${convertToWord(userChoice)} same as ${convertToWord(computerChoice)}. It's a Draw!.`;
}

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissors_div.addEventListener('click', function(){
    game("s");
  })
}

main();
