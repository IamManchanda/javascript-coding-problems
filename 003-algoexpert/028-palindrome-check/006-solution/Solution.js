/**
 * Palindrome Check
 * https://www.algoexpert.io/questions/palindrome-check
 * 
 * Approach: Inbuilt Reverse Method
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  isPalindrome(string) {
    const reversedString = string.split('').reverse().join('');

    return string === reversedString;
  }
}

export default Solution;
