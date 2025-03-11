/**
 * Longest Peak
 * https://www.algoexpert.io/questions/longest-peak
 * 
 * Approach: Two Pointers
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  longestPeak(array) {
    const n = array.length;
    let longestPeakLength = 0, i = 1;

    while (i <= n - 2) {
      const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];

      if (!isPeak) {
        i++;
        continue;
      }

      let l = i - 2;
      while (l >= 0 && array[l] < array[l + 1]) l--;

      let r = i + 2;
      while (r <= n - 1 && array[r] < array[r - 1]) r++;

      // currentPeakLength = (r - 1) - (l + 1) + 1 => r - l - 1
      const currentPeakLength = r - l - 1; 
      longestPeakLength = Math.max(longestPeakLength, currentPeakLength);

      i = r; // Skip to the next potential peak
    }

    return longestPeakLength;
  }
}

export default Solution;
