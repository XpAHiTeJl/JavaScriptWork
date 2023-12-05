import "./style.css";
const boardElement = document.getElementById("board");
const sahmatDownElement = document.getElementById("sahmatdown");
const sahmatupElement = document.getElementById("sahmatup");
const bukviPoleElement = document.getElementById("polebukvi");
const numberssboku = document.querySelector(".numberssboku");
let selectedPiece = null;

// Доска
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

    boardElement.appendChild(cell);
  }
}
// Буквы
for (let col = 0; col < 8; col++) {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const letterCell = document.createElement("div");
  letterCell.className = col % 2 === 0;
  letterCell.innerHTML = `<span>${letters[col]}</span>`;
  bukviPoleElement.appendChild(letterCell);
}
// Цифры
for (let col = 0; col < 8; col++) {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const letterCell = document.createElement("div");
  letterCell.className = col % 2 === 0;
  letterCell.innerHTML = `<span>${numbers[col]}</span>`;
  numberssboku.appendChild(letterCell);
}
// Функция для создания фигур
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

// тут добавлять в верхний отсек шахматы
const kingUp = createPiece("black", "♔");
sahmatupElement.appendChild(kingUp);
const queenUp = createPiece("black", "♛");
sahmatupElement.appendChild(queenUp);
const ladiyaUp1 = createPiece("black", "♜");
sahmatupElement.appendChild(ladiyaUp1);
const ladiyaUp2 = createPiece("black", "♜");
sahmatupElement.appendChild(ladiyaUp2);
const konUp1 = createPiece("black", "♞");
sahmatupElement.appendChild(konUp1);
const konUp2 = createPiece("black", "♞");
sahmatupElement.appendChild(konUp2);
const slonUp1 = createPiece("black", "♝");
sahmatupElement.appendChild(slonUp1);
const slonUp2 = createPiece("black", "♝");
sahmatupElement.appendChild(slonUp2);

const peshkaUp1 = createPiece("black", "♟");
sahmatupElement.appendChild(peshkaUp1);
const peshkaUp2 = createPiece("black", "♟");
sahmatupElement.appendChild(peshkaUp2);
const peshkaUp3 = createPiece("black", "♟");
sahmatupElement.appendChild(peshkaUp3);
const peshkaUp4 = createPiece("black", "♟");
sahmatupElement.appendChild(peshkaUp4);
const peshkaUp5 = createPiece("black", "♟");
sahmatupElement.appendChild(peshkaUp5);
const peshkaUp6 = createPiece("black", "♟");
sahmatupElement.appendChild(peshkaUp6);
const peshkaUp7 = createPiece("black", "♟");
sahmatupElement.appendChild(peshkaUp7);
const peshkaUp8 = createPiece("black", "♟");
sahmatupElement.appendChild(peshkaUp8);

// тут добавлять в нижний отсек шахматы
const kingDown = createPiece("white", "♔");
sahmatDownElement.appendChild(kingDown);
const queenDown = createPiece("white", "♛");
sahmatDownElement.appendChild(queenDown);
const ladiyaDown1 = createPiece("white", "♜");
sahmatDownElement.appendChild(ladiyaDown1);
const ladiyaDown2 = createPiece("white", "♜");
sahmatDownElement.appendChild(ladiyaDown2);
const konDown1 = createPiece("white", "♞");
sahmatDownElement.appendChild(konDown1);
const konDown2 = createPiece("white", "♞");
sahmatDownElement.appendChild(konDown2);
const slonDown1 = createPiece("white", "♝");
sahmatDownElement.appendChild(slonDown1);
const slonDown2 = createPiece("white", "♝");
sahmatDownElement.appendChild(slonDown2);
//
const peshkaDown1 = createPiece("white", "♟");
sahmatDownElement.appendChild(peshkaDown1);
const peshkaDown2 = createPiece("white", "♟");
sahmatDownElement.appendChild(peshkaDown2);
const peshkaDown3 = createPiece("white", "♟");
sahmatDownElement.appendChild(peshkaDown3);
const peshkaDown4 = createPiece("white", "♟");
sahmatDownElement.appendChild(peshkaDown4);
const peshkaDown5 = createPiece("white", "♟");
sahmatDownElement.appendChild(peshkaDown5);
const peshkaDown6 = createPiece("white", "♟");
sahmatDownElement.appendChild(peshkaDown6);
const peshkaDown7 = createPiece("white", "♟");
sahmatDownElement.appendChild(peshkaDown7);
const peshkaDown8 = createPiece("white", "♟");
sahmatDownElement.appendChild(peshkaDown8);
