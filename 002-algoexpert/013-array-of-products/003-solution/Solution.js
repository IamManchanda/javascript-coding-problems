/**
 * Array of Products
 * https://www.algoexpert.io/questions/array-of-products
 * 
 * Approach: Optimized Prefix Products (One Array)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Solution {
  arrayOfProducts(array) {
    const n = array.length, result = [];

    for (let i = 0, leftProduct = 1; i <= n - 1; i++) {
      result[i] = leftProduct;
      leftProduct *= array[i];
    }

    for (let i = n - 1, rightProduct = 1; i >= 0; i--) {
      result[i] *= rightProduct;
      rightProduct *= array[i];
    }

    return result;
  }
}

export default Solution;
