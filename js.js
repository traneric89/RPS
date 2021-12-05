const computerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

const playerChoice = () => {
  const playerPrompt = prompt("What do you choose? Rock, paper, or scissors?");
  const player = playerPrompt.toLowerCase();
  return player;
};

const game = () => {
  let playerPick = playerChoice();
  let computerPick = computerChoice();
  if (playerPick == "rock" && computerPick == "rock") {
    console.log("both picked rock, tie");
  } else if (playerPick == "rock" && computerPick == "paper") {
    console.log("computer win, player picked rock vs. comp paper");
  } else if (playerPick == "rock" && computerPick == "scissors") {
    console.log("player win, player picked rock vs. comp scissors");
  } else if (playerPick == "paper" && computerPick == "rock") {
    console.log("player win, player picked paper vs. comp rock");
  } else if (playerPick == "paper" && computerPick == "paper") {
    console.log("both picked paper, tie");
  } else if (playerPick == "paper" && computerPick == "scissors") {
    console.log("computer win, player picked paper vs. comp scissors");
  } else if (playerPick == "scissors" && computerPick == "rock") {
    console.log("computer win, player picked scissors vs. comp rock");
  } else if (playerPick == "scissors" && computerPick == "paper") {
    console.log("player win, player picked scissors vs. comp paper");
  } else if (playerPick == "scissors" && computerPick == "scissors") {
    console.log("both picked scissors, tie");
  } else {
    console.log("pick a valid option");
  }
};

game();
