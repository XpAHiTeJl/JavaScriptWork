import "./style.css";
const chessboardElement = document.getElementById("chessboard");
const sahmatDownElement = document.getElementById("sahmatdown");
const sahmatupElement = document.getElementById("sahmatup");
const bukviPoleElement = document.getElementById("polebukvi");
const numberssboku = document.querySelector(".numberssboku");
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

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
for (let col = 0; col < 8; col++) {
  const letterCell = document.createElement("div");
  letterCell.className = col % 2 === 0;
  letterCell.innerHTML = `<span>${numbers[col]}</span>`;
  numberssboku.appendChild(letterCell);
}

// тут добавлять в нижний отсек шахматы
const king = createPiece("white", "♔");
sahmatDownElement.appendChild(king);
const queen = createPiece("white", "♛");
sahmatDownElement.appendChild(queen);

// тут добавлять в верхний отсек шахматы

const king1 = createPiece("black", "♔");
sahmatupElement.appendChild(king1);
const queen1 = createPiece("black", "♛");
sahmatupElement.appendChild(queen1);

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
