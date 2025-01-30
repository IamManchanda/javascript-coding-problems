import { validateInput } from "../helpers/validateInput";

/**
 * Merge Strings Alternately
 * https://leetcode.com/problems/merge-strings-alternately/
 * 
 * Approach: Iterative (using two pointers and while loop)
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  mergeAlternately(word1, word2) {
    validateInput(word1, word2);

    let result = "";
    let i = 0, j = 0;

    while (i < word1.length || j < word2.length) {
      if (i < word1.length) {
        result += word1[i];
        i++;
      }

      if (j < word2.length) {
        result += word2[j];
        j++;
      }
    }

    return result;
  }
}

export default Solution;