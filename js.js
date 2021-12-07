//Scores
let playerScore = 0;

const computerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

const playerChoice = (e) => {
  const player = e.innerHTML;
  return player.toLowerCase().trim();
};

const scoreKeeper = (result) => {
  playerScore = playerScore + result;
  document.getElementById("score").innerHTML = "Score: " + playerScore;
};

const game = (e) => {
  let playerPick = playerChoice(e);
  let computerPick = computerChoice();
  if (playerPick == "rock" && computerPick == "rock") {
    document.getElementById("compChoice").innerHTML = "Computer chose rock";
    console.log("both picked rock, tie");
  } else if (playerPick == "rock" && computerPick == "paper") {
    document.getElementById("compChoice").innerHTML = "Computer chose paper";
    console.log("computer win, player picked rock vs. comp paper");
  } else if (playerPick == "rock" && computerPick == "scissors") {
    document.getElementById("compChoice").innerHTML = "Computer chose scissors";
    console.log("player win, player picked rock vs. comp scissors");
    scoreKeeper(1);
  } else if (playerPick == "paper" && computerPick == "rock") {
    document.getElementById("compChoice").innerHTML = "Computer chose rock";
    console.log("player win, player picked paper vs. comp rock");
    scoreKeeper(1);
  } else if (playerPick == "paper" && computerPick == "paper") {
    document.getElementById("compChoice").innerHTML = "Computer chose paper";
    console.log("both picked paper, tie");
  } else if (playerPick == "paper" && computerPick == "scissors") {
    document.getElementById("compChoice").innerHTML = "Computer chose scissors";
    console.log("computer win, player picked paper vs. comp scissors");
  } else if (playerPick == "scissors" && computerPick == "rock") {
    document.getElementById("compChoice").innerHTML = "Computer chose rock";
    console.log("computer win, player picked scissors vs. comp rock");
  } else if (playerPick == "scissors" && computerPick == "paper") {
    document.getElementById("compChoice").innerHTML = "Computer chose paper";
    console.log("player win, player picked scissors vs. comp paper");
    scoreKeeper(1);
  } else if (playerPick == "scissors" && computerPick == "scissors") {
    document.getElementById("compChoice").innerHTML = "Computer chose scissors";
    console.log("both picked scissors, tie");
  } else {
    console.log("pick a valid option");
  }
};

// for (let i = 0; i < 1000; i++) {
//   let playerChoice = playerChoice();
//   let computerChoice = computerChoice();
//   let roundResult = game(playerChoice, computerChoice);
//   let score = scoreKeeper(roundResult);
// }
