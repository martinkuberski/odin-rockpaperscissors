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

for(i=0;i<=50;i++) {
    var a = computerPlay();
    var b = computerPlay();
    var result = playRound(a, b);
    console.log("Player 1: " + a + " Player 2: " + b + " Result: " + result);
}