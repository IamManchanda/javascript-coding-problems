export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return 0 for empty input', () => {
    expect(solution.getLength('')).toBe(0);
  });

  test('should return the length of the string', () => {
    expect(solution.getLength('hello')).toBe(5);
    expect(solution.getLength('mississippi')).toBe(11);
    expect(solution.getLength('aabbcc')).toBe(6);
    expect(solution.getLength('abba')).toBe(4);
    expect(solution.getLength('abab')).toBe(4);
    expect(solution.getLength('aabbbcc')).toBe(7);
  });

  test('should throw an error for non-string input', () => {
    expect(() => solution.getLength(123))
      .toThrowError('Invalid input');
    expect(() => solution.getLength({}))
      .toThrowError('Invalid input');
    expect(() => solution.getLength([]))
      .toThrowError('Invalid input');
    expect(() => solution.getLength(null))
      .toThrowError('Invalid input');
    expect(() => solution.getLength(undefined))
      .toThrowError('Invalid input');
  });

  test('should not throw an error for valid string input', () => {
    expect(() => solution.getLength('hello')).not.toThrow();
  });
};