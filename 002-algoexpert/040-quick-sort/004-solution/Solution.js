/**
 * Quick Sort
 * https://www.algoexpert.io/questions/quick-sort
 * 
 * Approach: Pivot at the last element
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
    
    // To avoid stack overflow, we sort the smaller part first
    const isLPartSmaller = lPartEi - si < ei - rPartSi;
    if (isLPartSmaller) {
      this.quickSortHelper(array, si, lPartEi);
      this.quickSortHelper(array, rPartSi, ei);
    } else {
      this.quickSortHelper(array, rPartSi, ei);
      this.quickSortHelper(array, si, lPartEi);
    }
  }

  // Partition by taking pivot as the last element
  partition(array, si, ei) {
    const p = ei;
    let l = si, r = ei - 1;

    while (l <= r) {
      if (array[l] > array[p] && array[p] > array[r]) {
        this.swap(array, l, r);
      }

      if (array[l] <= array[p]) l++;
      if (array[p] <= array[r]) r--;
    }

    this.swap(array, l, p);

    return l;
  }

  swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default Solution;
