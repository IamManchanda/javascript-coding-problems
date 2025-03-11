/**
 * Longest Palindromic Substring
 * https://www.algoexpert.io/questions/longest-palindromic-substring
 * 
 * Approach: Brute Force
 * Time Complexity: O(n^3)
 * Space Complexity: O(n)
 */

class Solution {
  longestPalindromicSubstring(string) {
    const n = string.length;
    let longest = '';

    for (let i = 0; i <= n - 1; i++) {
      for (let j = i; j <= n - 1; j++) {
        const substring = string.slice(i, j + 1);

        if (this.isPalindrome(substring) && substring.length > longest.length) {
          longest = substring;
        }
      }
    }

    return longest;
  }

  isPalindrome(substring) {
    const sn = substring.length;
    let reversedSubstringChars = [];

    for (let i = sn - 1; i >= 0; i--) {
      reversedSubstringChars.push(substring[i]);
    }

    return substring === reversedSubstringChars.join('');
  }
}

export default Solution;
