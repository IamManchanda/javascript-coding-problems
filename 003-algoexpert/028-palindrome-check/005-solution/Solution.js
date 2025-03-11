/**
 * Palindrome Check
 * https://www.algoexpert.io/questions/palindrome-check
 * 
 * Approach: Two Pointers
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  isPalindrome(string) {
    let l = 0, r = string.length - 1;

    while (l < r) {
      if (string[l] !== string[r]) return false;
      l++; r--; // move pointers by stepping towards each other
    }

    return true;
  }
}

export default Solution;
