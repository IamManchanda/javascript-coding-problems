/**
 * Custom Binary Search Tree
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class CustomBST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }

  #insertNode(node, newNode) {
    if (newNode.key < node.key) {
      this.#insertAt(node, newNode, 'left');
    } else if (newNode.key > node.key) {
      this.#insertAt(node, newNode, 'right');
    } else { // newNode.key === node.key
      // key is already in the tree, do nothing
    }
  }

  #insertAt(node, newNode, dir) {
    if (node[dir] === null) {
      node[dir] = newNode;
    } else {
      this.#insertNode(node[dir], newNode);
    }
  }

  delete(key) {
    this.root = this.#deleteNode(this.root, key);
  }

  #deleteNode(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.#deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.#deleteNode(node.right, key);
    } else { // key === node.key
      if (node.left === null && node.right === null) {
        return null; // remove the leaf node (no children)
      }

      // If we reach here, the node has at least one child

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      // If we reach here, the node has two children

      const minNodeRight = this.#getMinNode(node.right);
      node.key = minNodeRight.key;
      node.right = this.#deleteNode(node.right, minNodeRight.key);
    }

    return node;
  }

  #getMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }
}

export default CustomBST;
