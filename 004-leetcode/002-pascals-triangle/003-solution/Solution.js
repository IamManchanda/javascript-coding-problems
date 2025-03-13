/**
 * Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * 
 * Approach: Backtracking (Optimized)
 * Time complexity: O(n^2)
 * Space complexity: O(1), excluding the result
 */

class Solution {
  generate(numRows) {
    const result = [];

    for (let i = 0; i <= numRows - 1; i++) {
      const n = i + 1, row = new Array(n).fill(1);

      if (n > 2) {
        for (let j = 1; j <= n - 2; j++) {
          row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
      }

      result.push(row);
    }

    return result;
  }
}

export default Solution;
