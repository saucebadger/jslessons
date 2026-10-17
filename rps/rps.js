 
const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper")
const btnScissors = document.querySelector("#scissors")
 const results = document.querySelector("#results")

let humanScore = 0
let computerScore = 0
 
 btnRock.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    updateScore("rock",computerChoice)
    
 })
 
 btnPaper.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    updateScore("paper",computerChoice)
    
 })
 
 btnScissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    updateScore("scissors",computerChoice)
    
 })
 
 function updateScore (humanChoice,computerChoice) {
       if (humanScore === 5 || computerScore === 5) {
        return
    }

   if (humanChoice === computerChoice) {
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors")|| 
    (humanChoice === "scissors" && computerChoice === "paper")|| 
(humanChoice === "paper" && computerChoice === "rock")) {
        humanScore = humanScore + 1
    }
    else {
       computerScore = computerScore + 1
    }
    displayResults()
    }
 
 function displayResults() {
    const humanStars = '<i class="nes-icon is-large star"></i>'.repeat(humanScore)
    const computerStars = '<i class="nes-icon is-large star"></i>'.repeat(computerScore)

    let finalMessage = ""

    if (humanScore === 5) {
        finalMessage = "Congrats"
    }
    else if (computerScore === 5) {
        finalMessage = "You a Loser"
    }

    results.innerHTML = `
        <p>You: ${humanStars}</p>
        <p>Computer: ${computerStars}</p>
        <p>${finalMessage}</p>
    `
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

  