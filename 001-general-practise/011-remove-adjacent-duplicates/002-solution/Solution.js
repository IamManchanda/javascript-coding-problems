import { validateInput } from "../helpers/validateInput";

/**
 * Remove all adjacent duplicates from a string
 * Approach: Recursion
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 * where, n is the length of the string
 */

class Solution {
  removeAdjDup(str) {
    validateInput(str);

    if (str.length <= 1) {
      return str;
    }

    const [firstChar, nextChar, ...rest] = str;
    const restStrExceptFirst = [nextChar, ...rest].join('');

    if (firstChar === nextChar) {
      return this.removeAdjDup(restStrExceptFirst);
    }

    return firstChar + this.removeAdjDup(restStrExceptFirst);
  }
}

export default Solution;