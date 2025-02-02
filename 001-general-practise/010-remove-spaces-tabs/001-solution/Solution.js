import { validateInput } from "../helpers/validateInput";

/**
 * Remove all spaces and tabs from a string
 * Approach: Iteration
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 * where, n is the length of the string
 */

class Solution {
  removeSpacesTabs(str) {
    validateInput(str);

    let result = '';

    for (const char of str) {
      if (char !== ' ' && char !== '\t') {
        result += char;
      }
    }

    return result;
  }
}

export default Solution;
