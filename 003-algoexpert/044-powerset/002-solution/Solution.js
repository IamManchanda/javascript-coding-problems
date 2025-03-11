/**
 * Powerset
 * https://www.algoexpert.io/questions/powerset
 *
 * Approach: Iteration
 * Time complexity: O(n*2^n)
 * Space complexity: O(n*2^n)
 * 
 * Mathematically, in powerset of a set with n elements, the 
 * number of subsets is 2^n. Thus, the time and space 
 * complexity of this solution is O(n*2^n).
 */

class Solution {
  powerset(array) {
    const result = [[]];

    for (const element of array) {
      for (const subset of [...result]) {
        result.push([...subset, element]);
      }
    }

    return result;
  }
}

export default Solution;
