export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return 0 for empty input', () => {
    expect(solution.countAllOccurences([], 1)).toBe(0);
  });

  test('should return the count of the key in the array', () => {
    expect(solution.countAllOccurences([1, 2, 3, 4, 5], 1)).toBe(1);
    expect(solution.countAllOccurences([1, 1, 1, 1, 1], 1)).toBe(5);
    expect(solution.countAllOccurences([1, 2, 3, 4, 5], 6)).toBe(0);
    expect(solution.countAllOccurences([1, 2, 3, 4, 5], 5)).toBe(1);
    expect(solution.countAllOccurences([1, 2, 3, 4, 5, 5, 5], 5)).toBe(3);
  });

  test('should throw an error if input is not an array', () => {
    expect(() => solution.countAllOccurences('string', 1)).toThrow('Input must be an array');
  });

  test('should throw an error if array contains non-numbers', () => {
    expect(() => solution.countAllOccurences([1, 2, 'string'], 1)).toThrow('Array must contain only numbers');
  });

  test('should throw an error if array contains non-integers', () => {
    expect(() => solution.countAllOccurences([1, 2, 3.5], 1)).toThrow('Array must contain only integers');
  });

  test('should throw an error if key is not a number', () => {
    expect(() => solution.countAllOccurences([1, 2, 3], 'string')).toThrow('Key must be a number');
  });

  test('should throw an error if key is not an integer', () => {
    expect(() => solution.countAllOccurences([1, 2, 3], 3.5)).toThrow('Key must be an integer');
  });

  test('should not throw an error if input is valid', () => {
    expect(() => solution.countAllOccurences([1, 2, 3], 3)).not.toThrow();
  });
};