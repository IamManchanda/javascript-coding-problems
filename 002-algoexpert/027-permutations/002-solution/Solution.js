/**
 * Permutations
 * https://www.algoexpert.io/questions/permutations
 * 
 * Approach: Swapping + Recursion
 * Time Complexity: O(n * n!)
 * Space Complexity: O(n * n!)
 */

class Solution {
  getPermutations(array) {
    const perms = [];
    this.permutations(0, array, perms);
    return perms;
  }

  permutations(i, array, perms) {
    const n = array.length;

    if (i === n - 1) {
      perms.push([...array]);
    } else {
      for (let j = i; j <= n - 1; j++) {
        this.swap(array, i, j);
        this.permutations(i + 1, array, perms);
        this.swap(array, i, j);
      }
    }
  }

  swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default Solution;
