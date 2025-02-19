/**
 * Longest Subarray with Sum
 * https://www.algoexpert.io/questions/longest-subarray-with-sum
 * 
 * Approach: Sliding Window
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  longestSubarrayWithSum(array, targetSum) {
    const n = array.length
    let result = [], l = 0, r = 0, currSum = 0;

    while (r <= n - 1) {
      currSum += array[r];

      while (l < r && currSum > targetSum) {
        currSum -= array[l];
        l++;
      }

      if (currSum === targetSum) {
        if (result.length === 0 || result[1] - result[0] < r - l) {
          result = [l, r];
        }
      }

      r++;
    }

    return result;
  }
}

export default Solution;
