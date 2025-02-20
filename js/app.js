const $gameScreenGridCells = document.querySelectorAll(".game-cell");

// tableau multidimensionnel / gameboard
let currentPlayer = "y";
let gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]
];

console.log(gameBoard);

$gameScreenGridCells.forEach(function($gameScreenGridCell) {
    $gameScreenGridCell.innerHTML = "";
});

$gameScreenGridCells.forEach(function($gameScreenGridCell) {
    $gameScreenGridCell.addEventListener("click", function() {
        const dataX = $gameScreenGridCell.getAttribute("data-x");

        for (let i = 5; i >= 0; i--) {
            if (gameBoard[i][dataX] === "") {
                gameBoard[i][dataX] = currentPlayer;
                updateBoardDisplay(gameBoard); 
                // Met à jour l'affichage des jetons

                if (checkWin(gameBoard, currentPlayer)) {
                    alert(`Le joueur ${currentPlayer} a gagné !`);
                    return;
                }

                currentPlayer = (currentPlayer === "y") ? "r" : "y";
                break;
            }
        }
        console.log(gameBoard);
    });
});


// Jetons rouge et jaune
function updateBoardDisplay(board) {
    const cells = document.querySelectorAll(".game-cell");
    cells.forEach(cell => {
        const row = parseInt(cell.getAttribute("data-y"));
        const col = parseInt(cell.getAttribute("data-x"));
        const value = board[row][col];

        if (value === "y") {
            cell.innerHTML = `
                <svg width="70px" height="75px" viewBox="0 0 70 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>counter-yellow-large</title>
                    <defs>
                        <circle id="path-1" cx="35" cy="35" r="32"></circle>
                        <filter x="-3.9%" y="-3.9%" width="107.8%" height="107.8%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
                            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="counter-yellow-large">
                            <circle id="Oval-Copy-35" fill="#000000" cx="35" cy="35" r="35"></circle>
                            <circle id="Oval-Copy-36" fill="#000000" cx="35" cy="40" r="35"></circle>
                            <g id="Oval-Copy-35">
                                <use fill="#FFCE67" fill-rule="evenodd" xlink:href="#path-1"></use>
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                            </g>
                        </g>
                    </g>
                </svg>`;
        } else if (value === "r") {
            cell.innerHTML = `
                <svg width="70px" height="75px" viewBox="0 0 70 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>counter-red-large</title>
                    <defs>
                        <circle id="path-1" cx="35" cy="35" r="32"></circle>
                        <filter x="-3.9%" y="-3.9%" width="107.8%" height="107.8%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
                            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="counter-red-large">
                            <circle id="Oval-Copy-41" fill="#000000" cx="35" cy="35" r="35"></circle>
                            <circle id="Oval-Copy-42" fill="#000000" cx="35" cy="40" r="35"></circle>
                            <g id="Oval-Copy-43">
                                <use fill="#FD6687" fill-rule="evenodd" xlink:href="#path-1"></use>
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                            </g>
                        </g>
                    </g>
                </svg>`;
        } else {
            cell.innerHTML = '';
        }
    });
}

// Check win
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
        for (let col = 7; col >= 0; col--) {
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


// cacher les section (fait a l'aide de copilot)

const mainMenu = document.querySelector(".main-menu");
const gameboard = document.querySelector(".gameboard");
const rulesScreen = document.querySelector(".rules");
const playerVsPlayerButton = document.querySelector(".select-player-vs-player-button");
const gamesRulesButton = document.querySelector(".select-games-rules-button");
const checkRulesCtaButtons = document.querySelectorAll(".check-rules-cta");

// Vérification que les éléments existent
if (playerVsPlayerButton && gamesRulesButton && mainMenu && gameboard && rulesScreen && checkRulesCtaButtons) {
    playerVsPlayerButton.addEventListener("click", function () {
        console.log("Player vs Player button clicked");
        mainMenu.classList.add("hidden");
        gameboard.classList.remove("hidden");
        rulesScreen.classList.add("hidden");
    });

    gamesRulesButton.addEventListener("click", function () {
        console.log("Games Rules button clicked");
        mainMenu.classList.add("hidden");
        gameboard.classList.add("hidden");
        rulesScreen.classList.remove("hidden");
    });

    checkRulesCtaButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Check Rules CTA button clicked");
            gameboard.classList.add("hidden");
            rulesScreen.classList.add("hidden");
            mainMenu.classList.remove("hidden");
        });
    });
} else {
    console.log("One or more elements not found");
}
