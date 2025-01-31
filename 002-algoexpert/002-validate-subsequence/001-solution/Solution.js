/**
 * Validate Subsequence
 * https://www.algoexpert.io/questions/validate-subsequence
 * 
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class Solution {
  isValidSubsequence(array, sequence) {
    let arrIdx = 0, seqIdx = 0;

    while (arrIdx < array.length && seqIdx < sequence.length) {
      if (array[arrIdx] === sequence[seqIdx]) {
        seqIdx++;
      }

      arrIdx++;
    }

    return seqIdx === sequence.length;
  }
}

export default Solution;
