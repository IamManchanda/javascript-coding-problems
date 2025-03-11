import Solution from "./Solution.js";

const solution = new Solution();
const result = solution.setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
console.log(result); // [[1 ,0 ,1] ,[0 ,0 ,0] ,[1 ,0 ,1]]
