/**
 * Zero Sum Subarray
 * https://www.algoexpert.io/questions/zero-sum-subarray
 * 
 * Approach: Hash Table (using Set)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Solution {
  zeroSumSubarray(nums) {
    const sums = new Set();

    let currSum = 0;
    sums.add(currSum);

    for (const currNum of nums) {
      currSum += currNum;

      if (sums.has(currSum)) {
        return true; // found a zero sum subarray
      }

      sums.add(currSum);
    }

    return false; // no zero sum subarray found
  }
}

export default Solution;
