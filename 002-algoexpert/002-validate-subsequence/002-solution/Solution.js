/**
 * Validate Subsequence
 * https://www.algoexpert.io/questions/validate-subsequence
 * 
 * Approach: Iterative
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  isValidSubsequence(array, sequence) {
    let seqIdx = 0;

    for (const value of array) {
      if (seqIdx === sequence.length) {
        break;
      }

      if (sequence[seqIdx] === value) {
        seqIdx++;
      }
    }

    return seqIdx === sequence.length;
  }
}

export default Solution;
