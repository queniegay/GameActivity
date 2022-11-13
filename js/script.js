//------variables------
var playerScoring = 0;
var computerScoring = 0;
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const scoreSection = document.querySelector(".scoreSection");
const historySection = document.querySelector(".historySection");

const gameBtn = document.querySelectorAll(".gameBtn");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const computerChoice = ["Rock", "Paper", "Scissors"];
const playerChoice = ["Rock", "Paper", "Scissors"];
//------End------

//------Start Rock Function------
rockBtn.addEventListener("click", rockChoice);
function rockChoice() {
    let c = Math.floor(Math.random() * 3);
    let historyResults = document.createElement("h4");
    document.getElementById("computerId").textContent ="Computer: " + computerChoice[c];
    document.getElementById("playerId").textContent ="Player: " + "Rock";

    gameBtn.forEach(button => button.addEventListener("click", () => {
        playerChoice = button.textContent;
    }))

    if (c == 0) {
        resultId.innerHTML = "It's a tie!";
        historyResults.textContent = "Rock vs. Rock";
        historySection.appendChild(historyResults);
    }
    else if (c == 1) {
        resultId.innerHTML = "You lose!";
        historyResults.style.color = "red";
        historyResults.textContent = "Rock vs. Paper";
        historySection.appendChild(historyResults);

        computerScoring++;
        computerScore.textContent = computerScoring;
    }
    else if (c == 2) {
        resultId.innerHTML = "You win!";
        historyResults.textContent = "Rock vs. Scissors";
        historyResults.style.color = "green";
        historySection.appendChild(historyResults);

        playerScoring++;
        playerScore.textContent = playerScoring;
    }
}
//------End Rock Function------

//------Start Paper Function------
paperBtn.addEventListener("click", paperChoice);
function paperChoice() {
    let c = Math.floor(Math.random() * 3);
    let historyResults = document.createElement("h4");
    document.getElementById("computerId").textContent ="Computer: " + computerChoice[c];
    document.getElementById("playerId").textContent ="Player: " + "Paper";

    if (c == 0) {
        resultId.innerHTML = "You win!";
        historyResults.textContent = "Paper vs. Rock";
        historyResults.style.color = "green";
        historySection.appendChild(historyResults);

        playerScoring++;
        playerScore.textContent = playerScoring;
    }
    else if (c == 1) {
        resultId.innerHTML = "It's a tie!";
        historyResults.textContent = "Paper vs. Paper";
        historySection.appendChild(historyResults);
    }
    else if (c == 2) {
        resultId.innerHTML = "You Lose!";
        historyResults.textContent = "Paper vs. Scissors";
        historyResults.style.color = "red";
        historySection.appendChild(historyResults);

        computerScoring++;
        computerScore.textContent = computerScoring;
    }
}
//------End Paper Function------

//------Start Scissors Function------
scissorsBtn.addEventListener("click", scissorsChoice);
function scissorsChoice() {
    let c = Math.floor(Math.random() * 3);
    let historyResults = document.createElement("h4");
    document.getElementById("computerId").textContent ="Computer: " + computerChoice[c];
    document.getElementById("playerId").textContent ="Player: " + "Scissors";

    if (c == 0) {
        resultId.innerHTML = "You lose!";

        historyResults.textContent = "Scissors vs. Rock";
        historyResults.style.color = "red";
        historySection.appendChild(historyResults);

        computerScoring++;
        computerScore.textContent = computerScoring;
    }
    else if (c == 1) {
        resultId.innerHTML = "You win!";
        historyResults.textContent = "Scissors vs. Paper";
        historyResults.style.color = "green";
        historySection.appendChild(historyResults);

        playerScoring++;
        playerScore.textContent = playerScoring;
    }
    else if (c == 2) {
        resultId.innerHTML = "It's a tie!";
        historyResults.textContent = "Scissors vs. Scissors";
        historySection.appendChild(historyResults);
    }

}
//------End Scissors Function------

