console.log("Hello,World");

function getComputerChoice(){
    let gameWords = ["rock", "paper", "scissors"];
    const choice = gameWords[Math.floor(Math.random() * gameWords.length)]
    console.log(`Computer chose: ${choice}`)    
}



function getHumanChoice(){
    let choice1 = "rock";
    let choice2 = "paper";
    let choice3 = "scissors";

    let selectChoice = prompt("Chose one of the option Rock, Paper, Scissor: ");
    
    if(selectChoice === choice1 || selectChoice === choice2 || selectChoice === choice3){
        console.log(`You chose: ${selectChoice}`);   
    }
    else{
        console.log(`Choose a valid option`);
        return getHumanChoice();
    }
    
}

function determineWinner(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log("Computer wins!");
    } else {
        console.log("You win!");
    }
}


function gamePlay(){
    playerTurn = true;
    player1 = getComputerChoice();
    player2 = getHumanChoice();

    while(playerTurn) {
        if(getComputerChoice === "rock" && getHumanChoice == "scissors"){
            console.log("rock breaks scissors /n")
            console.log("computer wins")
        }
        else{
            console.log("Human player wins")
        }

    }

    
}