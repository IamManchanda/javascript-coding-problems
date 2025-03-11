/**
 * Set Matrix Zeroes
 * https://leetcode.com/problems/set-matrix-zeroes/
 * 
 * Approach: Brute Force
 * Time Complexity: O((n * m) * (n + m))
 * Space Complexity: O(1)
 */

class Solution {
  setZeroes(matrix) {
    const n = matrix.length, m = matrix[0].length;

    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= m - 1; j++) {
        if (matrix[i][j] === 0) {
          this.markRow(matrix, m, i);
          this.markCol(matrix, n, j);
        }
      }
    }

    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= m - 1; j++) {
        if (matrix[i][j] === -1) {
          matrix[i][j] = 0;
        }
      }
    }

    return matrix;
  }

  markRow(matrix, m, i) {
    for (let j = 0; j <= m - 1; j++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  }

  markCol(matrix, n, j) {
    for (let i = 0; i <= n - 1; i++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  }
}

export default Solution;
