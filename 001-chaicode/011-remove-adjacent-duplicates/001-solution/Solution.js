import { validateInput } from "../helpers/validateInput";

/**
 * Remove all adjacent duplicates from a string
 * Approach: Iteration
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 * where, n is the length of the string
 */

class Solution {
  removeAdjDup(str) {
    validateInput(str);

    let result = '';

    for (let i = 0; i < str.length; i++) {
      if (i === str.length - 1 || str[i] !== str[i + 1]) {
        result += str[i];
      }
    }

    return result;
  }
}

export default Solution;