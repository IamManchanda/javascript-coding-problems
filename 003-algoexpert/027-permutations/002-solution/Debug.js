import Solution from "./Solution.js";

const solution = new Solution();
const result = solution.getPermutations([1, 2, 3]);
console.log(result); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]