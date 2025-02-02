export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return correct count for strings with vowels', () => {
    expect(solution.countVowels('hello')).toBe(2);
    expect(solution.countVowels('world')).toBe(1);
    expect(solution.countVowels('aeiou')).toBe(5);
    expect(solution.countVowels('xyz')).toBe(0);
  });

  test('should return correct count regardless of case', () => {
    expect(solution.countVowels('HELLO')).toBe(2);
    expect(solution.countVowels('AeIoU')).toBe(5);
  });

  test('should return 0 for strings with no vowels', () => {
    expect(solution.countVowels('bcdfg')).toBe(0);
    expect(solution.countVowels('')).toBe(0);
  });

  test('should return the length of the string if it contains only vowels', () => {
    expect(solution.countVowels('aeiou')).toBe(5);
    expect(solution.countVowels('aAaEeIiOoUu')).toBe(11);
  });

  test('should throw an error for non-string input', () => {
    expect(() => solution.countVowels(123))
      .toThrowError('Invalid input');
    expect(() => solution.countVowels({}))
      .toThrowError('Invalid input');
    expect(() => solution.countVowels([]))
      .toThrowError('Invalid input');
    expect(() => solution.countVowels(null))
      .toThrowError('Invalid input');
    expect(() => solution.countVowels(undefined))
      .toThrowError('Invalid input');
  });

  test('should not throw an error for valid string input', () => {
    expect(() => solution.countVowels('hello')).not.toThrow();
  });
};
