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


const determineWinner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    player = player.tolowerCase();
    computer = computer.tolowerCase();
    if (player === computer) {
        result.textContent = "Tie";
    }
}