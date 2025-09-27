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

function createBoard() {
  const board = document.getElementById("board");
  for (let i = 0; i < boardSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = i + 1;
    board.appendChild(cell);
  }
}

function movePlayer() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.classList.remove("active"));
  cells[position].classList.add("active");
}

window.onload = createBoard;