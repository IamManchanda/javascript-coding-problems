/**
 * Binary Search
 * https://www.algoexpert.io/questions/binary-search
 * 
 * Approach: Iteration
 * Time complexity: O(log(n))
 * Space complexity: 1
 */

class Solution {
  binarySearch(array, target) {
    let l = 0, r = array.length - 1;

    while (l <= r) {
      const mid = this.findMidIdx(l, r), midVal = array[mid];

      if (target === midVal) {
        return mid;
      } else if (target < midVal) {
        r = mid - 1;
      } else { // target > midVal
        l = mid + 1;
      }
    }

    return -1;
  }

  findMidIdx(start, end) {
    // avoid overflow compared to (start + end) / 2
    return Math.floor(start + (end - start) / 2);
  }
}

export default Solution;
