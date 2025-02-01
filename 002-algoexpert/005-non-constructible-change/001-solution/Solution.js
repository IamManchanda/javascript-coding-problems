/**
 * Non-Constructible Change
 * https://www.algoexpert.io/questions/non-constructible-change
 * 
 * Approach: Sorting + Greedy
 * Time Complexity: O(n log(n))
 * Space Complexity: O(1)
 */

class Solution {
  nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);

    let change = 0;

    for (let coin of coins) {
      if (coin > change + 1) {
        break;
      }

      change += coin;
    }

    return change + 1;
  }
}

export default Solution;
