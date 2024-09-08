import { validateInput } from "../helpers/validateInput";

/**
 * Remove all spaces and tabs from a string
 * Approach: Recursion
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 * where, n is the length of the string
 */

class Solution {
  removeSpacesTabs(str) {
    validateInput(str);

    if (str.length === 0) {
      return '';
    }

    const firstChar = str[0];
    const restStr = str.slice(1);

    if (firstChar === ' ' || firstChar === '\t') {
      return this.removeSpacesTabs(restStr);
    }

    return firstChar + this.removeSpacesTabs(restStr);
  }
}

export default Solution;
