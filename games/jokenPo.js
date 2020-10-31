function jokenPo(player1, player2) {
    if (player1 == player2) {
        return "It's a tie"
    }
    switch(player1) {
        case "scissors":
            scissors(player2)
            break
        case "paper":
            paper(player2)
            break
        case "rock":
            rock(player2)
            break
    }

}

function scissors(player2) {
    return player2 == "paper" ? "Player 1 wins" : "Player 2 wins"
}

function paper(player2) {
    return player2 == "rock" ? "Player 1 wins" : "Player 2 wins"
}

function rock(player2) {
    return player2 == "scissors" ? "Player 1 wins" : "Player 2 wins"
}

console.log(jokenPo("scissors", "rock"))