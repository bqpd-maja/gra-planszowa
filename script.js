let position = 0;
const boardSize = 36;

function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  alert("🎲 Du hast " + dice + " gewürfelt!");
  position += dice;
  if (position >= boardSize - 1) {
    position = boardSize - 1;
    alert("🎉 Gewonnen!");
  }
  movePlayer();
}

function createBoard(){
  $board().innerHTML = "";

  // Erstes Feld = START
  const startCell = document.createElement("div");
  startCell.className = "cell start";
  startCell.textContent = "START";
  $board().appendChild(startCell);

  // Zahlenfelder 1 bis boardSize-2
  for (let i=1; i<boardSize-1; i++){
    const d = document.createElement("div");
    d.className = "cell";
    d.textContent = i;   // echte Zahl
    $board().appendChild(d);
  }

  // Letztes Feld = META
  const finishCell = document.createElement("div");
  finishCell.className = "cell finish";
  finishCell.textContent = "META";
  $board().appendChild(finishCell);
}

function movePlayer() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.classList.remove("active"));
  cells[position].classList.add("active");
}

window.onload = createBoard;
