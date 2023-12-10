// import "./style.css";
// const boardElement = document.getElementById("board");
// const sahmatDownElement = document.getElementById("sahmatdown");
// const sahmatupElement = document.getElementById("sahmatup");
// const bukviPoleElement = document.getElementById("polebukvi");
// const numberssboku = document.querySelector(".numberssboku");

// const clsBtn = document.querySelector(".loader");
// const buttongame = document.querySelector(".buttongame");

// let selectedPiece = false;

// // Доска
// for (let row = 0; row < 8; row++) {
//   for (let col = 0; col < 8; col++) {
//     const cell = document.createElement("div");
//     const isWhite = (row + col) % 2 === 0;
//     cell.className = isWhite ? "white" : "black";

//     cell.addEventListener("dragover", (e) => {
//       e.preventDefault();
//     });

//     cell.addEventListener("drop", (e) => {
//       e.preventDefault();
//       if (selectedPiece) {
//         const targetCell = e.target;
//         while (targetCell.firstChild) {
//           targetCell.removeChild(targetCell.firstChild);
//         }
//         targetCell.appendChild(selectedPiece);
//       }
//     });

//     boardElement.appendChild(cell);
//   }
// }
// // Буквы
// for (let col = 0; col < 8; col++) {
//   const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
//   const letterCell = document.createElement("div");
//   letterCell.className = col % 2 === 0;
//   letterCell.innerHTML = `<span>${letters[col]}</span>`;
//   bukviPoleElement.appendChild(letterCell);
// }
// // Цифры
// for (let col = 0; col < 8; col++) {
//   const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
//   const letterCell = document.createElement("div");
//   letterCell.className = col % 2 === 0;
//   letterCell.innerHTML = `<span>${numbers[col]}</span>`;
//   numberssboku.appendChild(letterCell);
// }

// // Кнопка для старта
// buttongame.addEventListener("click", () => {
//   clsBtn.style.display = "block";

//   setTimeout(() => {
//     clsBtn.style.display = "none";
//   }, 7000);

//   setTimeout(
//     function () {
//       for (var i = 0; i < 8; i++) {
//         peshki(i);
//       }
//     },
//     6000,
//     setTimeout(
//       function () {
//         for (var i = 0; i < 2; i++) {
//           Slon(i);
//         }
//       },
//       5000,
//       setTimeout(
//         function () {
//           for (var i = 0; i < 2; i++) {
//             kon(i);
//           }
//         },
//         4000,
//         setTimeout(
//           function () {
//             for (var i = 0; i < 2; i++) {
//               ladiya(i);
//             }
//           },
//           3000,
//           setTimeout(
//             function () {
//               for (var i = 0; i < 1; i++) {
//                 queen(i);
//               }
//             },
//             2000,
//             setTimeout(function () {
//               for (var i = 0; i < 1; i++) {
//                 king(i);
//               }
//             }, 1000)
//           )
//         )
//       )
//     )
//   );
// });
// // Фигуры
// function king() {
//   sahmatupElement.appendChild(createPiece("black", "♔"));
//   sahmatDownElement.appendChild(createPiece("white", "♔"));
// }
// function queen() {
//   sahmatupElement.appendChild(createPiece("black", "♛"));
//   sahmatDownElement.appendChild(createPiece("white", "♛"));
// }
// function ladiya() {
//   sahmatupElement.appendChild(createPiece("black", "♜"));
//   sahmatDownElement.appendChild(createPiece("white", "♜"));
// }
// function kon() {
//   sahmatupElement.appendChild(createPiece("black", "♞"));
//   sahmatDownElement.appendChild(createPiece("white", "♞"));
// }
// function Slon() {
//   sahmatupElement.appendChild(createPiece("black", "♝"));
//   sahmatDownElement.appendChild(createPiece("white", "♝"));
// }
// function peshki() {
//   sahmatDownElement.appendChild(createPiece("white", "♟"));
//   sahmatupElement.appendChild(createPiece("black", "♟"));
// }
// // Создание фигур
// function createPiece(color, type) {
//   const piece = document.createElement("div");
//   piece.className = `piece ${color}`;
//   piece.textContent = type;
//   piece.draggable = true;

//   piece.addEventListener("dragstart", (e) => {
//     selectedPiece = e.target;
//   });

//   piece.addEventListener("dragend", () => {
//     selectedPiece = null;
//   });

//   return piece;
// }

function showTooltip() {
  // Получаем элемент изображения
  const image = document.querySelector("img");

  // Получаем текст всплывающей подсказки
  const text =
    "Великая волна у берегов Канагавы - гравюра японского художника Кацусики Хокусая. Она считается одной из самых известных гравюр в мире.";

  // Создаем всплывающую подсказку
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerHTML = text;

  // Отключаем обработчик события onclick для изображения
  image.onclick = null;

  // Добавляем всплывающую подсказку к изображению
  image.appendChild(tooltip);

  // Отцентрируем всплывающую подсказку
  tooltip.style.top = image.offsetHeight / 2 - tooltip.offsetHeight / 2 + "px";
  tooltip.style.left = image.offsetWidth / 2 - tooltip.offsetWidth / 2 + "px";
}

// Привязываем обработчик события к изображению
document.querySelector("img").addEventListener("mouseover", showTooltip);
