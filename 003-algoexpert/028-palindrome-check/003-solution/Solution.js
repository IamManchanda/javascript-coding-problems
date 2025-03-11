/**
 * Palindrome Check
 * https://www.algoexpert.io/questions/palindrome-check
 * 
 * Approach: Recursive (Tail Recursion)
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  isPalindrome(string) {
    return this.palindrome(string, 0);
  }

  palindrome(string, i) {
    const j = string.length - 1 - i;
    if (i >= j) return true;
    if (string[i] !== string[j]) return false;

    return this.palindrome(string, i + 1);
  }
}

export default Solution;
