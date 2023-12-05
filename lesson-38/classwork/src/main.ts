import "./style.css";
const boardElement = document.getElementById("board");
const sahmatDownElement = document.getElementById("sahmatdown");
const sahmatupElement = document.getElementById("sahmatup");
const bukviPoleElement = document.getElementById("polebukvi");
const numberssboku = document.querySelector(".numberssboku");

const clsBtn = document.querySelector(".loader");
const buttongame = document.querySelector(".buttongame");

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
let isAwait = true;

buttongame?.addEventListener("click", () => {});

new Promise((res, rej) => {
  setTimeout(() => {
    isAwait = true;
    clsBtn.style.display = "none";
    res(isAwait);
  }, 7000);
}).then(() => {});

setTimeout(
  function () {
    for (var i = 0; i < 8; i++) {
      peshki(i);
    }
  },
  6000,
  setTimeout(
    function () {
      for (var i = 0; i < 2; i++) {
        Slon(i);
      }
    },
    5000,
    setTimeout(
      function () {
        for (var i = 0; i < 2; i++) {
          kon(i);
        }
      },
      4000,
      setTimeout(
        function () {
          for (var i = 0; i < 2; i++) {
            ladiya(i);
          }
        },
        3000,
        setTimeout(
          function () {
            for (var i = 0; i < 1; i++) {
              queen(i);
            }
          },
          2000,
          setTimeout(function () {
            for (var i = 0; i < 1; i++) {
              king(i);
            }
          }, 1000)
        )
      )
    )
  )
);

function king() {
  sahmatupElement.appendChild(createPiece("black", "♔"));
  sahmatDownElement.appendChild(createPiece("white", "♔"));
}
function queen() {
  sahmatupElement.appendChild(createPiece("black", "♛"));
  sahmatDownElement.appendChild(createPiece("white", "♛"));
}
function ladiya() {
  sahmatupElement.appendChild(createPiece("black", "♜"));
  sahmatDownElement.appendChild(createPiece("white", "♜"));
}
function kon() {
  sahmatupElement.appendChild(createPiece("black", "♞"));
  sahmatDownElement.appendChild(createPiece("white", "♞"));
}
function Slon() {
  sahmatupElement.appendChild(createPiece("black", "♝"));
  sahmatDownElement.appendChild(createPiece("white", "♝"));
}
function peshki() {
  sahmatDownElement.appendChild(createPiece("white", "♟"));
  sahmatupElement.appendChild(createPiece("black", "♟"));
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
