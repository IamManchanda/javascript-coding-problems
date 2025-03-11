/**
 * Quick Sort
 * https://www.algoexpert.io/questions/quick-sort
 * 
 * Approach: Pivot at the random element
 * Time complexity:
 *  => O(n log(n)) best and average case
 *  => O(n^2) worst case
 * Space complexity: O(log(n))
 */

class Solution {
  quickSort(array) {
    this.quickSortHelper(array, 0, array.length - 1);
    return array;
  }

  quickSortHelper(array, si, ei) {
    if (si >= ei) return;

    const partIdx = this.partition(array, si, ei),
      lPartEi = partIdx - 1, rPartSi = partIdx + 1;
    
    // To optimize recursion depth, we sort the smaller part first
    const isLPartSmaller = lPartEi - si < ei - rPartSi;
    if (isLPartSmaller) {
      this.quickSortHelper(array, si, lPartEi);
      this.quickSortHelper(array, rPartSi, ei);
    } else {
      this.quickSortHelper(array, rPartSi, ei);
      this.quickSortHelper(array, si, lPartEi);
    }
  }

  // Partition by taking pivot as the random element
  partition(array, si, ei) {
    const random = this.findRandomIdx(si, ei);
    this.swap(array, si, random);

    const p = si;
    let l = si + 1, r = ei;

    while (l <= r) {
      if (array[l] > array[p] && array[p] > array[r]) {
        this.swap(array, l, r);
      }

      if (array[l] <= array[p]) l++;
      if (array[p] <= array[r]) r--;
    }

    this.swap(array, p, r);

    return r;
  }

  findRandomIdx(si, ei) {
    return Math.floor(Math.random() * (ei - si + 1)) + si;
  }

  swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default Solution;
