/**
 * Powerset
 * https://www.algoexpert.io/questions/powerset
 *
 * Approach: Recursion
 * Time complexity: O(n*2^n)
 * Space complexity: O(n*2^n)
 *
 * Mathematically, in powerset of a set with n elements, the 
 * number of subsets is 2^n. Thus, the time and space 
 * complexity of this solution is O(n*2^n).
 */

class Solution {
  powerset(array) {
    return this.powersetHelper(array, array.length - 1);
  }

  powersetHelper(array, idx) {
    if (idx < 0) {
      return [[]];
    }

    const result = this.powersetHelper(array, idx - 1);
    
    const element = array[idx];
    for (const subset of [...result]) {
      result.push([...subset, element]);
    }

    return result;
  }
}

export default Solution;
