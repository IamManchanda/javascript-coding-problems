import { validateInput } from "../helpers/validateInput";

/**
 * Check if a string is a palindrome
 * Approach: Recursion (using substring)
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  isPalindrome(str) {
    validateInput(str);

    const n = str.length;

    if (n <= 1) {
      return true;
    }

    if (str[0] !== str[n - 1]) {
      return false;
    }

    return this.isPalindrome(str.substring(1, n - 1));
  }
}

export default Solution;