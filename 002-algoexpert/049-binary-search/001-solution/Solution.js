/**
 * Binary Search
 * https://www.algoexpert.io/questions/binary-search
 * 
 * Approach: Recursion
 * Time complexity: O(log(n))
 * Space complexity: O(log(n))
 */

class Solution {
  binarySearch(array, target) {
    return this.search(array, target, 0, array.length - 1);
  }

  search(array, target, l, r) {
    if (l > r) return -1;

    const mid = this.findMidIdx(l, r), midVal = array[mid];

    if (target === midVal) {
      return mid;
    } else if (target < midVal) {
      return this.search(array, target, l, mid - 1);
    } else { // target > midVal
      return this.search(array, target, mid + 1, r);
    }
  }

  findMidIdx(start, end) {
    // avoid overflow compared to (start + end) / 2
    return Math.floor(start + (end - start) / 2);
  }
}

export default Solution;
