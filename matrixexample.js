const transpose = function(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i ++){
    let newArr = matrix[i]

        for (let j = 0; j < newArr.length; j ++){
          let newArrJ = newArr[j];
          if (!newMatrix[j]){
            newMatrix[j] = [];
          }
          newMatrix[j][i] = newArrJ
        }
  }
return newMatrix
};

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));
