/**
 * Array of Products
 * https://www.algoexpert.io/questions/array-of-products
 * 
 * Approach: Brute Force
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */

class Solution {
  arrayOfProducts(array) {
    const n = array.length, result = [];

    for (let i = 0; i <= n - 1; i++) {
      let product = 1;

      for (let j = 0; j <= n - 1; j++) {
        if (i !== j) product *= array[j];
      }

      result[i] = product;
    }

    return result;
  }
}

export default Solution;
