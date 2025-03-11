/**
 * Two Number Sum
 * https://www.algoexpert.io/questions/two-number-sum
 * 
 * Approach: Hash Table (using a Set)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Solution {
  twoNumberSum(array, targetSum) {
    const nums = new Set();

    for (const num of array) {
      const complement = targetSum - num;

      if (nums.has(complement)) {
        return [complement, num];
      }

      nums.add(num);
    }

    return [];
  }
}

export default Solution;
