"use strict";
(function() {
    let playerScore = 0;
    let pcScore = 0;

    window.addEventListener('load', init);

    function init() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', e => {
                playRound(e.target.id, getComputerChoice());
                
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
        console.log(playerSelection);
        console.log(computerSelection);
        let res;
        if (playerSelection == "rock" && computerSelection == "paper") {
            pcScore++;
            res = "You lose! Paper beats rock.";
        } else if (playerSelection == "rock" && computerSelection == "rock") {
            res = "Draw!";
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++;
            res = "You win! Rock beats scissors.";
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            res = "Draw!";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++;
            res = "You win! Paper beats rock.";
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            pcScore++;
            res = "You lose! Scissors beats paper.";
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            res ="Draw!";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++;
            res = "You win! Scissors beats paper.";
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            pcScore++;
            res = "You lose! Rock beats scissors.";
        } else {
            res = "Invalid input";
        }
        document.getElementById('results').textContent = res;
        document.getElementById('player-score').textContent = playerScore;
            document.getElementById('pc-score').textContent = pcScore;
            if (playerScore >= 5 || pcScore >= 5) {
                if (playerScore > pcScore) {
                    document.getElementById('results').textContent = "Game over! You win!";
                } else {
                    document.getElementById('results').textContent = "Game over! You lose!";
                }
            }
    }
})();
