/**
 * Merge Overlapping Intervals
 * https://www.algoexpert.io/questions/merge-overlapping-intervals
 * 
 * Approach: Sorting + Iteration
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 */

class Solution {
  mergeOverlappingIntervals(array) {
    const result = [], 
      sorted = array.sort((a, b) => a[0] - b[0]),
      [first, ...rest] = sorted;

    let curr = first;
    result.push(curr);

    for (const next of rest) {
      if (curr[1] >= next[0]) {
        curr[1] = Math.max(curr[1], next[1]);
        continue;
      }

      curr = next;
      result.push(curr);
    }

    return result;
  }
}

export default Solution;
