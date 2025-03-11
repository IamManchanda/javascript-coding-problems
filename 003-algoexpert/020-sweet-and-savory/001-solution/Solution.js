/**
 * Sweet and Savory
 * https://www.algoexpert.io/questions/sweet-and-savory
 * 
 * Approach: Two Pointers
 * Time Complexity: O(nlog(n) + mlog(m))
 * Space Complexity: O(1)
 */

class Solution {
  sweetAndSavory(dishes, target) {
    const sweet = dishes
        .filter((dish) => dish < 0)
        .sort((a, b) => b - a),
      savory = dishes
        .filter((dish) => dish > 0)
        .sort((a, b) => a - b);

    let bestPair = [0, 0],
      bestDiff = Number.POSITIVE_INFINITY,
      sweetIdx = 0,
      savoryIdx = 0;

    while (sweetIdx < sweet.length && savoryIdx < savory.length) {
      const currSum = sweet[sweetIdx] + savory[savoryIdx];

      if (currSum <= target) {
        const currDiff = target - currSum;

        if (currDiff < bestDiff) {
          bestDiff = currDiff;
          bestPair = [sweet[sweetIdx], savory[savoryIdx]];
        }

        savoryIdx++;
      } else {
        sweetIdx++;
      }
    }

    return bestPair;
  }
}

export default Solution;
