/**
 * Sum of all nodes in a binary tree
 * Approach: Depth-First Search (DFS), Iterative
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  sumBinaryTree(root) {
    if (root === null) {
      return 0;
    }

    let sum = 0;
    const stack = [];
    stack.push(root);

    while (stack.length > 0) {
      const node = stack.pop();
      sum += node.key;

      if (node.right !== null) {
        stack.push(node.right);
      }

      if (node.left !== null) {
        stack.push(node.left);
      }
    }

    return sum;
  }
}

export default Solution;
