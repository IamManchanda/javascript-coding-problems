/**
 * Set Matrix Zeroes
 * https://leetcode.com/problems/set-matrix-zeroes/
 * 
 * Approach: Hash Table (using row and col arrays)
 * Time Complexity: O(n * m)
 * Space Complexity: O(n + m)
 */

class Solution {
  setZeroes(matrix) {
    const n = matrix.length, m = matrix[0].length;
    const row = new Array(n).fill(false); // row array
    const col = new Array(m).fill(false); // col array

    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= m - 1; j++) {
        if (matrix[i][j] === 0) {
          row[i] = true;
          col[j] = true;
        }
      }
    }

    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= m - 1; j++) {
        if (row[i] || col[j]) {
          matrix[i][j] = 0;
        }
      }
    }

    return matrix;
  }
}

export default Solution;
