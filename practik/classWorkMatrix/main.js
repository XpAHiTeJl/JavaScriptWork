const matrix1 = [
  [2, 3, 4],

  [13, 12, 10],

  [11, 6, 7],
];

const matrix2 = [
  [12, 11, 14],

  [8, 22, 14],

  [6, 8, 7],
];

function solveMatrix(a, b) {
  const solvedMatrix = [];

  for (let i = 0; i < a.length; i++) {
    const row1 = a[i];
    const row2 = b[i];
    const newRow = [];

    console.log(a[i], "и", b[i]);

    for (let j = 0; j < row1.length; j++) {
      const sum = row1[j] + row2[j];

      newRow.push(sum);
    }
    solvedMatrix.push(newRow);
  }
  console.log("[solvedMatrix]", solvedMatrix);
}

solveMatrix(matrix1, matrix2);
