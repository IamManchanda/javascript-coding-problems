import { validateInput } from "../helpers/validateInput";

/**
 * Reverse a string
 * Approach: Iteration
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  reverseString(str) {
    validateInput(str);

    let reversedStr = '';
    let strLength = str.length - 1;

    while (strLength >= 0) {
      reversedStr += str[strLength];
      strLength--;
    }

    return reversedStr;
  }
}

export default Solution;
