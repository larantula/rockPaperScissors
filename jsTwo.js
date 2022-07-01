//declare globals
let playerSelection; //global declare playerSelection
let winLoss = 0; //set win/loss at zero
let outcome; //declare outcome
let outcomeArray = new Array();






//human selects rock/paper/scissors
function humanPlay(){

    
    inputRaw = window.prompt("Select: Rock, Paper, Scissors");
    inputUpper = inputRaw.toUpperCase();
    
    if (inputUpper === "ROCK" || inputUpper === "PAPER" || inputUpper === "SCISSORS"){
        playerSelection = inputUpper;
    } else {
        console.log("Invalid input, skip turn.");
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

function playGame(cpu, human){

    if (cpu === "ROCK" && human === "PAPER"){
    
        console.log("Paper beats rock, you win!");
        //outcome = "Paper beats rock, you win!";
        outcomeArray.push("Paper beats rock, you win!")
        ++winLoss;
    
    
    } else if (cpu === "ROCK" && human === "SCISSORS"){
    
        console.log("Scissors loses to rock, you lose :(");
        //outcome = "Scissors loses to rock, you lose :(";
        outcomeArray.push("Scissors loses to rock, you lose :(");
        --winLoss;
    
    
    } else if (cpu === "PAPER" && human === "ROCK"){
        console.log("Rock loses to Paper, you lose :(");
        //outcome = "Rock loses to Paper, you lose :(";
        outcomeArray.push("Rock loses to Paper, you lose :(");
        --winLoss;
    
    
    } else if (cpu === "PAPER" && human === "SCISSORS"){
        console.log("Scissors beat Paper, you win!");
        //outcome = "Scissors beat Paper, you win!";
        outcomeArray.push("Scissors beat Paper, you win!");
        ++winLoss;
    
    
    } else if (cpu === "SCISSORS" && human === "ROCK"){
        console.log("Rock beats Scissors, you win!");
        //outcome = "Rock beats Scissors, you win!";
        outcomeArray.push("Rock beats Scissors, you win!");
        ++winLoss;
    
    
    
    } else if (cpu === "SCISSORS" && human === "PAPER"){
        console.log("Paper loses to Scissors, you lose :(");
        //outcome = "Paper loses to Scissors, you lose :(";
        outcomeArray.push("Paper loses to Scissors, you lose :(");
        --winLoss;
    
    } 
    
    }

 function playHtml(human){

    //let comp decide on rock/paper/scissors
    computerPlay();
    computerSelection = computerPlay();    

    //check for tie
    if (computerSelection === human){
        console.log("You tie!");
        //outcome = "You tie!";
        outcomeArray.push("You Tie!");
        console.log("Score: "+winLoss);
        

    } else {

    // if no tie, play game once in loop

    playGame(computerSelection,human);

    //display total win/loss
    console.log("Score: "+winLoss);  

    }
    } 


//function to call the for loop
function playGame5Times(){
    
    

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
            //outcome = "You tie!";
            outcomeArray.push("You Tie!");
            console.log("Score: "+winLoss);
    
        } else {
    
        // if no tie, play game once in loop
    
        playGame(computerSelection,playerSelection);

        //display total win/loss
        console.log("Score: "+winLoss);  
        

    }
    }






}

        //play game 5 times
        //document.getElementById("game").innerHTML = playGame5Times();


const rock = document.querySelector(".ROCK");
const paper = document.querySelector(".PAPER");
const scissors = document.querySelector(".SCISSORS");
const newGame = document.querySelector(".newGame");

let count = 0;
let round = 0;



const container = document.querySelector("#container");

const score = document.createElement("div");
score.classList.add("score");
score.textContent = "Score: "+ winLoss;
container.appendChild(score);



const totalRound = document.createElement("div")
    totalRound.classList.add("totalRound");
    totalRound.textContent = "Round: "+round;
container.appendChild(totalRound);


const textResult = document.createElement("div");
    textResult.classList.add("textResult");
    textResult.textContent = "Round Outcome: Press a button to start playing!";
container.appendChild(textResult);

const firstToFive = document.createElement("div");
    firstToFive.classList.add("firstToFive");
    firstToFive.textContent = "First to 5 points wins!";
container.appendChild(firstToFive);

rock.addEventListener(`click`, e => {
    playHtml("ROCK");
    round++;
    totalRound.innerHTML = "Round: "+round;
    score.innerHTML = "Score: "+winLoss;
    textResult.innerHTML = "Round Outcome: "+outcomeArray[round-1];
    
    if (winLoss == 5){
        firstToFive.innerHTML = "You win! Ur a cool guy backflip mctwist! Play again to prove "+
        "you're the forever-guyman";
    } else if (winLoss == -5){
        firstToFive.innerHTML = "You lose, smelly loserpants. Refresh page and try to be "+
        "less of a suckstick."
    }
})

scissors.addEventListener(`click`, e => {
    playHtml("SCISSORS")
    round++;
    totalRound.innerHTML = "Round: "+round;
    score.innerHTML = "Score: "+winLoss;
    textResult.innerHTML = "Round Outcome: "+outcomeArray[round-1];

    if (winLoss == 5){
        firstToFive.innerHTML = "You win! Ur a cool guy backflip mctwist! Play again to prove "+
        "you're the forever-guyman";
    } else if (winLoss == -5){
        firstToFive.innerHTML = "You lose, smelly loserpants. Refresh page and try to be "+
        "less of a suckstick."
    }

})

paper.addEventListener(`click`, e =>{
    playHtml("PAPER");
    round++;
    totalRound.innerHTML = "Round: "+round;
    score.innerHTML = "Score: "+winLoss;
    textResult.innerHTML = "Round Outcome: "+outcomeArray[round-1];

    if (winLoss == 5){
        firstToFive.innerHTML = "You win! Ur a cool guy backflip mctwist! Play again to prove "+
        "you're the forever-guyman";
    } else if (winLoss == -5){
        firstToFive.innerHTML = "You lose, smelly loserpants. Refresh page and try to be "+
        "less of a suckstick."
    }

})

newGame.addEventListener(`click`, (e) => {

    round = 0;
    winLoss = 0;
    totalRound.innerHTML = "Round: "+round;
    score.innerHTML = "Score: " + winLoss;
    textResult.textResult = "Press a button to start playing!"
;
    firstToFive.innerHTML = "First to 5 points wins!";
})





