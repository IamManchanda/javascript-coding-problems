/**
 * Min Rewards
 * https://www.algoexpert.io/questions/min-rewards
 * 
 * Approach: Iteration (Two Pass)
 * Time complexity: O(n)
 * Space complexity: O(n)
 * 
 * Note: Though this solution has the same time and space complexity
 * as the Local Minima Expansion approach, however, it is more 
 * concise and easier to understand and implement.
 */

class Solution {
  minRewards(scores) {
    const n = scores.length;
    if (n === 1) return 1;

    const rewards = Array(n).fill(1);

    for (let i = 1; i <= n - 1; i++) {
      if (scores[i] > scores[i - 1]) {
        rewards[i] = rewards[i - 1] + 1;
      }
    }

    for (let i = n - 2; i >= 0; i--) {
      if (scores[i] > scores[i + 1]) {
        rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
      }
    }

    return rewards.reduce((a, b) => a + b, 0);
  }
}

export default Solution;
