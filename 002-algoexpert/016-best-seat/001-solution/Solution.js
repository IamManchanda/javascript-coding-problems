/**
 * Best Seat
 * https://www.algoexpert.io/questions/best-seat
 * 
 * Approach: Two Pointers
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  bestSeat(seats) {
    const n = seats.length;
    
    let bestSeatIdx = -1,
      maxSpace = 0,
      l = 0;

    while (l < n) {
      let r = l + 1;

      while (r < n && seats[r] === 0) {
        r++;
      }

      const currSpace = r - l - 1;
      if (currSpace > maxSpace) {
        bestSeatIdx = this.findMidIdx(l, r);
        maxSpace = currSpace;
      }

      l = r; // move to the next occupied seat
    }

    return bestSeatIdx;
  }

  findMidIdx(start, end) {
    // avoid overflow compared to (start + end) / 2
    return Math.floor(start + (end - start) / 2);
  }
}

export default Solution;
