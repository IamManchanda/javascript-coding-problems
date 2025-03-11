/**
 * Merge Sort
 * https://www.algoexpert.io/questions/merge-sort
 * 
 * Approach: Divide and conquer
 * Time complexity: O(n log(n))
 * Space complexity: O(n)
 */

class Solution {
  mergeSort(array) {
    const n = array.length;
    if (n <= 1) return array;

    this.mergeSortHelper(array, 0, n - 1);
    return array; // return the sorted array in place
  }

  mergeSortHelper(array, si, ei) {
    if (si === ei) return;
    
    // Divide and conquer
    const mid = this.findMidIdx(si, ei);
    this.mergeSortHelper(array, si, mid);
    this.mergeSortHelper(array, mid + 1, ei);
    this.merge(array, si, mid, ei);
  }

  findMidIdx(si, ei) {
    // avoid overflow compared to (si + ei) / 2
    return Math.floor(si + (ei - si) / 2);
  }

  // Merge while sorting
  merge(array, si, mid, ei) {
    const tn = ei - si + 1, temp = new Array(tn);
    let k = 0, l = si, r = mid + 1;

    while (l <= mid && r <= ei) {
      temp[k++] = array[l] <= array[r] ? array[l++] : array[r++];
    }
    while (l <= mid) temp[k++] = array[l++];
    while (r <= ei) temp[k++] = array[r++];

    for (let i = 0, j = si; i <= tn - 1; i++, j++) {
      array[j] = temp[i];
    }
  }
}

export default Solution;
