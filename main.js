let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let gameWords = ["rock", "paper", "scissors"];
    const choice = gameWords[Math.floor(Math.random() * gameWords.length)];
    console.log(`Computer chose: ${choice}`);
    return choice;
}

function getHumanChoice() {
    let selectChoice = prompt("Choose one of the options: Rock, Paper, Scissors: ").toLowerCase();
    
    if (["rock", "paper", "scissors"].includes(selectChoice)) {
        console.log(`You chose: ${selectChoice}`);
        return selectChoice;
    } else {
        console.log("Choose a valid option");
        return getHumanChoice(); // Ask again if the input is invalid
    }
}

function determineWinner(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    }
    else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") || 
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log("Computer wins!");
        computerScore ++;
    }
    else {
        console.log("You win!");
        humanScore ++;
    }
}

function playRound(humanChoice,computerChoice){
        let playerTurn = true;

    while (playerTurn) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        determineWinner(computerChoice, humanChoice);

        playerTurn = confirm("Do you want to play again?"); // Ask if the player wants to play again
    }
}

playRound();