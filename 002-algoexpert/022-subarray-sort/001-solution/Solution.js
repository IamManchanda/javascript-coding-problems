/**
 * Subarray Sort
 * https://www.algoexpert.io/questions/subarray-sort
 * 
 * Approach: Two Pointers
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  subarraySort(array) {
    const n = array.length;
    let l = 0, r = n - 1,
      minOutOfOrder = Infinity, maxOutOfOrder = -Infinity;
    
    for (let i = 0; i <= n - 1; i++) {
      const num = array[i];

      if (this.isOutOfOrder(i, num, array)) {
        minOutOfOrder = Math.min(minOutOfOrder, num);
        maxOutOfOrder = Math.max(maxOutOfOrder, num);
      }
    }

    if (minOutOfOrder === Infinity) return [-1, -1];
    
    while (minOutOfOrder >= array[l]) l++;
    while (maxOutOfOrder <= array[r]) r--;

    return [l, r];
  }

  isOutOfOrder(i, num, array) {
    if (i === 0) return num > array[i + 1];
    if (i === array.length - 1) return num < array[i - 1];
    return num > array[i + 1] || num < array[i - 1];
  }
}

export default Solution;
