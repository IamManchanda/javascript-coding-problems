/**
 * Set Matrix Zeroes
 * https://leetcode.com/problems/set-matrix-zeroes/
 *
 * Approach: Hash Table (using two sets)
 * Time Complexity: O(n * m)
 * Space Complexity: O(n + m)
 */

class Solution {
  setZeroes(matrix) {
    const n = matrix.length, m = matrix[0].length;
    const zi = new Set(), zj = new Set();

    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= m - 1; j++) {
        if (matrix[i][j] === 0) {
          zi.add(i);
          zj.add(j);
        }
      }
    }

    zi.forEach(i => {
      for (let j = 0; j <= m - 1; j++) {
        matrix[i][j] = 0;
      }
    });

    zj.forEach(j => {
      for (let i = 0; i <= n - 1; i++) {
        matrix[i][j] = 0;
      }
    });

    return matrix;
  }
}

export default Solution;
