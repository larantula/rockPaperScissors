//declare globals
let playerSelection; //global declare playerSelection
let winLoss = 0; //set win/loss at zero



/**  commented out to better read the logic below
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

*/ 

// create function humanPlay using logic commented out above
function humanPlay(){

    
inputRaw = window.prompt("Select: Rock, Paper, Scissors");
inputUpper = inputRaw.toUpperCase();

if (inputUpper === "ROCK" || inputUpper === "PAPER" || inputUpper === "SCISSORS"){
    playerSelection = inputUpper;
} else {
    console.log("Reload, go again");
}
    return playerSelection;
}



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
//console.log(computerSelection);



/**  commented out so it doesnt run twice, appears in bottom code
/// check if there's a tie 

if (computerSelection === playerSelection){
    console.log("You tie!");
}
*/
//play game comparing each possible string pairing



function playGame(cpu, human){

if (cpu === "ROCK" && human === "PAPER"){

    console.log("Paper beats rock, you win!");
    return ++winLoss;

} else if (cpu === "ROCK" && human === "SCISSORS"){

    console.log("Scissors loses to rock, you lose :(");
    return --winLoss;

} else if (cpu === "PAPER" && human === "ROCK"){
    console.log("Rock loses to Paper, you lose :(");
    return --winLoss;

} else if (cpu === "PAPER" && human === "SCISSORS"){
    console.log("Scissors beat Paper, you win!");
    return ++winLoss;

} else if (cpu === "SCISSORS" && human === "ROCK"){
    console.log("Rock beats Scissors, you win!");
    return ++winLoss;

} else if (cpu === "SCISSORS" && human === "PAPER"){
    console.log("Paper loses to Scissors, you lose :(");
    return ++winLoss;
} 

}

//play game once
//playGame(computerSelection,playerSelection);

//check that winLoss is updating
//console.log(winLoss);



//play game 5 times
for (let i = 0; i < 5; i++){



    //get human input
    humanPlay();
    //let comp decide on rock/paper/scissors
    computerPlay();

    //adjust computerSelection
    computerSelection = computerPlay();


    //check for tie
    if (computerSelection === playerSelection){
        console.log("You tie!");
        console.log(winLoss);

    } else {

    // if no tie, play game once in loop
    playGame(computerSelection,playerSelection);
    //display total win/loss
    console.log(winLoss);

    }
}

