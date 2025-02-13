
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


//solution
// gameBoard = currentPlayer;
// break;

