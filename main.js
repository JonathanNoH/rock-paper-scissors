function random1to3() {
    // generate random int from 1 to 3 inclusive
    return Math.floor(Math.random() * (Math.ceil(3) - Math.floor(1) + 1) + Math.floor(1))
}

function computerPlay() {
    // get random number from random1to3() and then return Rock, Paper or Scissors
    let num = random1to3();
    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else if (num === 3) {
        return "Scissors";
    } else {
        console.log("Something went terribly wrong")
        return;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                return "Rock beats Scissors -- You win!";
            } else {
                return "Paper beats Rock -- You lose!";
            }
        case "paper":
            if (computerSelection === "rock") {
                return "Paper beats Rock -- You win!";
            } else {
                return "Scissors beats Paper -- You lose!";
            }
        case "scissors":
            if (computerSelection === "paper") {
                return "Scissors beats Paper -- You win!";
            } else {
                return "Rock beats Scissors -- You lose!";
            }
        default:
            console.log("Something went terribly wrong");
            return;
    }
}


function game() {
    // run 5 rounds of rock paper scissors
    let playerSelection;
    for (let i=0; i < 5; i++) {
        playerSelection = prompt("Select Paper, Rock or Scissors: ", "").toLowerCase();
        let computerSelection = computerPlay();
        console.log(`Computer picked ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}



while (true) {
    let ans = prompt("Would you like to play a game? (y/n)");
    if (ans === "y") {
        game();
    } else if (ans === "n") {
        break;
    } else {
        console.log("Please enter \"y\" or \"n\"");
    }
}
