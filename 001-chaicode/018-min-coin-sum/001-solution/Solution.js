import { validateInput } from "../helpers/validateInput";

/**
 * Minimum coin sum problem
 * Approach: Dynamic Programming (Recursive / Top-Down / Memoization)
 * 
 * Time complexity: O(n * m)
 * Space complexity: O(n)
 * where n = target, m = number of coins
 */

class Solution {
  constructor() {
    this.minCoin = Infinity;
    this.coinsLength = 0;
  }

  minCoinSum(target, coins) {
    validateInput(target, coins);

    this.minCoin = Math.min(...coins);
    this.coinsLength = coins.length;

    const isValid = this.#isValid(target);
    if (isValid !== undefined) return isValid;

    const dp = new Array(target + 1).fill(undefined);
    dp[0] = 0;

    return this.#minCoinSum(target, coins, dp);
  }

  #minCoinSum(target, coins, dp) {
    if (dp[target] !== undefined) return dp[target];
    
    const isValid = this.#isValid(target);
    if (isValid !== undefined) return isValid;
    
    let minCoinsCount = Infinity;

    for (const coin of coins) {
      const remainder = target - coin;

      if (remainder >= 0) {
        const remainderCoinsCount = this.#minCoinSum(remainder, coins, dp);

        if (remainderCoinsCount !== -1) {
          minCoinsCount = Math.min(minCoinsCount, remainderCoinsCount + 1);
        }
      }
    }

    dp[target] = minCoinsCount === Infinity ? -1 : minCoinsCount;
    return dp[target];
  }

  #isValid(target) {
    if (target === 0) return 0;
    if (this.coinsLength === 0 || this.minCoin > target) return -1;
    return undefined;
  }
}

export default Solution;
