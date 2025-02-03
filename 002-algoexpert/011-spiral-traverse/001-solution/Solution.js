/**
 * Spiral Traverse
 * https://www.algoexpert.io/questions/spiral-traverse
 * 
 * Approach: Iterative Traversal
 * Time complexity: O(n * m)
 * Space complexity: O(n * m)
 * where, n is the number of rows 
 * and, m is the number of columns
 */

class Solution {
  spiralTraverse(array) {
    const ni = array.length;
    if (ni === 0) return [];

    const nj = array[0].length;
    if (nj === 0) return [];

    const result = [];
    let si = 0, ei = ni - 1, sj = 0, ej = nj - 1;

    while (si <= ei && sj <= ej) {
      for (let j = sj; j <= ej; j++) {
        result.push(array[si][j]);
      }

      for (let i = si + 1; i <= ei; i++) {
        result.push(array[i][ej]);
      }

      for (let j = ej - 1; j >= sj; j--) {
        if (si === ei) break;
        result.push(array[ei][j]);
      }

      for (let i = ei - 1; i >= si + 1; i--) {
        if (sj === ej) break;
        result.push(array[i][sj]);
      }

      si++; ei--; sj++; ej--; // shrink boundaries
    }

    return result;
  }
}

export default Solution;
