const computerSelection = getComputerChoice();
const buttons = document.querySelectorAll("button")
const result2 = document.querySelector(".result")
let affichage = "Quenani"
let playerPoints = 0
let computerPoints = 0
// we use the .forEach method to iterate through each button
buttons.forEach(button => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', function () {
        game(button.className)

    })
})

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function refreshPage() {
    window.location.reload(true)
}

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
    console.log("L'ordinateur a choisi " + computerSelection)
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
        return "You Win! Paper beats Rock.";
    } else if (playerSelection == computerSelection) {
        return "Égalité.";
    }
}

function game(choix) {

    let result = play(choix, getComputerChoice());

    if (result.slice(0, 8) == "You Lose") {
        computerPoints += 1;
        console.log("Défaite")
        if (computerPoints != 5) {
            result2.textContent = "Le score est de " + computerPoints + " (ordinateur) à " + playerPoints + "(vous) "
        } else {
            result2.textContent = "L'ordinateur a gagné " + computerPoints + " à " + playerPoints
            disableButtons()

        }




    } else if (result.slice(0, 7) == "You Win") {
        playerPoints += 1;
        console.log("Victoire")
        if (playerPoints != 5) {
            result2.textContent = "Le score est de " + playerPoints + " (vous) à " + computerPoints + " (ordinateur)"
        } else {
            result2.textContent = "vous avez  gagné " + playerPoints + " à " + computerPoints
            disableButtons()


        }


    } else {
        console.log("égalité");


    }


    console.log(computerPoints + " " + playerPoints)
    return




}















