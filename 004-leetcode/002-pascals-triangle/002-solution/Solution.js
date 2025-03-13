/**
 * Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * 
 * Approach: Optimal (+ Combination formula)
 * Time complexity: O(n^2)
 * Space complexity: O(1), excluding the result
 */

class Solution {
  generate(numRows) {
    const result = [];

    for (let r = 0; r <= numRows - 1; r++) {
      result.push(this.generateRow(r));
    }

    return result;
  }

  generateRow(r) {
    let computed = 1, row = [1];

    if (r === 0) return row;

    for (let i = 0; i <= r - 1; i++) {
      computed *= (r - i);
      computed /= (i + 1);
      row.push(computed);
    }

    return row;
  }
}

export default Solution;
