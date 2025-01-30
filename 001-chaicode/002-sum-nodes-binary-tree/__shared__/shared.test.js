import BinaryTree from "../helpers/BinaryTree";

export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return 0 for an empty binary tree', () => {
    const tree = new BinaryTree();
    tree.createTree([]);

    const sum = solution.sumBinaryTree(tree.root);
    expect(sum).toBe(0); // No nodes, sum = 0
  });

  test('sum of all nodes in a complete binary tree', () => {
    const tree = new BinaryTree();
    tree.createTree([1, 2, 3, 4, 5, 6, 7]);

    const sum = solution.sumBinaryTree(tree.root);
    expect(sum).toBe(28); // 1+2+3+4+5+6+7 = 28
  });

  test('sum of all nodes in a binary tree with some null values', () => {
    const tree = new BinaryTree();
    tree.createTree([1, 2, 3, null, 5, 6, 7]);

    const sum = solution.sumBinaryTree(tree.root);
    expect(sum).toBe(24); // 1+2+3+5+6+7 = 24
  });

  test('sum of all nodes in a skewed left binary tree', () => {
    const tree = new BinaryTree();
    tree.createTree([1, 2, null, 4, null, null, null]);

    const sum = solution.sumBinaryTree(tree.root);
    expect(sum).toBe(7); // 1+2+4 = 7
  });

  test('sum of all nodes in a single node binary tree', () => {
    const tree = new BinaryTree();
    tree.createTree([42]);

    const sum = solution.sumBinaryTree(tree.root);
    expect(sum).toBe(42); // Single node with value 42, sum = 42
  });
};