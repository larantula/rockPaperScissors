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
        

