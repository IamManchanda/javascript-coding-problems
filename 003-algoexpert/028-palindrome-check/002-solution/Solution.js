/**
 * Palindrome Check
 * https://www.algoexpert.io/questions/palindrome-check
 * 
 * Approach: Iterative (Reverse, Optimal)
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  isPalindrome(string) {
    const n = string.length;
    let reversedChars = [];

    for (let i = n - 1; i >= 0; i--) {
      reversedChars.push(string[i]);
    }

    return string === reversedChars.join("");
  }
}

export default Solution;
