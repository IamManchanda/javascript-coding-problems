/**
 * Set Matrix Zeroes
 * https://leetcode.com/problems/set-matrix-zeroes/
 * 
 * Approach: Optimized
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 */

class Solution {
  setZeroes(matrix) {
    const n = matrix.length, m = matrix[0].length;
    let col0 = 1;

    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= m - 1; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0;

          if (j === 0) {
            col0 = 0;
          } else {
            matrix[0][j] = 0;
          }
        }
      }
    }

    for (let i = 1; i <= n - 1; i++) {
      for (let j = 1; j <= m - 1; j++) {
        if (matrix[i][j] !== 0) {
          if (matrix[i][0] === 0 || matrix[0][j] === 0) {
            matrix[i][j] = 0;
          }
        }
      }
    }

    if (matrix[0][0] === 0) {
      for (let j = 0; j <= m - 1; j++) {
        matrix[0][j] = 0;
      }
    }
    
    if (col0 === 0) {
      for (let i = 0; i <= n - 1; i++) {
        matrix[i][0] = 0;
      }
    }

    return matrix;
  }
}

export default Solution;
