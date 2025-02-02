/**
 * Smallest Difference
 * https://www.algoexpert.io/questions/smallest-difference
 *
 * Approach: Sorting + Two Pointers
 * Time complexity: O(n log n + m log m)
 * Space complexity: O(1)
 * where, n is the length of arrayOne 
 * and, m is the length of arrayTwo
 */

class Solution {
  smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let idxOne = 0, idxTwo = 0,
      currentSmallestDiff = Number.POSITIVE_INFINITY,
      smallestDiff = Number.POSITIVE_INFINITY,
      smallestPair = [];

    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
      let numOne = arrayOne[idxOne], numTwo = arrayTwo[idxTwo];

      if (numOne < numTwo) {
        currentSmallestDiff = numTwo - numOne;
        idxOne++;
      } else if (numOne > numTwo) {
        currentSmallestDiff = numOne - numTwo;
        idxTwo++;
      } else { // numOne === numTwo
        smallestDiff = currentSmallestDiff = 0;
        smallestPair = [numOne, numTwo];
        break;
      }

      if (smallestDiff > currentSmallestDiff) {
        smallestDiff = currentSmallestDiff;
        smallestPair = [numOne, numTwo];
      }
    }

    return smallestPair;
  }
}

export default Solution;
