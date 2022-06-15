let computerSelection;
let playerSelection;

function computerPlay(){

    let min = Math.floor(1);
    let max = Math.ceil(3);

    let number = Math.round(
        Math.floor(
            Math.random() * (max - min+ 1) + min)
        ); 

    switch (number){

    case 1:
        return "Rock";
        break;

    case 2:
        return "Paper";
        break;
    case 3:
        return "Scissors";
        break;

    default:

    }

}

computerSelection = computerPlay();
console.log(computerSelection);