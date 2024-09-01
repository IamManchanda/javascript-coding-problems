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
