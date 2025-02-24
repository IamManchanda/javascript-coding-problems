import Solution from "./Solution.js";

const solution = new Solution();
const result = solution.powerset([1, 2, 3]);
console.log(result); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]