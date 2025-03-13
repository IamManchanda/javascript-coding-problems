/**
 * Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * 
 * Approach: Brute Force (+ Combination formula)
 * Time complexity: O(n^2 * r)
 * Space complexity: O(1), excluding the result
 */

class Solution {
  generate(numRows) {
    const result = [];

    for (let i = 0; i <= numRows - 1; i++) {
      const row = [];

      for (let j = 0; j <= i; j++) {
        row.push(this.nCr(i, j));
      }

      result.push(row);
    }

    return result;
  }

  nCr(n, r) {
    let computed = 1;

    if (r === 0) return computed;
    
    for (let i = 0; i <= r - 1; i++) {
      computed *= (n - i);
      computed /= (i + 1);
    }
    
    return computed;
  }
}

export default Solution;
