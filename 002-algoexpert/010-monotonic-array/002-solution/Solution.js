/**
 * Monotonic Array
 * https://www.algoexpert.io/questions/monotonic-array
 * 
 * Approach: One Pass
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class Solution {
  isMonotonic(array) {
    const n = array.length;

    if (n <= 2) {
      return true;
    }

    let isNonIncreasing = true, isNonDecreasing = true;

    for (let i = 1; i <= n - 1; i++) {
      if (array[i] > array[i - 1]) {
        isNonIncreasing = false; // increasing
      }

      if (array[i] < array[i - 1]) {
        isNonDecreasing = false; // decreasing
      }
    }

    return isNonIncreasing || isNonDecreasing;
  }
}

export default Solution;
