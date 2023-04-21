// Selectam elementele HTML
const scoreDisplay = document.getElementById("score");
const problemDisplay = document.getElementById("problem");
const playerInput = document.getElementById("result");

let gameScore = 0;
let a, b;
let gameLevel = 10;

function getRandomNb(level) {
    return Math.floor(Math.random() * level) + 1;
}

function newProblem(level) {
    a = getRandomNb(level);
    b = getRandomNb(level);

    problemDisplay.style.color = "black";

    return a + " + " + b;
}

function newGame(level) {
    // Setam valorile initiale
    gameScore = 0;
    gameLevel = level;
    newProblem(level);

    // Afisam in HTML
    scoreDisplay.textContent = gameScore;
    problemDisplay.textContent = newProblem(level);
}

// Verificarea rezultatului
function verifyResult() {
    const sumLength = (a + b).toString().length;

    if (playerInput.value == a + b) {
        gameScore++;

        scoreDisplay.textContent = gameScore;
        problemDisplay.textContent = newProblem(gameLevel);
        playerInput.value = "";
    }
    else if (playerInput.value.length == sumLength) {
        problemDisplay.style.color = "red";
    }
}

playerInput.addEventListener("input", verifyResult)

playerInput.addEventListener("keydown", function(event) {
    if (event.keyCode == 38 || event.keyCode == 40) {
        event.preventDefault();
    }
});
newGame(gameLevel);