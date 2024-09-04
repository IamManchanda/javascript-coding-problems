export const sharedTests = (getSolution) => {
  let solution;

  beforeEach(() => {
    solution = getSolution();
  });

  test('should return 1 for factorial of 0', () => {
    expect(solution.factorial(0)).toBe(1);
  });

  test('should return 1 for factorial of 1', () => {
    expect(solution.factorial(1)).toBe(1);
  });

  test('should return 2 for factorial of 2', () => {
    expect(solution.factorial(2)).toBe(2);
  });

  test('should return 6 for factorial of 3', () => {
    expect(solution.factorial(3)).toBe(6);
  });

  test('should return 24 for factorial of 4', () => {
    expect(solution.factorial(4)).toBe(24);
  });

  test('should return 120 for factorial of 5', () => {
    expect(solution.factorial(5)).toBe(120);
  });

  test('should return 720 for factorial of 6', () => {
    expect(solution.factorial(6)).toBe(720);
  });

  test('should handle large numbers', () => {
    expect(solution.factorial(10)).toBe(3628800);
  });

  test('should throw an error if not a number', () => {
    expect(() => solution.factorial('foo'))
      .toThrowError('Invalid input');
  });

  test('should throw an error for negative numbers', () => {
    expect(() => solution.factorial(-1))
      .toThrowError('Negative numbers are not allowed');
  });

  test('should not throw an error for non-negative numbers', () => {
    expect(() => solution.factorial(0)).not.toThrow();
    expect(() => solution.factorial(5)).not.toThrow();
  });
};