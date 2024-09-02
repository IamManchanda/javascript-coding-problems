import CustomBST from '../CustomBST';

describe('CustomBST', () => {
  let bst;

  beforeEach(() => {
    bst = new CustomBST();
  });

  test('should create an empty tree', () => {
    expect(bst.root).toBeNull();

    // Current tree: (empty)
  });

  describe('insert', () => {
    test('should insert a single node correctly', () => {
      bst.insert(10);
      expect(bst.root).not.toBeNull();
      expect(bst.root.key).toBe(10);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();

      // Current tree:
      //     10
    });

    test('should insert nodes correctly into a non-empty tree', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      expect(bst.root.key).toBe(10);
      expect(bst.root.left.key).toBe(5);
      expect(bst.root.right.key).toBe(15);
      expect(bst.root.left.left).toBeNull();
      expect(bst.root.left.right).toBeNull();
      expect(bst.root.right.left).toBeNull();
      expect(bst.root.right.right).toBeNull();

      // Current tree:
      //     10
      //    /  \
      //   5    15
    });

    test('should not insert duplicate keys', () => {
      bst.insert(10);
      bst.insert(10); // Duplicate
      expect(bst.root.key).toBe(10);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();

      // Current tree:
      //     10
    });
  });

  describe('delete', () => {
    test('should delete a leaf node correctly', () => {
      bst.insert(10);
      bst.delete(10);
      expect(bst.root).toBeNull();

      // Current tree: (empty)
    });

    test('should delete a node with one left child correctly', () => {
      bst.insert(10);
      bst.insert(5);
      expect(bst.root.key).toBe(10);
      expect(bst.root.left.key).toBe(5);
      expect(bst.root.right).toBeNull();

      // Current tree:
      //     10
      //    /
      //   5

      bst.delete(5);
      expect(bst.root.key).toBe(10);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();

      // Current tree:
      //     10
    });

    test('should delete a node with one right child correctly', () => {
      bst.insert(10);
      bst.insert(15);
      expect(bst.root.key).toBe(10);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right.key).toBe(15);

      // Current tree:
      //     10
      //       \
      //       15

      bst.delete(15);
      expect(bst.root.key).toBe(10);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();

      // Current tree:
      //     10
    });

    test('should delete a node with two children correctly', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      expect(bst.root.key).toBe(10);
      expect(bst.root.left.key).toBe(5);
      expect(bst.root.left.left.key).toBe(3);
      expect(bst.root.left.right.key).toBe(7);
      expect(bst.root.right.key).toBe(15);
      expect(bst.root.right.left).toBeNull();

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \
      // 3   7

      bst.delete(5);
      expect(bst.root.key).toBe(10);
      expect(bst.root.left.key).toBe(7);
      expect(bst.root.left.left.key).toBe(3);
      expect(bst.root.left.right).toBeNull();
      expect(bst.root.right.key).toBe(15);

      // Current tree:
      //     10
      //    /  \
      //   7    15
      //  /
      // 3
    });

    test('should handle deleting a node not present in the tree', () => {
      bst.insert(10);
      expect(bst.root.key).toBe(10);

      // Current tree:
      //     10

      bst.delete(20); // Node 20 does not exist
      expect(bst.root.key).toBe(10); // Tree should remain unchanged

      // Current tree:
      //     10
    });

    test('should handle deleting the root node when it has two children', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      expect(bst.root.key).toBe(10);
      expect(bst.root.left.key).toBe(5);
      expect(bst.root.left.left.key).toBe(3);
      expect(bst.root.left.right.key).toBe(7);
      expect(bst.root.right.key).toBe(15);

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \
      // 3   7

      bst.delete(10);
      expect(bst.root.key).toBe(15);
      expect(bst.root.left.key).toBe(5);
      expect(bst.root.right).toBeNull();
      expect(bst.root.left.left.key).toBe(3);
      expect(bst.root.left.right.key).toBe(7);

      // Current tree:
      //     15
      //    /
      //   5
      //  / \
      // 3   7
    });
  });

  describe('inOrderTraversal', () => {
    test('should return an empty array for in-order traversal of an empty tree', () => {
      expect(bst.root).toBeNull();

      // Current tree: (empty)

      const result = bst.inOrderTraversal();
      expect(result).toEqual([]);

      // Expected in-order traversal: (empty)
    });

    test('should perform in-order traversal correctly', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      const result = bst.inOrderTraversal();
      expect(result).toEqual([3, 5, 7, 10, 12, 15, 18]);

      // Expected in-order traversal:
      // 3, 5, 7, 10, 12, 15, 18
    });

    test('should handle in-order traversal after deleting a node', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      let result;

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      result = bst.inOrderTraversal();
      expect(result).toEqual([3, 5, 7, 10, 12, 15, 18]);

      // Expected in-order traversal:
      // 3, 5, 7, 10, 12, 15, 18

      bst.delete(10);

      // Current tree:
      //     12
      //    /  \
      //   5    15
      //  / \     \
      // 3   7    18

      result = bst.inOrderTraversal();
      expect(result).toEqual([3, 5, 7, 12, 15, 18]);

      // Expected in-order traversal after deleting 10:
      // 3, 5, 7, 12, 15, 18
    });
  });

  describe('preOrderTraversal', () => {
    test('should return an empty array for pre-order traversal of an empty tree', () => {
      expect(bst.root).toBeNull();

      // Current tree: (empty)

      const result = bst.preOrderTraversal();
      expect(result).toEqual([]);

      // Expected pre-order traversal: (empty)
    });

    test('should perform pre-order traversal correctly', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      const result = bst.preOrderTraversal();
      expect(result).toEqual([10, 5, 3, 7, 15, 12, 18]);

      // Expected pre-order traversal:
      // 10, 5, 3, 7, 15, 12, 18
    });

    test('should handle pre-order traversal after deleting a node', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      let result;

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      result = bst.preOrderTraversal();
      expect(result).toEqual([10, 5, 3, 7, 15, 12, 18]);

      // Expected pre-order traversal:
      // 10, 5, 3, 7, 15, 12, 18

      bst.delete(10);

      // Current tree:
      //     12
      //    /  \
      //   5    15
      //  /     / \
      // 3     12 18

      result = bst.preOrderTraversal();
      expect(result).toEqual([12, 5, 3, 7, 15, 18]);

      // Expected pre-order traversal after deleting 10:
      // 12, 5, 3, 7, 15, 18
    });
  });

  describe('postOrderTraversal', () => {
    test('should return an empty array for post-order traversal of an empty tree', () => {
      const result = bst.postOrderTraversal();
      expect(result).toEqual([]);

      // Expected post-order traversal: (empty)
    });

    test('should perform post-order traversal correctly', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      const result = bst.postOrderTraversal();
      expect(result).toEqual([3, 7, 5, 12, 18, 15, 10]);

      // Expected post-order traversal:
      // 3, 7, 5, 12, 18, 15, 10
    });

    test('should handle post-order traversal after deleting a node', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      let result;

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      result = bst.postOrderTraversal();
      expect(result).toEqual([3, 7, 5, 12, 18, 15, 10]);

      // Expected post-order traversal:
      // 3, 7, 5, 12, 18, 15, 10

      bst.delete(10);

      // Current tree:
      //     12
      //    /  \
      //   5    15
      //  /     / \
      // 3     12 18

      result = bst.postOrderTraversal();
      expect(result).toEqual([3, 7, 5, 18, 15, 12]);

      // Expected post-order traversal after deleting 10:
      // 3, 7, 5, 18, 15, 12
    });
  });

  describe('depthFirstTraversal', () => {
    test('should return an empty array for depth-first traversal on an empty tree', () => {
      expect(bst.root).toBeNull();

      // Current tree: (empty)

      const result = bst.depthFirstTraversal();
      expect(result).toEqual([]);

      // Expected DFS result: (empty)
    });

    test('should perform depth-first traversal correctly on a single-node tree', () => {
      bst.insert(10);

      // Current tree:
      //     10

      const result = bst.depthFirstTraversal();
      expect(result).toEqual([10]);

      // Expected DFS result:
      // 10
    });

    test('should perform depth-first traversal correctly on a multi-node tree', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      const result = bst.depthFirstTraversal();
      expect(result).toEqual([10, 5, 3, 7, 15, 12, 18]);

      // Expected DFS result (pre-order):
      // 10, 5, 3, 7, 15, 12, 18
    });

    test('should perform depth-first traversal correctly after deleting a node', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      let result;

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      result = bst.depthFirstTraversal();
      expect(result).toEqual([10, 5, 3, 7, 15, 12, 18]);

      bst.delete(10);

      // Current tree:
      //     12
      //    /  \
      //   5    15
      //  / \     \
      // 3   7    18

      result = bst.depthFirstTraversal();
      expect(result).toEqual([12, 5, 3, 7, 15, 18]);

      // Expected DFS result (pre-order after deleting 10):
      // 12, 5, 3, 7, 15, 18
    });

    test('should handle depth-first traversal correctly when the tree has only left children', () => {
      bst.insert(10);
      bst.insert(9);
      bst.insert(8);
      bst.insert(7);
      bst.insert(6);

      // Current tree:
      //         10
      //        /
      //       9
      //      /
      //     8
      //    /
      //   7
      //  /
      // 6

      const result = bst.depthFirstTraversal();
      expect(result).toEqual([10, 9, 8, 7, 6]);

      // Expected DFS result (pre-order):
      // 10, 9, 8, 7, 6
    });

    test('should handle depth-first traversal correctly when the tree has only right children', () => {
      bst.insert(10);
      bst.insert(11);
      bst.insert(12);
      bst.insert(13);
      bst.insert(14);

      // Current tree:
      // 10
      //   \
      //   11
      //     \
      //     12
      //       \
      //       13
      //         \
      //         14

      const result = bst.depthFirstTraversal();
      expect(result).toEqual([10, 11, 12, 13, 14]);

      // Expected DFS result (pre-order):
      // 10, 11, 12, 13, 14
    });
  });

  describe('depthFirstTraversalRecursive', () => {
    test('should return an empty array for depth-first traversal on an empty tree', () => {
      expect(bst.root).toBeNull();

      // Current tree: (empty)

      const result = bst.depthFirstTraversalRecursive();
      expect(result).toEqual([]);

      // Expected DFS Recursive result: (empty)
    });

    test('should perform depth-first traversal correctly on a single-node tree', () => {
      bst.insert(10);

      // Current tree:
      //     10

      const result = bst.depthFirstTraversalRecursive();
      expect(result).toEqual([10]);

      // Expected DFS Recursive result:
      // 10
    });

    test('should perform depth-first traversal correctly on a multi-node tree', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      const result = bst.depthFirstTraversalRecursive();
      expect(result).toEqual([10, 5, 3, 7, 15, 12, 18]);

      // Expected DFS Recursive result:
      // 10, 5, 3, 7, 15, 12, 18
    });

    test('should perform depth-first traversal correctly after deleting a node', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      let result;

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      result = bst.depthFirstTraversalRecursive();
      expect(result).toEqual([10, 5, 3, 7, 15, 12, 18]);

      bst.delete(10);

      // Current tree:
      //     12
      //    /  \
      //   5    15
      //  / \     \
      // 3   7    18

      result = bst.depthFirstTraversalRecursive();
      expect(result).toEqual([12, 5, 3, 7, 15, 18]);

      // Expected DFS Recursive result after deleting 10:
      // 12, 5, 3, 7, 15, 18
    });

    test('should handle depth-first traversal correctly when the tree has only left children', () => {
      bst.insert(10);
      bst.insert(9);
      bst.insert(8);
      bst.insert(7);
      bst.insert(6);

      // Current tree:
      //         10
      //        /
      //       9
      //      /
      //     8
      //    /
      //   7
      //  /
      // 6

      const result = bst.depthFirstTraversalRecursive();
      expect(result).toEqual([10, 9, 8, 7, 6]);

      // Expected DFS Recursive result:
      // 10, 9, 8, 7, 6
    });

    test('should handle depth-first traversal correctly when the tree has only right children', () => {
      bst.insert(10);
      bst.insert(11);
      bst.insert(12);
      bst.insert(13);
      bst.insert(14);

      // Current tree:
      // 10
      //   \
      //   11
      //     \
      //     12
      //       \
      //       13
      //         \
      //         14

      const result = bst.depthFirstTraversalRecursive();
      expect(result).toEqual([10, 11, 12, 13, 14]);

      // Expected DFS Recursive result:
      // 10, 11, 12, 13, 14
    });
  });

  describe('depthFirstSearch', () => {
    test('should return false for depth-first search on an empty tree', () => {
      expect(bst.root).toBeNull();

      // Current tree: (empty)

      expect(bst.depthFirstSearch(10)).toBe(false);
    });

    test('should return true for depth-first search for a node present in a single-node tree', () => {
      bst.insert(10);

      // Current tree:
      //     10

      expect(bst.depthFirstSearch(10)).toBe(true);
    });

    test('should return false for depth-first search for a node not present in a single-node tree', () => {
      bst.insert(10);

      // Current tree:
      //     10

      expect(bst.depthFirstSearch(5)).toBe(false);
    });

    test('should return true for depth-first search for a node present in a multi-node tree', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);

      // Current tree:
      //     10
      //    /  \
      //   5    15

      expect(bst.depthFirstSearch(15)).toBe(true);
    });

    test('should return false for depth-first search for a node not present in a multi-node tree', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);

      // Current tree:
      //     10
      //    /  \
      //   5    15

      expect(bst.depthFirstSearch(7)).toBe(false);
    });
  });

  describe('depthFirstSearchRecursive', () => {
    test('should return false for depth-first search recursive on an empty tree', () => {
      expect(bst.root).toBeNull();

      // Current tree: (empty)

      expect(bst.depthFirstSearchRecursive(10)).toBe(false);
    });

    test('should return true for depth-first search recursive for a node present in a single-node tree', () => {
      bst.insert(10);

      // Current tree:
      //     10

      expect(bst.depthFirstSearchRecursive(10)).toBe(true);
    });

    test('should return false for depth-first search recursive for a node not present in a single-node tree', () => {
      bst.insert(10);

      // Current tree:
      //     10

      expect(bst.depthFirstSearchRecursive(5)).toBe(false);
    });

    test('should return true for depth-first search recursive for a node present in a multi-node tree', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);

      // Current tree:
      //     10
      //    /  \
      //   5    15

      expect(bst.depthFirstSearchRecursive(15)).toBe(true);
    });

    test('should return false for depth-first search recursive for a node not present in a multi-node tree', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);

      // Current tree:
      //     10
      //    /  \
      //   5    15

      expect(bst.depthFirstSearchRecursive(7)).toBe(false);
    });
  });

  describe('breadthFirstTraversal', () => {
    test('should return an empty array for breadth-first traversal on an empty tree', () => {
      expect(bst.root).toBeNull();

      // Current tree: (empty)

      const result = bst.breadthFirstTraversal();
      expect(result).toEqual([]);

      // Expected BFS result: (empty)
    });

    test('should perform breadth-first traversal correctly on a single-node tree', () => {
      bst.insert(10);

      // Current tree:
      //     10

      const result = bst.breadthFirstTraversal();
      expect(result).toEqual([10]);

      // Expected BFS result:
      // 10
    });

    test('should perform breadth-first traversal correctly on a multi-node tree', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      const result = bst.breadthFirstTraversal();
      expect(result).toEqual([10, 5, 15, 3, 7, 12, 18]);

      // Expected BFS result:
      // 10, 5, 15, 3, 7, 12, 18
    });

    test('should handle breadth-first traversal correctly after deleting a node', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      let result;

      // Current tree:
      //     10
      //    /  \
      //   5    15
      //  / \   / \
      // 3   7 12 18

      result = bst.breadthFirstTraversal();
      expect(result).toEqual([10, 5, 15, 3, 7, 12, 18]);

      bst.delete(10);

      // Current tree:
      //     12
      //    /  \
      //   5    15
      //  / \     \
      // 3   7    18

      result = bst.breadthFirstTraversal();
      expect(result).toEqual([12, 5, 15, 3, 7, 18]);

      // Expected BFS result after deleting 10:
      // 12, 5, 15, 3, 7, 18
    });

    test('should handle breadth-first traversal correctly when the tree has only left children', () => {
      bst.insert(10);
      bst.insert(9);
      bst.insert(8);
      bst.insert(7);
      bst.insert(6);

      // Current tree:
      //         10
      //        /
      //       9
      //      /
      //     8
      //    /
      //   7
      //  /
      // 6

      const result = bst.breadthFirstTraversal();
      expect(result).toEqual([10, 9, 8, 7, 6]);

      // Expected BFS result:
      // 10, 9, 8, 7, 6
    });

    test('should handle breadth-first traversal correctly when the tree has only right children', () => {
      bst.insert(10);
      bst.insert(11);
      bst.insert(12);
      bst.insert(13);
      bst.insert(14);

      // Current tree:
      // 10
      //   \
      //   11
      //     \
      //     12
      //       \
      //       13
      //         \
      //         14

      const result = bst.breadthFirstTraversal();
      expect(result).toEqual([10, 11, 12, 13, 14]);

      // Expected BFS result:
      // 10, 11, 12, 13, 14
    });
  });

  describe('breadthFirstSearch', () => {
    test('should return false for breadth-first search on an empty tree', () => {
      expect(bst.root).toBeNull();

      // Current tree: (empty)

      expect(bst.breadthFirstSearch(10)).toBe(false);
    });

    test('should return true for breadth-first search for a node present in a single-node tree', () => {
      bst.insert(10);

      // Current tree:
      //     10

      expect(bst.breadthFirstSearch(10)).toBe(true);
    });

    test('should return false for breadth-first search for a node not present in a single-node tree', () => {
      bst.insert(10);

      // Current tree:
      //     10

      expect(bst.breadthFirstSearch(5)).toBe(false);
    });

    test('should return true for breadth-first search for a node present in a multi-node tree', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);

      // Current tree:
      //     10
      //    /  \
      //   5    15

      expect(bst.breadthFirstSearch(15)).toBe(true);
    });

    test('should return false for breadth-first search for a node not present in a multi-node tree', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);

      // Current tree:
      //     10
      //    /  \
      //   5    15

      expect(bst.breadthFirstSearch(7)).toBe(false);
    });
  });
});

