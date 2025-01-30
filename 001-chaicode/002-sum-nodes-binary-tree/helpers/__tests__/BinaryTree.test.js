import BinaryTree from '../BinaryTree';

describe('BinaryTree', () => {
  test('create an empty binary tree', () => {
    const tree = new BinaryTree();
    const arr = [];
    tree.createTree(arr);

    // Current tree: (empty)

    expect(tree.root).toBeNull();
  });

  test('create a complete binary tree from an array', () => {
    const tree = new BinaryTree();
    const arr = [1, 2, 3, 4, 5, 6, 7];
    tree.createTree(arr);

    // Current tree:
    //       1
    //      / \
    //     2   3
    //    / \ / \
    //   4  5 6  7

    expect(tree.root.key).toBe(1);
    expect(tree.root.left.key).toBe(2);
    expect(tree.root.right.key).toBe(3);
    expect(tree.root.left.left.key).toBe(4);
    expect(tree.root.left.right.key).toBe(5);
    expect(tree.root.right.left.key).toBe(6);
    expect(tree.root.right.right.key).toBe(7);
  });

  test('create a binary tree with some null values', () => {
    const tree = new BinaryTree();
    const arr = [1, 2, 3, null, 5, 6, 7];
    tree.createTree(arr);

    // Current tree:
    //       1
    //      / \
    //     2   3
    //      \ / \
    //      5 6  7

    expect(tree.root.key).toBe(1);
    expect(tree.root.left.key).toBe(2);
    expect(tree.root.right.key).toBe(3);
    expect(tree.root.left.left).toBeNull();
    expect(tree.root.left.right.key).toBe(5);
    expect(tree.root.right.left.key).toBe(6);
    expect(tree.root.right.right.key).toBe(7);
  });

  test('create a skewed left binary tree', () => {
    const tree = new BinaryTree();
    const arr = [1, 2, null, 4, null];
    tree.createTree(arr);

    // Current tree:
    //       1
    //      /
    //     2
    //    /
    //   4

    expect(tree.root.key).toBe(1);
    expect(tree.root.left.key).toBe(2);
    expect(tree.root.right).toBeNull();
    expect(tree.root.left.left.key).toBe(4);
    expect(tree.root.left.right).toBeNull();
  });

  test('create a single node binary tree', () => {
    const tree = new BinaryTree();
    const arr = [42];
    tree.createTree(arr);

    // Current tree:
    //   42

    expect(tree.root.key).toBe(42);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });
});
