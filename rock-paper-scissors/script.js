const options = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
const playerScoreSpanElement = document.querySelector("#player-score");
const computerScoreSpanElement = document.querySelector("#computer-score");
const roundResultsMsg = document.querySelector("#results-msg");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const winnerMsgElement = document.querySelector("#winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.querySelector("#reset-game-btn");

rockBtn.addEventListener("click", () => {
    showResults("Rock");
})

paperBtn.addEventListener("click", () => {
    showResults("Paper");
})

scissorsBtn.addEventListener("click", () => {
    showResults("Scissors");
})

resetGameBtn.addEventListener("click", resetGame);

function getRandomComputerResult() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
    return (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Rock")
    );
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    const result = hasPlayerWonTheRound(userOption, computerResult);
    if (result === true) {
        playerScore += 1;
        return `Player wins! ${userOption} beats ${computerResult}`;
    }

    if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}`;
    }

    computerScore += 1;
    return `Computer wins! ${computerResult} beats ${userOption}`;
}

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerHTML = playerScore;
    computerScoreSpanElement.innerHTML = computerScore;

    if (playerScore === 3) {
        winnerMsgElement.innerHTML = "Player has won the game!"
    }

    if (computerScore === 3) {
        winnerMsgElement.innerHTML = "Computer has won the game!"
    }

    if (playerScore === 3 || computerScore === 3) {
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0
    playerScoreSpanElement.innerHTML = playerScore;
    computerScoreSpanElement.innerHTML = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerHTML = "";
    roundResultsMsg.innerText = "";
}

