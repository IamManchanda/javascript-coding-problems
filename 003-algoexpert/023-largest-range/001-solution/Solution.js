/**
 * Largest Range
 * https://www.algoexpert.io/questions/largest-range
 * 
 * Approach: Hash Table (using a Set) + Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Solution {
  largestRange(array) {
    let result = [],
      longestLength = 0,
      numsSet = new Set(array);

    for (const num of array) {
      if (!numsSet.has(num)) {
        // Skip if the number has already been visited
        continue;
      }

      numsSet.delete(num); // mark as visited

      let currentLength = 1, 
        l = num - 1, r = num + 1;

      while (numsSet.has(l)) {
        numsSet.delete(l); // mark as visited
        currentLength++;
        l--;
      }

      while (numsSet.has(r)) {
        numsSet.delete(r); // mark as visited
        currentLength++;
        r++;
      }

      if (currentLength > longestLength) {
        longestLength = currentLength;
        result = [l + 1, r - 1];
      }
    }

    return result;
  }
}

export default Solution;
