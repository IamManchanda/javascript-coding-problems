export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return the first index of the found element', () => {
    expect(solution.findFirstOccurence([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test('should return -1 when the element is not found', () => {
    expect(solution.findFirstOccurence([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  test('should return 0 when the element is at the first position', () => {
    expect(solution.findFirstOccurence([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  test('should handle an array with negative numbers', () => {
    expect(solution.findFirstOccurence([-1, -2, -3, -4, -5], -3)).toBe(2);
  });

  test('should return the index for a repeated element', () => {
    expect(solution.findFirstOccurence([1, 2, 3, 3, 3], 3)).toBe(2);
  });

  test('should handle a valid input with current index correctly', () => {
    expect(solution.findFirstOccurence([1, 2, 3], 3, 1)).toBe(2);
  });

  test('should throw an error for invalid input types', () => {
    expect(() => solution.findFirstOccurence(123, 3)).toThrow('Invalid input');
  });

  test('should throw an error when array is empty', () => {
    expect(() => solution.findFirstOccurence([], 3)).toThrow('Array is empty');
  });

  test('should handle input with current index greater than to the array length', () => {
    expect(() => solution.findFirstOccurence([1, 2, 3], 2, 3)).toThrow('Invalid index');
  });

  test('should handle an array with non-number elements', () => {
    expect(() => solution.findFirstOccurence([1, 2, '3'], 3)).toThrow('Array must contain only numbers');
  });
};
