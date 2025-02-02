/**
 * Binary Tree
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  createTree(arr) {
    this.root = this.insertLevelOrder(arr);
  }

  insertLevelOrder(arr, i = 0) {
    if (i >= arr.length || arr[i] === null) {
      return null;
    }

    const node = new Node(arr[i]);
    node.left = this.insertLevelOrder(arr, 2 * i + 1);
    node.right = this.insertLevelOrder(arr, 2 * i + 2);

    return node;
  }
}

export default BinaryTree;

