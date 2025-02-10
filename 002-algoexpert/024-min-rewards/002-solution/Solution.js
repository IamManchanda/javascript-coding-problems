/**
 * Min Rewards
 * https://www.algoexpert.io/questions/min-rewards
 * 
 * Approach: Local Minima Expansion
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  minRewards(scores) {
    const n = scores.length;
    if (n === 1) return 1;

    const rewards = Array(n).fill(1),
      localMinIndices = this.getLocalMinIndices(scores, n);

    for (const localMinIndex of localMinIndices) {
      this.expandFromLocalMinIndex(localMinIndex, scores, n, rewards);
    }

    return rewards.reduce((a, b) => a + b, 0);
  }

  getLocalMinIndices(scores, n) {
    const localMinIndices = [];
    
    for (let i = 0; i <= n - 1; i++) {
      if (
        (i === 0 && scores[i] < scores[i + 1]) ||
        (i === n - 1 && scores[i] < scores[i - 1])
      ) {
        localMinIndices.push(i);
      }

      if (i === 0 || i === n - 1) continue;

      if (scores[i] < scores[i + 1] && scores[i] < scores[i - 1]) {
        localMinIndices.push(i);
      }
    }

    return localMinIndices;
  }

  expandFromLocalMinIndex(localMinIndex, scores, n, rewards) {
    let l = localMinIndex - 1, r = localMinIndex + 1;

    while (l >= 0 && scores[l] > scores[l + 1]) {
      rewards[l] = Math.max(rewards[l], rewards[l + 1] + 1);
      l--;
    }

    while (r <= n - 1 && scores[r] > scores[r - 1]) {
      rewards[r] = rewards[r - 1] + 1;
      r++;
    }
  }
}

export default Solution;
