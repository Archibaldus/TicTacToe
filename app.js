function computerPlay() {
  const turns = ["paper", "scissor", "rock"];
  return turns[Math.floor(Math.random() * 3)];
}

function Play(playerSelection, computerSelection) {
  const lowerPlayerSelection = playerSelection.toLowerCase().trim();
  //   console.log(`Player Selection: ${lowerPlayerSelection}`);
  //   console.log(`Computer Selection: ${computerSelection}`);
  if (lowerPlayerSelection == computerSelection) {
    return `Tie! Both player choose ${lowerPlayerSelection}`;
  } else if (
    // Winning conditions
    (lowerPlayerSelection == "paper" && computerSelection == "rock") ||
    (lowerPlayerSelection == "scissor" && computerSelection == "paper") ||
    (lowerPlayerSelection == "rock" && computerSelection == "scissor")
  ) {
    return `You Win! You choose ${lowerPlayerSelection} and Computer choose ${computerSelection}`;
  } else {
    return `You Loose! You choose ${lowerPlayerSelection} and Computer choose ${computerSelection}`;
  }
}

function Game() {
  let resultPlayer = 0;
  let resultComputer = 0;
  for (let i = 0; i < 5; i++) {
    let playResult = Play(prompt(), computerPlay());
    console.log(playResult);
    if (playResult.includes("Win")) {
      resultPlayer += 1;
    } else if (playResult.includes("Loose")) {
      resultComputer += 1;
    }
  }
  return `After 5 Games: Player Score: ${resultPlayer.toString()} || Computer Score: ${resultComputer.toString()}`;
}
