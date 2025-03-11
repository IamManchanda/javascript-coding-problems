/**
 * Palindrome Check
 * https://www.algoexpert.io/questions/palindrome-check
 * 
 * Approach: Iterative (Mid Point)
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  isPalindrome(string) {
    const n = string.length,
      mid = this.findMidIdx(0, n - 1);

    for (let i = 0; i <= mid; i++) {
      if (string[i] !== string[n - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  findMidIdx(start, end) {
    // avoid overflow compared to (start + end) / 2
    return Math.floor(start + (end - start) / 2);
  }
}

export default Solution;
