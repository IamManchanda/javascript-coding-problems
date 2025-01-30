export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should handle an empty string', () => {
    expect(solution.reverseString('')).toBe('');
  });

  test('should reverse a string', () => {
    expect(solution.reverseString('hello')).toBe('olleh');
    expect(solution.reverseString('12345')).toBe('54321');
    expect(solution.reverseString('a')).toBe('a');
  });

  test('should reverse a string with special characters', () => {
    expect(solution.reverseString('hello!')).toBe('!olleh');
    expect(solution.reverseString('123@#')).toBe('#@321');
  });

  test('should reverse a string with spaces', () => {
    expect(solution.reverseString('hello world')).toBe('dlrow olleh');
    expect(solution.reverseString('a b c')).toBe('c b a');
  });

  test('should throw an error for non-string input', () => {
    expect(() => solution.reverseString(123))
      .toThrowError('Invalid input');
    expect(() => solution.reverseString({}))
      .toThrowError('Invalid input');
    expect(() => solution.reverseString([]))
      .toThrowError('Invalid input');
    expect(() => solution.reverseString(null))
      .toThrowError('Invalid input');
    expect(() => solution.reverseString(undefined))
      .toThrowError('Invalid input');
  });

  test('should not throw an error for valid string input', () => {
    expect(() => solution.reverseString('hello')).not.toThrow();
  });
};