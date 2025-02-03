/**
 * Spiral Traverse
 * https://www.algoexpert.io/questions/spiral-traverse
 * 
 * Approach: Recursive Traversal
 * Time complexity: O(n * m)
 * Space complexity: O(n * m)
 */

class Solution {
  spiralTraverse(array) {
    const ni = array.length;
    if (ni === 0) return [];

    const nj = array[0].length;
    if (nj === 0) return [];

    const result = [];
    this.spiralFill(array, 0, ni - 1, 0, nj - 1, result);
    return result;
  }

  spiralFill(array, si, ei, sj, ej, result) {
    if (si > ei || sj > ej) return;

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

    // shrink boundaries recursively
    this.spiralFill(array, si + 1, ei - 1, sj + 1, ej - 1, result);
  }
}

export default Solution;
