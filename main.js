console.log("Hello,World");

function getComputerChoice(){
    let choice1 = "rock";
    let choice2 = "paper";
    let choice3 = "scissors";

    let selectChoice = prompt("Chose one of the option Rock, Paper, Scissor: ");
    
    if(selectChoice === choice1){
        console.log(choice1);
    }
    if (selectChoice === choice2){
        console.log(choice2);
    }
    if(selectChoice === choice3){
        console.log(choice3);
    }
    else{
        console.log("Choose a valid option");
    }
    
    return selectChoice;
}

console.log(getComputerChoice());