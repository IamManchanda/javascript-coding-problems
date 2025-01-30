import { validateInput } from "../helpers/validateInput";

/**
 * Reverse a string
 * Approach: Recursive (Tail Recursion)
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

    return str.slice(-1) + this.reverseString(str.slice(0, -1));
  }
}

export default Solution;
