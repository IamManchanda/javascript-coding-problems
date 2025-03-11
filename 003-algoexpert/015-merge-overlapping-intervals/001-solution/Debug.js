import Solution from "./Solution.js";

const solution = new Solution();
const result = solution.mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]);
console.log(result); // [[1, 2], [3, 8], [9, 10]]