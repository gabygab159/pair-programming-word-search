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

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    console.log(verticalJoin)
    
    for (let l of horizontalJoin) {
      if (l.includes(word)) {
        return true
      } 
      console.log(l)
    }
    for(let j of verticalJoin) {
      if (j.includes(word)) {
        return true
      }
    }   
  return false
}


module.exports = wordSearch