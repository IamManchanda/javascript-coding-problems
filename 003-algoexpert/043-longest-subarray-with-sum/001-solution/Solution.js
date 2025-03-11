/**
 * Longest Subarray with Sum
 * https://www.algoexpert.io/questions/longest-subarray-with-sum
 * 
 * Approach: Brute Force
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

class Solution {
  longestSubarrayWithSum(array, targetSum) {
    const n = array.length;
    let result = [];

    for (let i = 0; i <= n - 1; i++) {
      let currSum = 0;

      for (let j = i; j <= n - 1; j++) {
        currSum += array[j];

        if (currSum === targetSum) {
          if (result.length === 0 || result[1] - result[0] < j - i) {
            result = [i, j];
          }
        }
      }
    }

    return result;
  }
}

export default Solution;
