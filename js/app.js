
const $gameScreenGridCells = document.querySelectorAll(".game-cell")

let currentPlayer = "y"
let gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]
]


console.log(gameBoard)

$gameScreenGridCells.forEach(function($gameScreenGridCell) {
    $gameScreenGridCell.innerHTML = ""
})

$gameScreenGridCells.forEach(function($gameScreenGridCell) {
    $gameScreenGridCell.addEventListener("click", function() {
        const dataX = $gameScreenGridCell.getAttribute("data-x")

        for (let i = 5; i >= 0; i--) {
            if (gameBoard[i][dataX] === "") {
              gameBoard[i][dataX] = currentPlayer;

              if (checkWin(gameBoard, currentPlayer)) {
                alert(`Le joueur ${currentPlayer} a gagné !`);
                return;
            }

            currentPlayer = (currentPlayer === "y") ? "r" : "y";
            break;

          }
        }
          console.log(gameBoard)
    })
})


$newGameScreenNewGameCpuPlayer.addEventListener("click", function() {
    $newGameScreen.classList.add("hidden")
    $gameScreen.classList.remove("hidden")
})

// jetons rouge et jaune

function updateBoardDisplay(board) {
    const cells = document.querySelectorAll(".game-cell");
    cells.forEach(cell => {
        const row = parseInt(cell.getAttribute("data-y"));
        const col = parseInt(cell.getAttribute("data-x"));
        const value = board[row][col];
        
        if (value === "y") {
            cell.innerHTML = '<img src="path/to/counter-yellow-large.svg" width="70" height="75"/>';
        } else if (value === "r") {
            cell.innerHTML = '<img src="path/to/counter-red-large.svg" width="70" height="75"/>';
        } else {
            cell.innerHTML = '';
        }
    });
}



// checkwin

function checkWin(board, player) {

    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (
                board[row][col] === player &&
                board[row][col + 1] === player &&
                board[row][col + 2] === player &&
                board[row][col + 3] === player
            ) {
                return true;
            }
        }
    }

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 7; col++) {
            if (
                board[row][col] === player &&
                board[row + 1][col] === player &&
                board[row + 2][col] === player &&
                board[row + 3][col] === player
            ) {
                return true;
            }
        }
    }

    for (let row = 3; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (
                board[row][col] === player &&
                board[row - 1][col + 1] === player &&
                board[row - 2][col + 2] === player &&
                board[row - 3][col + 3] === player
            ) {
                return true;
            }
        }
    }

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            if (
                board[row][col] === player &&
                board[row + 1][col + 1] === player &&
                board[row + 2][col + 2] === player &&
                board[row + 3][col + 3] === player
            ) {
                return true;
            }
        }
    }

    return false;

}

