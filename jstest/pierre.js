const computerSelection = getComputerChoice();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    allo = getRandomInt(3);
    if (allo === 0) {
        return "Rock";
    } else if (allo === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function play(playerSelection, computerSelection) {
    console.log(computerSelection);
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock.";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beat Paper.";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors.";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock Beats Scissors.";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beat Paper.";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win! Paper beats Rock.";
    } else if (playerSelection == computerSelection) {
        return "Égalité.";
    }
}

function game() {
    let computerPoints = 0;
    let playerPoints = 0;
    for (let i = 0; i <= 4; i++) {
        let result = play(prompt("Tu prends quoi?"), getComputerChoice());

        if (result.slice(0, 8) == "You Lose") {
            computerPoints += 1;
            console.log("Défaite")
        } else if (result.slice(0, 7) == "You Win") {
            playerPoints += 1;
            console.log("Victoire")
        } else {
            console.log("égalité");
        }
        console.log(computerPoints, playerPoints);
    }
    if (computerPoints > playerPoints) {
        return ("You are a LOSER...You lost " + computerPoints + " " + "to " + playerPoints);
    } else if (playerPoints > computerPoints) {
        return ("You are a WINNER...You won " + playerPoints + " " + "to " + computerPoints);
    } else {
        return ("Le match se termine par une Égalité.")

    }
}

console.log(game());
