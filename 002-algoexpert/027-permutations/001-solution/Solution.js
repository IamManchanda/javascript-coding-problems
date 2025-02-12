/**
 * Permutations
 * https://www.algoexpert.io/questions/perms
 * 
 * Approach: Recursion
 * Time Complexity: O(n^2 * n!)
 * Space Complexity: O(n * n!)
 */

class Solution {
  getPermutations(array) {
    const perms = [];
    this.permutations(array, [], perms);
    return perms;
  }

  permutations(array, currPerm, perms) {
    const n = array.length;

    if (!n && currPerm.length) {
      perms.push(currPerm);
    } else {
      for (let i = 0; i <= n - 1; i++) {
        const newArray = [ // remove element at index i
          ...array.slice(0, i),
          ...array.slice(i + 1),
        ];
        const newCurrPerm = [
          ...currPerm,
          array[i], // add element at index i
        ];
        this.permutations(newArray, newCurrPerm, perms);
      }
    }
  }
}

export default Solution;
