/**
 * Sorted Squared Array
 * https://www.algoexpert.io/questions/sorted-squared-array
 * 
 * Approach: Sorting
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 */

class Solution {
  sortedSquaredArray(array) {
    const n = array.length;
    const sortedSquares = new Array(n).fill(undefined);

    for (let i = 0; i <= n - 1; i++) {
      sortedSquares[i] = array[i] ** 2;
    }

    sortedSquares.sort((a, b) => a - b);

    return sortedSquares;
  }
}

export default Solution;
