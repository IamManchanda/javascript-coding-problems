import { validateInput } from "../helpers/validateInput";

/**
 * Coin sum problem (Top-Down Approach)
 * Approach: Dynamic Programming (Recursive / Top-Down / Memoization)
 * 
 * Time complexity: O(n * m)
 * Space complexity: O(n)
 * where, n = target, m = number of coins
 */
class Solution {
  constructor() {
    this.minCoin = Infinity;
    this.coinsLength = 0;
  }

  coinSum(target, coins) {
    validateInput(target, coins);

    this.minCoin = Math.min(...coins);
    this.coinsLength = coins.length;

    const isValid = this.#isValid(target);
    if (isValid !== undefined) return isValid;

    const dp = new Array(target + 1).fill(undefined);
    dp[0] = true;

    return this.#coinSum(target, coins, dp);
  }

  #coinSum(target, coins, dp) {
    if (dp[target] !== undefined) return dp[target];

    const isValid = this.#isValid(target);
    if (isValid !== undefined) return isValid;

    for (const coin of coins) {
      const remainder = target - coin;
      if (remainder >= 0 && this.#coinSum(remainder, coins, dp)) {
        dp[target] = true;
        return true;
      }
    }

    dp[target] = false;
    return false;
  }

  #isValid(target) {
    if (target === 0) return true;
    if (this.coinsLength === 0 || this.minCoin > target) return false;
    return undefined;
  }
}

export default Solution;
