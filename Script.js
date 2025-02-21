const game = () => {
    let humanScore = 0;
    let computerScore = 0;
    let moves = 0;

}


const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    playerOptions.forEach(option => {
        option.addEventListener("click", function () {

            const movesleft = document.querySelector(".movesleft");
            moves ++;
            movesleft.innerText = `Moves Left: ${5 - moves}`;

            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];

            determineWinner(this.innerText, computerChoice)

            if (moves === 5) {
                gameOver(playerOptions, movesleft)
            }
        })
    })
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