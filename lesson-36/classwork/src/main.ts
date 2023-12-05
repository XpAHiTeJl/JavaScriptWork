import "./style.css";
const chessboardElement = document.getElementById("chessboard");
const sahmatElement = document.getElementById("sahmat");
const bukviPoleElement = document.getElementById("polebukvi");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
let selectedPiece = null;

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const cell = document.createElement("div");
    const isWhite = (row + col) % 2 === 0;
    cell.className = isWhite ? "white" : "black";

    cell.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    cell.addEventListener("drop", (e) => {
      e.preventDefault();
      if (selectedPiece) {
        const targetCell = e.target;
        targetCell.appendChild(selectedPiece);
      }
    });

    chessboardElement.appendChild(cell);
  }
}

for (let col = 0; col < 8; col++) {
  const letterCell = document.createElement("div");
  letterCell.className = col % 2 === 0;
  letterCell.innerHTML = `<span>${letters[col]}</span>`;
  bukviPoleElement.appendChild(letterCell);
}

// Place a king piece on the board
const king = createPiece("white", "♔");
sahmatElement.appendChild(king);

function createPiece(color, type) {
  const piece = document.createElement("div");
  piece.className = `piece ${color}`;
  piece.textContent = type;
  piece.draggable = true;

  piece.addEventListener("dragstart", (e) => {
    selectedPiece = e.target;
  });

  piece.addEventListener("dragend", () => {
    selectedPiece = null;
  });

  return piece;
}
