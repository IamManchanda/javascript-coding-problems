import { validateInput } from "../helpers/validateInput";

/**
 * Check if a string is a palindrome
 * Approach: Iteration
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  isPalindrome(str) {
    validateInput(str);

    const n = str.length;

    if (n <= 1) {
      return true;
    }

    for (let i = 0; i < n / 2; i++) {
      if (str[i] !== str[n - 1 - i]) {
        return false;
      }
    }

    return true;
  }
}

export default Solution;