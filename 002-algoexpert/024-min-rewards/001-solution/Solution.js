/**
 * Min Rewards
 * https://www.algoexpert.io/questions/min-rewards
 * 
 * Approach: Iteration + Backtracking
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */

class Solution {
  minRewards(scores) {
    const n = scores.length;
    if (n === 1) return 1;

    const rewards = Array(n).fill(1);

    for (let i = 1; i <= n - 1; i++) {
      let j = i - 1;
      
      if (scores[i] > scores[j]) {
        rewards[i] = rewards[j] + 1;
      } else {
        while (j >= 0 && scores[j] > scores[j + 1]) {
          rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
          j--;
        }
      }
    }

    return rewards.reduce((a, b) => a + b, 0);
  }
}

export default Solution;
