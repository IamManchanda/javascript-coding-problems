import { validateInput } from "../helpers/validateInput";

/**
 * Reverse a string
 * Approach: Recursive (Head Recursion)
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  reverseString(str) {
    validateInput(str);

    if (str === '') {
      return str;
    }

    return this.reverseString(str.slice(1)) + str[0];
  }
}

export default Solution;
