/**
 * Two Number Sum
 * https://www.algoexpert.io/questions/two-number-sum
 * 
 * Approach: Hash Table (using an object)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Solution {
  twoNumberSum(array, targetSum) {
    const nums = {};

    for (const num of array) {
      const complement = targetSum - num;

      if (nums[complement]) {
        return [complement, num];
      }

      nums[num] = true;
    }

    return [];
  }
}

export default Solution;
