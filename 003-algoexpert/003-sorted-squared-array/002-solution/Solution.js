/**
 * Sorted Squared Array
 * https://www.algoexpert.io/questions/sorted-squared-array
 * 
 * Approach: Two Pointers
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  sortedSquaredArray(array) {
    const n = array.length;
    const sortedSquares = new Array(n).fill(undefined);
    let si = 0, ei = n - 1;

    for (let i = n - 1; i >= 0; i--) {
      let siv = array[si], eiv = array[ei];

      if (si === ei) {
        sortedSquares[i] = siv ** 2; // or, eiv ** 2
        break;
      }

      if (Math.abs(siv) > Math.abs(eiv)) {
        sortedSquares[i] = siv ** 2;
        si++;
      } else { // (Math.abs(siv) <= Math.abs(eiv))
        sortedSquares[i] = eiv ** 2;
        ei--;
      }
    }

    return sortedSquares;
  }
}

export default Solution;
