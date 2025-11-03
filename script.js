//script.js
let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    let num = Math.floor(Math.random() * 3)

    if (num == 0){
        return rock
    }else if(num==1){
        return paper
    }else{
        return scissors
    }
}

function getHumanChoice(){
    let answer = prompt("this is a Rock-Paper-Scissors game \n type Rock, Paepr, or Scissors!")
    return answer
}

function playRound(humanChoice, computerChoice) {
    humanChoice=humanChoice.toUpperCase();
    computerChoice=computerChoice.toUpperCase();

    if (humanChoice === computerChoice) {
        return "It's a tie! You both chose " + humanChoice;

    }else if(
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        humanScore +=1;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }else{
        computerScore +=1;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    console.log(result)
    }

    if (humanScore > computerScore){
        return "You win the game! Final Score: " + humanScore + " - " + computerScore;
    } else if (computerScore > humanScore){
        return "Computer wins the game! Final Score: " + computerScore + " - " + humanScore;
    } else {
        return "The game is a tie! Final Score: " + humanScore + " - " + computerScore;
    }
}

console.log(playGame());