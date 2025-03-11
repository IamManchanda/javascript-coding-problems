/**
 * Monotonic Array
 * https://www.algoexpert.io/questions/monotonic-array
 *
 * Approach: Direction Tracking
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class Solution {
  isMonotonic(array) {
    const n = array.length;

    if (n <= 2) {
      return true;
    }

    let direction = array[1] - array[0];

    for (let i = 2; i <= n - 1; i++) {
      if (direction === 0) {
        direction = array[i] - array[i - 1];
        continue;
      }

      if (this.breaksDirection(direction, array[i], array[i - 1])) {
        return false;
      }
    }

    return true;
  }

  breaksDirection(prevDir, curr, prev) {
    const currDir = curr - prev;
    return (prevDir > 0 && currDir < 0) || (prevDir < 0 && currDir > 0);
  }
}

export default Solution;
