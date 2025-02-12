/**
 * Palindrome Check
 * https://www.algoexpert.io/questions/palindrome-check
 * 
 * Approach: Iterative (Reverse)
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */

class Solution {
  isPalindrome(string) {
    const n = string.length;
    let reverseString = "";

    for (let i = n - 1; i >= 0; i--) {
      reverseString += string[i];
    }

    return string === reverseString;
  }
}

export default Solution;
