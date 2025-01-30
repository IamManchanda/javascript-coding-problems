import { validateInput } from "../helpers/validateInput";

/**
 * Get the length of a string
 * (without using the built-in `length` property)
 * Approach: Recursion
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  getLength(str) {
    validateInput(str);

    if (str === '') {
      return 0;
    }

    return 1 + this.getLength(str.slice(1));
  }
}

export default Solution;