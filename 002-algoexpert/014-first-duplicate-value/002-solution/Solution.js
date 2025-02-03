/**
 * First Duplicate Value
 * https://www.algoexpert.io/questions/first-duplicate-value
 * 
 * Approach: Hash Table (using Set)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Solution {
  firstDuplicateValue(array) {
    const seen = new Set();

    for (const value of array) {
      if (seen.has(value)) {
        return value;
      }

      seen.add(value);
    }

    return -1;
  }
}

export default Solution;
