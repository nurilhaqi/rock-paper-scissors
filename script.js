//script.js
let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    let num = Math.floor(Math.random() * 3)
    return computerScore=num 
}

function getHumanChoice(){
    let answer = prompt("test")
    return humanScore=answer
}

console.log(getComputerChoice())
console.log(getHumanChoice())
