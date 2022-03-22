let input = prompt(`What move do you choose?`)
const playerSelection = input.toLowerCase();

const moves = [`rock`, `paper`, `scissors`]; 
let randomPlay = Math.floor(Math.random() * moves.length);

function computerPlay(){
    let move = moves[randomPlay];
    return move;
}

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  let result = ``;
  switch (result = ``) {
    case playerSelection == `rock` && computerSelection == `scissors`:
    case playerSelection == `paper` && computerSelection == `rock`:
    case playerSelection == `scissors` && computerSelection == `paper`:  
      console.log(result = `You win!`);
      break;
    case playerSelection == `rock` && computerSelection == `paper`:
    case playerSelection == `paper` && computerSelection == `scissors`:
    case playerSelection == `scissors` && computerSelection == `rock`:  
      console.log(result = `You lost!`);
      break;
    default:
      console.log(result = `It's a draw`);
  }
  if (result == `You win!`) {
    console.log(`${playerSelection} beats ${computerSelection}!`);
  } else if (result == `You lost!`) {
    console.log(`${computerSelection} beats ${playerSelection}!`);
  } else {
    console.log(`You played ${playerSelection} & Computer played ${computerSelection}!`);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
}

console.log(game());