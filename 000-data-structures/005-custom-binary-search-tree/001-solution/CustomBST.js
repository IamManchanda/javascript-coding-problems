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

  inOrderTraversal() {
    const result = [];
    this.#inOrder(this.root, result);
    return result;
  }

  #inOrder(node, result) {
    if (node !== null) {
      this.#inOrder(node.left, result);
      result.push(node.key);
      this.#inOrder(node.right, result);
    }
  }

  preOrderTraversal() {
    const result = [];
    this.#preOrder(this.root, result);
    return result;
  }

  #preOrder(node, result) {
    if (node !== null) {
      result.push(node.key);
      this.#preOrder(node.left, result);
      this.#preOrder(node.right, result);
    }
  }

  postOrderTraversal() {
    const result = [];
    this.#postOrder(this.root, result);
    return result;
  }

  #postOrder(node, result) {
    if (node !== null) {
      this.#postOrder(node.left, result);
      this.#postOrder(node.right, result);
      result.push(node.key);
    }
  }

  breadthFirstTraversal() {
    const result = [];

    if (this.root === null) {
      return result;
    }

    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.key);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return result;
  }

  breadthFirstSearch(key) {
    if (this.root === null) {
      return false;
    }

    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.key === key) {
        return true;
      }

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return false;
  }

  depthFirstTraversal() {
    const result = [];
    
    if (this.root === null) {
      return result;
    }

    const stack = [];
    stack.push(this.root);

    while (stack.length > 0) {
      const node = stack.pop();
      result.push(node.key);

      if (node.right !== null) {
        stack.push(node.right);
      }

      if (node.left !== null) {
        stack.push(node.left);
      }
    }

    return result;
  }

  depthFirstSearch(key) {
    if (this.root === null) {
      return false;
    }

    const stack = [];
    stack.push(this.root);

    while (stack.length > 0) {
      const node = stack.pop();

      if (node.key === key) {
        return true;
      }

      if (node.right !== null) {
        stack.push(node.right);
      }

      if (node.left !== null) {
        stack.push(node.left);
      }
    }

    return false;
  }

  depthFirstTraversalRecursive() {
    const result = [];
    this.#dfsRecursive(this.root, result);
    return result;
  }

  #dfsRecursive(node, result) {
    if (node !== null) {
      result.push(node.key);
      this.#dfsRecursive(node.left, result);
      this.#dfsRecursive(node.right, result);
    }
  }

  depthFirstSearchRecursive(key) {
    return this.#dfsRecursiveSearch(this.root, key);
  }

  #dfsRecursiveSearch(node, key) {
    if (node === null) {
      return false;
    }

    if (node.key === key) {
      return true;
    }

    return this.#dfsRecursiveSearch(node.left, key) ||
      this.#dfsRecursiveSearch(node.right, key);
  }
}

export default CustomBST;
