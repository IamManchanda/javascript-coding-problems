/**
 * Sum of all nodes in a binary tree
 * Approach: Breadth-First Search (BFS)
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
    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
      const node = queue.shift();
      sum += node.key;

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return sum;
  }
}

export default Solution;
