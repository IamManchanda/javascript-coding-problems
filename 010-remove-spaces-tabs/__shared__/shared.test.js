export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should remove all spaces and tabs from a string', () => {
    expect(solution.removeSpacesTabs('hello')).toBe('hello');
    expect(solution.removeSpacesTabs('hello world')).toBe('helloworld');
    expect(solution.removeSpacesTabs('hello\tworld')).toBe('helloworld');
    expect(solution.removeSpacesTabs('hello\t\tworld')).toBe('helloworld');
    expect(solution.removeSpacesTabs('hello world\t')).toBe('helloworld');
  });

  test('should return an empty string for empty input', () => {
    expect(solution.removeSpacesTabs('')).toBe('');
  });

  test('should throw an error for non-string input', () => {
    expect(() => solution.removeSpacesTabs(123))
      .toThrowError('Invalid input');
    expect(() => solution.removeSpacesTabs({}))
      .toThrowError('Invalid input');
    expect(() => solution.removeSpacesTabs([]))
      .toThrowError('Invalid input');
    expect(() => solution.removeSpacesTabs(null))
      .toThrowError('Invalid input');
    expect(() => solution.removeSpacesTabs(undefined))
      .toThrowError('Invalid input');
  });

  test('should not throw an error for valid string input', () => {
    expect(() => solution.removeSpacesTabs('hello')).not.toThrow();
  });
};