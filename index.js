"use strict";
(function() {
    let playerScore = 0;
    let pcScore = 0;

    window.addEventListener('load', init);

    function init() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', e => {
                playRound(e.target.dispatchEvent, getComputerChoice);
                
            });
        });
    }

    function getComputerChoice() {
        let choice = "";
        let rand = Math.floor((Math.random() * 10));
        if (rand <= 3) {
            choice = "rock";
        } else if (rand <= 6) {
            choice = "paper";
        } else {
            choice = "scissors";
        }
        return choice;
    }

    function playRound(playerSelection, computerSelection) {
        console.log("play round");
        if (playerSelection == "rock" && computerSelection == "paper") {
            return ["You lose! Paper beats rock.", 0, 1];
        } else if (playerSelection == "rock" && computerSelection == "rock") {
            return ["Draw!", 0, 0];
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            return ["You win! Rock beats scissors.", 1, 0];
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            return ["Draw!", 0, 0];
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            return ["You win! Paper beats rock.", 1, 0];
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            return ["You lose! Scissors beats paper.", 0, 1];
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            return ["Draw!", 0, 0];
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            return ["You win! Scissors beats paper.", 1, 0];
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            return ["You lose! Rock beats scissors.", 0, 1];
        } else {
            return "Invalid input";
        }
    }
})();






function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Enter move: "); 
        let pcChoice = getComputerChoice();
        let res = playRound(playerChoice, pcChoice);
        console.log(res[0]);
        playerScore += res[1];
        playerScore += res[2];
    }
    if (playerScore > pcScore) {
        console.log("You win!");
    } else if (playerScore < pcScore) {
        console.log("You lose!");
    } else {
        console.log("You draw!");
    }
}