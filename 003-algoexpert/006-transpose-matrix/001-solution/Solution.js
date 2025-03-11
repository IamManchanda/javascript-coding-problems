/**
 * Transpose Matrix
 * https://www.algoexpert.io/questions/transpose-matrix
 * 
 * Approach: Swapping
 * Time complexity: O(n * m)
 * Space complexity: O(n * m)
 * where, n is the number of rows 
 * and, m is the number of columns
 */

class Solution {
  transposeMatrix(matrix) {
    let x = matrix.length, y = matrix[0].length;
    const transposedMatrix = this.fillMatrix(y, x);

    for (let j = 0; j <= y - 1; j++) {
      for (let i = 0; i <= x - 1; i++) {
          transposedMatrix[j][i] = matrix[i][j];
      }
    }

    return transposedMatrix;
  }

  fillMatrix(a, b, val = undefined) {
    return Array.from(
      { length: a },
      () => new Array(b).fill(val),
    );
  }
}

export default Solution;
