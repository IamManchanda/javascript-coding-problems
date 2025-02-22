/**
 * Kadane's Algorithm
 * https://www.algoexpert.io/questions/kadane's-algorithm
 * 
 * Approach: Optimized
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  kadanesAlgorithm(array) {
    let maxSumAtIdx = array[0], maxSumSoFar = array[0];

    for (const num of array.slice(1)) {
      maxSumAtIdx = Math.max(num, maxSumAtIdx + num);
      maxSumSoFar = Math.max(maxSumSoFar, maxSumAtIdx);
    }

    return maxSumSoFar;
  }
}

export default Solution;
