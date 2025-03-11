/**
 * Product Sum
 * https://www.algoexpert.io/questions/product-sum
 * 
 * Approach: Recursion
 * Time complexity: O(n)
 * Space complexity: O(d)
 * where, n is total elements in array including subarrays
 * and, d is maximum depth of subarrays in array
 */

class Solution {
  productSum(array) {
    return this.prodSum(array, 1);
  }
  
  prodSum(array, depth) {
    let sum = 0;

    for (const element of array) {
      if (Array.isArray(element)) {
        sum += this.prodSum(element, depth + 1);
      } else {
        sum += element;
      }
    }

    return sum * depth;
  }
}

export default Solution;
