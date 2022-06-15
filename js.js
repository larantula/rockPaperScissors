//declare globals
let playerSelection;
let winLoss = 0;


//get user input through buttons

let inputRaw = window.prompt("Select: Rock, Paper, Scissors");
let inputUpper = inputRaw.toUpperCase();

//validate user input 

if (inputUpper === "ROCK" || inputUpper === "PAPER" || inputUpper === "SCISSORS"){
    // log for testing 
    //console.log("yas");
    
    playerSelection = inputUpper;
} else {
    console.log("Reload, go again");
}

//console log to ensure user input
console.log(playerSelection);

// function: selects a number from 1-3 and then attributes a String value based on selection
function computerPlay(){

    let min = Math.floor(1);
    let max = Math.ceil(3);

    let number = Math.round(
        Math.floor(
            Math.random() * (max - min+ 1) + min)
        ); 

    switch (number){

    case 1:
        return "ROCK";
        break;

    case 2:
        return "PAPER";
        break;
    case 3:
        return "SCISSORS";
        break;

    default:

    }

}

//attrib function to computerSelection String
let computerSelection = computerPlay();

//console log to ensure it's working
console.log(computerSelection);

/// check if there's a tie 

if (computerSelection === playerSelection){
    console.log("You tie, play again");
}

//play game comparing each possible string pairing

function playGame(){

if (computerSelection === "ROCK" && playerSelection === "PAPER"){

    console.log("Paper beats rock, you win!");
    return ++winLoss;

} else if (computerSelection === "ROCK" && playerSelection === "SCISSORS"){

    console.log("Scissors loses to rock, you lose :(");
    return --winLoss;

} else if (computerSelection === "PAPER" && playerSelection === "ROCK"){
    console.log("Rock loses to Paper, you lose :(");
    return --winLoss;

} else if (computerSelection === "PAPER" && playerSelection === "SCISSORS"){
    console.log("Scissors beat Paper, you win!");
    return ++winLoss;

} else if (computerSelection === "SCISSORS" && playerSelection === "ROCK"){
    console.log("Rock beats Scissors, you win!");
    return ++winLoss;

} else if (computerSelection === "SCISSORS" && playerSelection === "PAPER"){
    console.log("Paper loses to Scissors, you lose :(");
    return ++winLoss;
} 

}

//play game once
playGame();

//check that winLoss is updating
console.log(winLoss);

