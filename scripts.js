const playerChoices = document.querySelectorAll('.makeASelection');

playerChoices.forEach((playerChoice) => {
playerChoice.addEventListener('click', function() {game(playerChoice.id);}
   )
})


function computerChoice(){
  var myArray = [
    "rock",
    "paper",
    "scissors"
  ];
return myArray[Math.floor(Math.random()*myArray.length)];
}


function playRockPaperScissors(playerSelection){
  numberofGames += 1;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerChoice();
  switch(playerSelection){
    case 'rock':
    case 'paper':
    case 'scissors':
      break;
    default: 
    return 'incorrect data returned';
  }

  if(playerSelection == 'rock' && computerSelection == 'scissors' || 
          playerSelection == 'paper' && computerSelection=='rock' || 
          playerSelection == 'scissors' && computerSelection =='paper')
  {
    outputSingleGameResults('You won the round');
    playerWins += 1;
    return;
  }
  else if(playerSelection == 'rock' && computerSelection == 'rock' || 
          playerSelection == 'paper' && computerSelection=='paper' || 
          playerSelection == 'scissors' && computerSelection =='scissors')
  {
    outputSingleGameResults('tie');
    ties += 1;
    return;
  }
  else if(playerSelection == 'rock' && computerSelection == 'paper' || 
          playerSelection == 'paper' && computerSelection=='scissors' || 
          playerSelection == 'scissors' && computerSelection =='rock')
  {
    outputSingleGameResults('Computer won the round');
    computerWins += 1;
    return;
  }
  else
  {
    return 'error';
  }
}

const results = document.querySelector('#results');

function outputSingleGameResults(result)
{
  const output = document.createElement('p');
  output.textContent = result;   
  results.appendChild(output);
}

let numberofGames = 0;
let playerWins = 0;
let computerWins = 0;
let ties = 0;

function game(playerChoice){
  playRockPaperScissors(playerChoice);
  
  //Determine if game is over and return results
  const status = checkStatus();
  if(status == 'completed')
  {
    returnResults();
  }
  }


const pickone = document.querySelector("#pickone");
const newGameButton = document.querySelector("#newGame");


function checkStatus(){
  if(playerWins === 3 || computerWins === 3)
  {
    const result = document.createElement('h2');
    result.style.color = 'blue';
    
    if(playerWins === 3)
    {
      result.textContent = "You Won!";   
    }
    else if(computerWins === 3)
    {
      result.textContent = "Computer Won!";
    }
    results.appendChild(result);
    pickone.style.display = "none";
    newGameButton.style.display = "block";
  }
}

newGameButton.addEventListener('click', function() {newGame();})

function newGame(){
  //reset stats
  numberofGames = 0;
  playerWins = 0;
  computerWins = 0;
  ties = 0;

  //clear results
  results.innerHTML = '';

  //Show or Hide Buttons
  pickone.style.display = "block";
  newGameButton.style.display = "none";
}
