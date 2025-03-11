/**
 * Longest Palindromic Substring
 * https://www.algoexpert.io/questions/longest-palindromic-substring
 * 
 * Approach: Expand Around Center
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

class Solution {
  longestPalindromicSubstring(string) {
    const n = string.length;
    let longest = [0, 1], longestDiff = 1;

    for (let i = 1; i <= n - 1; i++) {
      const [current, currentDiff] = this.getCurrentLongestPalindrome(string, i);

      if (currentDiff > longestDiff) {
        [longest, longestDiff] = [current, currentDiff];
      }
    }

    return string.slice(longest[0], longest[1]);
  }

  getCurrentLongestPalindrome(string, i) {
    const odd = this.getLongestPalindromeBetween(string, i - 1, i + 1),
      even = this.getLongestPalindromeBetween(string, i - 1, i),
      oddDiff = odd[1] - odd[0],
      evenDiff = even[1] - even[0];
    
    return oddDiff > evenDiff ? [odd, oddDiff] : [even, evenDiff];
  }

  getLongestPalindromeBetween(string, l, r) {
    while (l >= 0 && r <= string.length - 1 && string[l] === string[r]) {
      l--; r++; // expand the window
    }

    return [l + 1, r]; // return the indices of the longest palindrome
  }
}

export default Solution;
