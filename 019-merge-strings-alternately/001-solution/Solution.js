import { validateInput } from "../helpers/validateInput";

/**
 * Merge Strings Alternately
 * https://leetcode.com/problems/merge-strings-alternately/
 * 
 * Approach: Iterative (using Math.max and for loop)
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  mergeAlternately(word1, word2) {
    validateInput(word1, word2);

    let result = "";
    let n = Math.max(word1.length, word2.length);

    for (let i = 0; i < n; i++) {
      if (i < word1.length) {
        result += word1[i];
      }

      if (i < word2.length) {
        result += word2[i];
      }
    }

    return result;
  }
}

export default Solution;