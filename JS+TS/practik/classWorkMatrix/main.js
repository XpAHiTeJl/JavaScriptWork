// const matrix1 = [
//   [2, 3, 4],

//   [13, 12, 10],

//   [11, 6, 7],
// ];

// const matrix2 = [
//   [12, 11, 14],

//   [8, 22, 14],

//   [6, 8, 7],
// ];

// function solveMatrix(a, b) {
//   const solvedMatrix = [];

//   for (let i = 0; i < a.length; i++) {
//     const row1 = a[i];
//     const row2 = b[i];
//     const newRow = [];

//     console.log(a[i], "и", b[i]);

//     for (let j = 0; j < row1.length; j++) {
//       const sum = row1[j] + row2[j];

//       newRow.push(sum);
//     }
//     solvedMatrix.push(newRow);
//   }
//   console.log("[solvedMatrix]", solvedMatrix);
// }

// solveMatrix(matrix1, matrix2);
// const portal = document.querySelector("Loading");

// const getTimeout = (interval) => {
//   for (let i = 0; i < 4; i++) {
//     setTimeout(() => {
//       portal.innerHTML = " Loading" + ".".repeat(i);
//     }, interval);
//   }
// };
// const count = 5;
// const interval = 0;

// for (let i = 0; i < count; i++) {
//   interval = +500;
//   getTimeout(interval);
// }
// Create a spinner object

let isAwait = true;

const clsBtn = document.querySelector(".loader");
const cont = document.querySelector(".content");

new Promise((res, rej) => {
  setTimeout(() => {
    isAwait = true;
    clsBtn.style.display = "none";
    res(isAwait);
  }, 3000);
}).then((val) => {
  if (val) cont.style.display = "flex";
});
