 
const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper")
const btnScissors = document.querySelector("#scissors")
 const results = document.querySelector("#results")

let humanScore = 0
let computerScore = 0
 
 btnRock.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    updateScore("rock",getComputerChoice())
    
 })
 
 btnPaper.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    updateScore("paper",getComputerChoice())
    
 })
 
 btnScissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    updateScore("scissors",getComputerChoice())
    
 })
 
 function updateScore (humanChoice,computerChoice) {
   if (humanChoice === computerChoice) {
return
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors")|| 
    (humanChoice === "scissors" && computerChoice === "paper")|| 
(humanChoice === "paper" && computerChoice === "rock")) {
        humanScore = humanScore + 1
    }
    else {
       computerScore = computerScore + 1
    }
    }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //this is all the game logic
 
 
 function getComputerChoice () {
        
        let randomNumber = getRandomNumber()
        if (randomNumber <= 0.34) {
           return "rock"
        }
       else if (randomNumber <= 0.66) {
        return "paper"
       }
       else {
        return "scissors"
       }
    }
      function getRandomNumber () {
    return Math.random()
 }
  //Removed old console.log from this line so it would get called twice
  function getHumanChoice () {
    let userchoice = window.prompt("Rock, Paper or Scissors?")
    
    return userchoice.toLowerCase()
  }
 //removed old console.log so it wont get called twice 
//begining of code for 1 round version
  
  //end of code for 1 round version
  function playGame () {
      let humanScore = 0
  let computerScore = 0

  
    function playRound (humanChoice,computerChoice) {
   
    if (humanChoice === computerChoice) {
return "OHH Noo , Its a Draw!"
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors")|| 
    (humanChoice === "scissors" && computerChoice === "paper")|| 
(humanChoice === "paper" && computerChoice === "rock")) {
        return "Congrats, you just beat a computer"
    }
    else {
       return "You Loser!"
    }
    }
/*Change this so it shows score once a player hits 5 points and remove the auto round
    function scoreTracker (a,b) {
        let roundResult = playRound (a,b)
        if (roundResult === "Congrats, you just beat a computer") {
             humanScore = humanScore + 1
        }
        else if (roundResult === "You Loser!") {
             computerScore = computerScore + 1
        }
    }
    for (let round = 1; round <= 5; round = round + 1){
    let roundHumanChoice = getHumanChoice()
    let roundComputerChoice = getComputerChoice()
    scoreTracker(roundHumanChoice,roundComputerChoice)
    }
    console.log(humanScore,computerScore);
    if (humanScore > computerScore) {
        return "Congrats, you just beat a computer "
    }
    else if (humanScore === computerScore) {
        return "OHH Noo , Its a Draw!"
    }
    else {
        return "You Loser "
    }
*/
    }
  
  console.log(playGame());