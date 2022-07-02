function computerPlay() {
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
        default:
            return "ERROR";
            break;
    }
}

function playRound(playerInput, computerInput) {
    switch(playerInput) {
        case "ROCK":
            switch(computerInput) {
                case "ROCK":
                    return "DRAW";
                    break;
                case "PAPER":
                    return "LOSE";
                    break;
                case "SCISSORS":
                    return "WIN";
                    break;
                default:
                    return "ERROR";
            }
            break;
        case "PAPER":
            switch(computerInput) {
                case "ROCK":
                    return "WIN";
                    break;
                case "PAPER":
                    return "DRAW";
                    break;
                case "SCISSORS":
                    return "LOSE";
                    break;
                default:
                    return "ERROR";
            }
            break;
        case "SCISSORS":
            switch(computerInput) {
                case "ROCK":
                    return "DRAW";
                    break;
                case "PAPER":
                    return "LOSE";
                    break;
                case "SCISSORS":
                    return "WIN";
                    break;
                default:
                    return "ERROR";
        }
        break; 
        default:
            return "ERROR";
    }
}

function playerPlay() {
    var input = prompt("Select 'rock', 'paper', or 'scissors'...").toUpperCase(); 
    if (input !== "ROCK" && input !== "PAPER" && input !== "SCISSORS") return playerPlay();
    return input;
}

function playGame() {
    var playerScore = 0;
    var comScore = 0;
    for(round=1;round<=5;round++) {
        switch(playRound(playerPlay(), computerPlay())) {
            case "WIN":
                playerScore++;
                console.log("Player has won round " + round + "! The score is player - " + playerScore + ", computer - " + comScore + "...");
                break;
            case "LOSE":
                comScore++;
                console.log("Computer has won round " + round + "! The score is player - " + playerScore + ", computer - " + comScore + "...");
                break;
            case "DRAW":
                console.log("The round " + round + " was drawn! The score is still player - " + playerScore + ", computer - " + comScore + "...");
                break;
            default:
                console.log("Something went wrong!");
                break;
        }
    }
    if(playerScore > comScore) {
        console.log("The final score is player - " + playerScore + ", computer - " + comScore + ". Player won!");
        return 1;
    } else if(playerScore < comScore) {
        console.log("The final score is player - " + playerScore + ", computer - " + comScore + ". Computer won!");
        return 2;
    } else {
        console.log("The final score is player - " + playerScore + ", computer - " + comScore + ". That means tiebreak!")
        var tiebreak = "";
        while(tiebreak !== "WIN" && tiebreak !== "LOSE") {
            tiebreak = playRound(playerPlay(), computerPlay());
        }
        if(tiebreak == "WIN") console.log("Player won!");
        else console.log("Computer won!");
    }
}

playGame();

/* DEBUG
for(i=0;i<=50;i++) {
    var a = computerPlay();
    var b = computerPlay();
    var result = playRound(a, b);
    console.log("Player 1: " + a + " Player 2: " + b + " Result: " + result);
} */