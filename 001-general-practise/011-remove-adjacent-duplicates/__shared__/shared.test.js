export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return a empty string for empty input', () => {
    expect(solution.removeAdjDup('')).toBe('');
  });

  test('should remove adjacent duplicates', () => {
    expect(solution.removeAdjDup('hello')).toBe('helo');
    expect(solution.removeAdjDup('mississippi')).toBe('misisipi');
    expect(solution.removeAdjDup('aabbcc')).toBe('abc');
    expect(solution.removeAdjDup('abba')).toBe('aba');
    expect(solution.removeAdjDup('abab')).toBe('abab');
    expect(solution.removeAdjDup('aabbbcc')).toBe('abc');
  });

  test('should throw an error for non-string input', () => {
    expect(() => solution.removeAdjDup(123))
      .toThrowError('Invalid input');
    expect(() => solution.removeAdjDup({}))
      .toThrowError('Invalid input');
    expect(() => solution.removeAdjDup([]))
      .toThrowError('Invalid input');
    expect(() => solution.removeAdjDup(null))
      .toThrowError('Invalid input');
    expect(() => solution.removeAdjDup(undefined))
      .toThrowError('Invalid input');
  });

  test('should not throw an error for valid string input', () => {
    expect(() => solution.removeAdjDup('hello')).not.toThrow();
  });
};