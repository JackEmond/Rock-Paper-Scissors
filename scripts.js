

// Add event listeners to user selections
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', game);
paperButton.addEventListener('click', game);
scissorsButton.addEventListener('click', game);

function game(){
  playerChoice = this.id;
  playRockPaperScissors(playerChoice);

  //Determine if game is over and return results
  checkStatus();
}


// Initialize game stats
let numberofGames = 0;
let playerWins = 0;
let computerWins = 0;
let x;


//Play a single round of rock paper scissors and determine the results
function playRockPaperScissors(playerSelection){
  numberofGames += 1;
  computerSelection = computerChoice();

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

//Computer Randomly picks either rock paper or scissors
function computerChoice(){
  var myArray = [
    "rock",
    "paper",
    "scissors"
  ];
return myArray[Math.floor(Math.random()*myArray.length)];
}


//Set div for the output of the game results
const resultsDiv = document.querySelector('#results');

// output results in results div
function outputSingleGameResults(result)
{
  const output = document.createElement('p');
  output.textContent = result;   
  resultsDiv.appendChild(output);
}

const pickone = document.querySelector("#pickone");
const newGameButton = document.querySelector("#newGame");

//Determine if the game is over and display results if it is
function checkStatus(){
  if(playerWins === 3 || computerWins === 3)
  {
    const result = document.createElement('h2');
    
    if(playerWins === 3)
    {
      addImage('player');
      result.textContent = "You Won!";   
    }
    else if(computerWins === 3)
    {
      addImage('computer');
      result.textContent = "Computer Won!";
    }
    resultsDiv.appendChild(result);
    //pickone.style.display = "none";
    pickone.style.cssText = 'filter: grayscale(100%); opacity: 40%';
    rockButton.removeEventListener('click', game);
    paperButton.removeEventListener('click', game);
    scissorsButton.removeEventListener('click', game);
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
  resultsDiv.innerHTML = '';

  //Show or Hide relevant info
  enableSelectionClick();
  pickone.style.cssText = 'filter: grayscale(0%); opacity: 100%';
  newGameButton.style.display = "none";
}

//Show image with results (either computer or pointing finger)
function addImage(winner){
  var image = document.createElement("IMG");
  image.setAttribute("src", "images/" + winner +".png");
  image.setAttribute("alt", winner +  " won image");
  image.setAttribute("id", "imageresult");
  resultsDiv.appendChild(image);
}


function enableSelectionClick(){
  rockButton.addEventListener('click', game);
  paperButton.addEventListener('click', game);
  scissorsButton.addEventListener('click', game);
}