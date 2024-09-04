/**
 * Sum of all nodes in a binary tree
 * Approach: Depth-First Search (DFS), Recursive
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  sumBinaryTree(root) {
    if (root === null) {
      return 0;
    }

    const leftSum = this.sumBinaryTree(root.left);
    const rightSum = this.sumBinaryTree(root.right);
    return root.key + leftSum + rightSum;
  }
}

export default Solution;
