/**
 * First Duplicate Value
 * https://www.algoexpert.io/questions/first-duplicate-value
 * 
 * Approach: Absolute Value + Negation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class Solution {
  firstDuplicateValue(array) {
    for (const value of array) {
      const absValue = Math.abs(value), idx = absValue - 1;

      if (array[idx] < 0) { // check for negative
        return absValue; // first duplicate value found
      }

      array[idx] *= -1; // mark as seen (negative)
    }

    return -1;
  }
}

export default Solution;
