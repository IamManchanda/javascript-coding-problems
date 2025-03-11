/**
 * Longest Substring Without Duplication
 * https://www.algoexpert.io/questions/longest-substring-without-duplication
 * 
 * Approach: Sliding Window
 * Time complexity: O(n)
 * Space complexity: O(min(n, a)) 
 * where, n is the length of the string 
 * and, a is the size of the alphabet
 */

class Solution {
  longestSubstringWithoutDuplication(string) {
    const n = string.length, lastSeen = new Map();
    let i = 0, longest = [0, 1], longestDiff = 1; // longest[1] - longest[0]

    for (let j = 0; j <= n - 1; j++) {
      const char = string[j];

      if (lastSeen.has(char)) {
        i = Math.max(i, lastSeen.get(char) + 1);
      }

      lastSeen.set(char, j);
      
      const current = [i, j + 1], currentDiff = current[1] - current[0];
      if (longestDiff < currentDiff) {
        [longest, longestDiff] = [current, currentDiff];
      }
    }

    return string.slice(longest[0], longest[1]);
  }
}

export default Solution;
